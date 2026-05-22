import { cache } from "react";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:5000/api";

const allowedIcons = ["gear", "building", "target", "shield"] as const;

export type HomeStatsIcon = (typeof allowedIcons)[number];

export type HomeStat = {
  value: string;
  label: string;
  icon: HomeStatsIcon;
};

export const defaultHomeStats: HomeStat[] = [
  { value: "45+", label: "Years Legacy", icon: "gear" },
  { value: "500+", label: "Trusted by Institutions", icon: "building" },
  { value: "100+", label: "Precision Instruments", icon: "target" },
  { value: "100%", label: "Quality Assured", icon: "shield" },
];

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isDynamicServerUsageError(error: unknown): boolean {
  return (
    isRecord(error) &&
    (error.digest === "DYNAMIC_SERVER_USAGE" ||
      (typeof error.description === "string" &&
        error.description.includes("couldn't be rendered statically")))
  );
}

function isAllowedIcon(value: unknown): value is HomeStatsIcon {
  return typeof value === "string" && allowedIcons.includes(value as HomeStatsIcon);
}

function normalizeStats(value: unknown): HomeStat[] {
  if (!Array.isArray(value)) return [];

  return value.map((stat, index) => {
    const fallback = defaultHomeStats[index % defaultHomeStats.length];

    if (!isRecord(stat)) return fallback;

    return {
      value: typeof stat.value === "string" ? stat.value : fallback.value,
      label: typeof stat.label === "string" ? stat.label : fallback.label,
      icon: isAllowedIcon(stat.icon) ? stat.icon : fallback.icon,
    };
  });
}

function pickHomeStatsPayload(data: unknown): Record<string, unknown> {
  if (!isRecord(data)) return {};

  const payload = data.homeStats || data.home_stats || data.data || data;
  return isRecord(payload) ? payload : {};
}

export const fetchHomeStats = cache(async (): Promise<HomeStat[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/home-stats`, {
      cache: "no-store",
    });

    if (!response.ok) return defaultHomeStats;

    const payload = pickHomeStatsPayload(await response.json());

    if (payload.isActive === false) return defaultHomeStats;

    const stats = normalizeStats(payload.stats);
    return stats.length > 0 ? stats : defaultHomeStats;
  } catch (error) {
    if (isDynamicServerUsageError(error)) {
      throw error;
    }

    console.error("Failed to fetch HomeStats data:", error);
    return defaultHomeStats;
  }
});
