const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export type HeroSlide = {
  imageUrl: string;
  label: string;
};

export type HeroData = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  desktopImageUrl: string;
  desktopImageAlt: string;
  ctaPrimaryText: string;
  ctaPrimaryHref: string;
  ctaSecondaryText: string;
  ctaSecondaryHref: string;
  mobileSlides: HeroSlide[];
  isActive: boolean;
};

export const defaultHeroData: HeroData = {
  eyebrow: "Precision Psychology Tools",
  title: "Engineering Precision for Psychological Science",
  highlight: "Psychological Science",
  description:
    "Over 45 years of excellence in manufacturing high-performance psychology apparatus for education and research.",
  desktopImageUrl: "/hero-desktop-reference.png",
  desktopImageAlt: "Psychology laboratory instruments",
  ctaPrimaryText: "Explore Products",
  ctaPrimaryHref: "/products",
  ctaSecondaryText: "Contact Us",
  ctaSecondaryHref: "/contact",
  mobileSlides: [
    { imageUrl: "/slider/slider1.png", label: "Precision Psychology Lab Setup" },
    { imageUrl: "/slider/slider2.png", label: "Measurement and Calibration Tools" },
    { imageUrl: "/slider/slider3.png", label: "Steadiness and Motor Skill Apparatus" },
    { imageUrl: "/slider/slider4.png", label: "Reaction Time and Response Instruments" },
    { imageUrl: "/slider/slider5.png", label: "Learning and Cognitive Assessment Tools" },
    { imageUrl: "/slider/slider6.png", label: "Memory and Research Equipment" },
  ],
  isActive: true,
};

export async function fetchHero(): Promise<HeroData> {
  try {
    const response = await fetch(`${API_BASE_URL}/hero`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Hero API request failed");
    }
    const data = await response.json();
    return data?.hero || defaultHeroData;
  } catch (error) {
    console.error("Unable to fetch hero data:", error);
    return defaultHeroData;
  }
}
