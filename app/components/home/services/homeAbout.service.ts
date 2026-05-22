const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";
const UPLOADS_BASE_URL =
  process.env.NEXT_PUBLIC_UPLOADS_BASE_URL || "http://localhost:3001";

export type HomeAboutData = {
  eyebrow: string;
  heading: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaText: string;
  ctaHref: string;
  strengthsEyebrow: string;
  strengths: string[];
  strengthsImageSrc: string;
  strengthsImageAlt: string;
};

export const defaultHomeAboutData: HomeAboutData = {
  eyebrow: "About Us",
  heading: "About Vishwakarma PsyTech Labs",
  description:
    "Vishwakarma PsyTech Labs stands at the intersection of precision engineering and psychological science, delivering world-class apparatus backed by more than 45 years of legacy and expertise.",
  imageSrc: "/about-lab.png",
  imageAlt: "Psychology laboratory",
  ctaText: "Learn More About Us",
  ctaHref: "/about",
  strengthsEyebrow: "Our Strengths",
  strengths: [
    "Engineering excellence in every product",
    "Deep understanding of psychological research needs",
    "High accuracy and consistent performance",
    "Scalable manufacturing capabilities",
    "Continuous innovation and improvement",
  ],
  strengthsImageSrc: "/strengths-blueprint.png",
  strengthsImageAlt: "Precision measurement tools",
};

function normalizeStrengths(value: unknown): string[] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => {
      if (typeof item === "string") return item;
      if (typeof item === "object" && item !== null) {
        if (typeof (item as { label?: string }).label === "string") {
          return (item as { label: string }).label;
        }
        if (typeof (item as { text?: string }).text === "string") {
          return (item as { text: string }).text;
        }
        if (typeof (item as { title?: string }).title === "string") {
          return (item as { title: string }).title;
        }
      }
      return "";
    })
    .filter(Boolean);
}

function normalizeImageSrc(value: unknown, fallback: string): string {
  if (typeof value !== "string" || !value.trim()) return fallback;

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  if (!value.startsWith("/uploads/")) return value;

  return `${UPLOADS_BASE_URL}${value}`;
}

export async function fetchHomeAbout(): Promise<HomeAboutData> {
  try {
    const response = await fetch(`${API_BASE_URL}/home-about`, {
      cache: "no-store",
    });
    if (!response.ok) return defaultHomeAboutData;

    const data = await response.json();
    const payload =
      data?.homeAbout || data?.home_about || data?.about || data?.data || {};

    let strengthsPayload = payload;
    try {
      const strengthsResponse = await fetch(`${API_BASE_URL}/home-excellence`, {
        cache: "no-store",
      });

      if (strengthsResponse.ok) {
        const strengthsData = await strengthsResponse.json();
        strengthsPayload =
          strengthsData?.homeExcellence ||
          strengthsData?.home_excellence ||
          strengthsData?.data ||
          strengthsPayload;
      }
    } catch (error) {
      console.error("Failed to fetch HomeStrengths data:", error);
    }

    return {
      eyebrow: payload.eyebrow || defaultHomeAboutData.eyebrow,
      heading:
        payload.title || payload.heading || defaultHomeAboutData.heading,
      description:
        payload.subtitle || payload.description || defaultHomeAboutData.description,
      imageSrc: normalizeImageSrc(
        payload.imageUrl ||
        payload.image ||
        payload.imageSrc,
        defaultHomeAboutData.imageSrc
      ),
      imageAlt: payload.imageAlt || defaultHomeAboutData.imageAlt,
      ctaText: payload.ctaText || payload.cta || defaultHomeAboutData.ctaText,
      ctaHref: payload.ctaHref || payload.ctaLink || defaultHomeAboutData.ctaHref,
      strengthsEyebrow:
        strengthsPayload.strengthsEyebrow || defaultHomeAboutData.strengthsEyebrow,
      strengths:
        normalizeStrengths(strengthsPayload.strengths).length > 0
          ? normalizeStrengths(strengthsPayload.strengths)
          : defaultHomeAboutData.strengths,
      strengthsImageSrc: normalizeImageSrc(
        strengthsPayload.imageUrl ||
        strengthsPayload.image ||
        strengthsPayload.imageSrc,
        defaultHomeAboutData.strengthsImageSrc
      ),
      strengthsImageAlt:
        strengthsPayload.imageAlt || defaultHomeAboutData.strengthsImageAlt,
    };
  } catch (error) {
    console.error("Failed to fetch HomeAbout data:", error);
    return defaultHomeAboutData;
  }
}
