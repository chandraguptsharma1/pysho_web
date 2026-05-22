export type AboutMetric = {
  value: string;
  label: string;
};

export type AboutStrength = {
  title: string;
  description: string;
};

export type AboutSection = {
  title: string;
  description: string;
};

export type AboutData = {
  eyebrow: string;
  title: string;
  highlight: string;
  paragraphs: string[];
  location: string;
  metrics: AboutMetric[];
  mission: AboutSection;
  objective: AboutSection;
  strengthIntro: AboutSection;
  strengths: AboutStrength[];
  isActive: boolean;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const defaultAboutData: AboutData = {
  eyebrow: "About Psychoscan",
  title: "Crafting Precision Tools for the Science of Mind",
  highlight: "Precision Tools",
  paragraphs: [
    "Psychoscan strives to stand out in the business with our extensive line-up of psychology lab equipment that is completely quality assured. We produce equipment in our specially constructed plant at Wardha, Maharashtra (India).",
    "We manufacture the equipment and tests needed by psychology labs, students, educators, physical education departments, and researchers including the Bolt Head Maze, Tachistoscope, Mirror Drawing apparatus, and much more.",
  ],
  location: "Wardha, Maharashtra, India",
  metrics: [
    { value: "30+", label: "Years of Experience" },
    { value: "500+", label: "Institutions Served" },
    { value: "100+", label: "Precision Apparatus" },
    { value: "100%", label: "Quality Commitment" },
  ],
  mission: {
    title: "Our Mission",
    description: "Quality and Service are at the heart of everything we do. We are committed to manufacturing precision psychology apparatus that empowers researchers, educators, and students across India.",
  },
  objective: {
    title: "Our Objectives",
    description: "We put in a lot of effort every day to reach our goal of offering high-quality goods at factory prices in order to deliver exceptional services in the field of psychology.",
  },
  strengthIntro: {
    title: "Product Customization",
    description: "As a reliable and skilled manufacturer, we are experts in providing customisation services. Products with specific dimensions and quality materials can be made by our skilled staff, tailored exactly to your requirements.",
  },
  strengths: [
    { title: "Precision Manufacturing", description: "Products with specific dimensions and quality material made by our skilled staff to exact specifications." },
    { title: "Prompt Delivery", description: "Centrally located in Wardha, we ensure faster delivery to every corner of India." },
    { title: "Secure & Ethical Practices", description: "Exceptional packaging, ethical business practices, and quality commitment in every single order." },
  ],
  isActive: true,
};

export async function fetchAbout(): Promise<AboutData> {
  try {
    const response = await fetch(`${API_BASE_URL}/about`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Failed to fetch About data");
    }
    const data = await response.json();
    return data?.about || defaultAboutData;
  } catch (error) {
    console.error("About fetch failed:", error);
    return defaultAboutData;
  }
}
