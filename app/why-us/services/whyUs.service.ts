export type WhyUsStat = {
  value: string;
  label: string;
};

export type WhyUsReason = {
  title: string;
  text: string;
  isActive: boolean;
};

export type WhyUsSection = {
  eyebrow: string;
  title: string;
  description: string;
  stats: WhyUsStat[];
  reasons: WhyUsReason[];
  ctaText: string;
  ctaLabel: string;
  ctaHref: string;
  isActive: boolean;
};

type WhyUsResponse = {
  whyUs?: Partial<WhyUsSection>;
  whyChooseUs?: Partial<WhyUsSection>;
  data?: {
    whyUs?: Partial<WhyUsSection>;
    whyChooseUs?: Partial<WhyUsSection>;
    data?: {
      whyUs?: Partial<WhyUsSection>;
      whyChooseUs?: Partial<WhyUsSection>;
    };
  };
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";

export const defaultWhyUsData: WhyUsSection = {
  eyebrow: "Why Choose Us",
  title: "Built for labs. Backed by quality.",
  description: "We focus on dependable apparatus, direct pricing, safe dispatch, and support that makes procurement easier for institutions.",
  stats: [
    { value: "30+", label: "Years Experience" },
    { value: "500+", label: "Institutions Served" },
    { value: "100%", label: "Quality Focus" },
  ],
  reasons: [
    { title: "Quality Manufacturing", text: "Durable psychology lab equipment made with practical lab use in mind.", isActive: true },
    { title: "Factory Direct Price", text: "Direct supply helps institutions get fair pricing for regular and bulk orders.", isActive: true },
    { title: "Custom Apparatus", text: "Product modification and specific dimensions can be supported on request.", isActive: true },
    { title: "Pan India Delivery", text: "Wardha location helps us dispatch efficiently across India.", isActive: true },
    { title: "Secure Packaging", text: "Careful packing keeps instruments protected during transport.", isActive: true },
    { title: "After-Sales Support", text: "Quick help for product guidance, order updates, and support needs.", isActive: true },
  ],
  ctaText: "Need reliable psychology lab equipment for your institution?",
  ctaLabel: "Get a Quote",
  ctaHref: "/contact",
  isActive: true,
};

function normalizeWhyUs(whyUs?: Partial<WhyUsSection> | null): WhyUsSection {
  if (!whyUs) return defaultWhyUsData;

  return {
    ...defaultWhyUsData,
    ...whyUs,
    stats: Array.isArray(whyUs.stats) && whyUs.stats.length ? whyUs.stats : defaultWhyUsData.stats,
    reasons: Array.isArray(whyUs.reasons) && whyUs.reasons.length
      ? whyUs.reasons.map((reason, index) => ({
          ...defaultWhyUsData.reasons[index % defaultWhyUsData.reasons.length],
          ...reason,
          isActive: typeof reason.isActive === "boolean" ? reason.isActive : true,
        }))
      : defaultWhyUsData.reasons,
    isActive: typeof whyUs.isActive === "boolean" ? whyUs.isActive : true,
  };
}

export async function fetchWhyUs(): Promise<WhyUsSection> {
  try {
    const response = await fetch(`${API_BASE_URL}/why-us`, { cache: "no-store" });
    if (!response.ok) return defaultWhyUsData;

    const data = (await response.json()) as WhyUsResponse;
    return normalizeWhyUs(
      data.whyUs ||
      data.whyChooseUs ||
      data.data?.whyUs ||
      data.data?.whyChooseUs ||
      data.data?.data?.whyUs ||
      data.data?.data?.whyChooseUs
    );
  } catch (error) {
    console.error("Failed to fetch why-us data:", error);
    return defaultWhyUsData;
  }
}
