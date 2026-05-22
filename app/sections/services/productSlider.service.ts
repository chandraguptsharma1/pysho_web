const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:5000/api";

type SliderSpec = {
  label?: string;
  value?: string;
};

type SliderResponseItem = {
  _id?: string;
  title?: string;
  category?: string;
  price?: string;
  image?: string;
  hoverText?: string;
  ctaText?: string;
  ctaLink?: string;
  specs?: SliderSpec[];
  sortOrder?: number;
  isActive?: boolean;
};

export type ProductSlide = {
  id: string;
  name: string;
  badge: string;
  price: string;
  img: string;
  ctaText: string;
  ctaLink?: string;
  specs: [string, string][];
};

function normalizeSpecs(specs: unknown): [string, string][] {
  if (!Array.isArray(specs)) return [];

  return specs
    .slice(0, 6)
    .map((spec) => {
      if (typeof spec !== "object" || spec === null) return null;

      const { label, value } = spec as SliderSpec;
      if (!label || !value) return null;

      return [label, value] as [string, string];
    })
    .filter((spec): spec is [string, string] => spec !== null);
}

function normalizePrice(price: unknown) {
  if (typeof price !== "string" || !price.trim()) return "Contact for price";
  return price;
}

function normalizeSlider(slider: SliderResponseItem, index: number): ProductSlide | null {
  if (!slider.image) return null;

  return {
    id: slider._id || `${slider.title || "slider"}-${index}`,
    name: slider.title || "Product",
    badge: slider.category || "Featured",
    price: normalizePrice(slider.price),
    img: slider.image,
    ctaText: slider.ctaText || "Get a Quote",
    ctaLink: slider.ctaLink,
    specs: normalizeSpecs(slider.specs),
  };
}

export async function fetchProductSlides(): Promise<ProductSlide[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/sliders?active=true`, {
      cache: "no-store",
    });

    if (!response.ok) return [];

    const data = await response.json();
    const sliders: SliderResponseItem[] = Array.isArray(data?.sliders)
      ? data.sliders
      : [];

    return sliders
      .sort(
        (a: SliderResponseItem, b: SliderResponseItem) =>
          (a.sortOrder || 0) - (b.sortOrder || 0)
      )
      .map(normalizeSlider)
      .filter((slide): slide is ProductSlide => slide !== null);
  } catch (error) {
    console.error("Failed to fetch product slider data:", error);
    return [];
  }
}
