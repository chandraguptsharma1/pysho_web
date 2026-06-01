import { API_BASE_URL } from "../../lib/config";

export type AdminSlider = {
  _id: string;
  title: string;
  category?: string;
  price?: string;
  image: string;
  publicId?: string;
  hoverText?: string;
  ctaText?: string;
  ctaLink?: string;
  productId?: string;
  specs?: Array<{ label: string; value: string }>;
  sortOrder?: number;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type ProductSlide = {
  name: string;
  badge: string;
  price: string;
  img: string;
  specs: [string, string][];
};

export async function fetchAdminSliders(): Promise<AdminSlider[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/sliders?active=true`);
    if (!response.ok) return [];

    const data = await response.json();
    const sliders = Array.isArray(data?.sliders) ? data.sliders : [];
    
    // Sort by sortOrder
    return sliders.sort((a: AdminSlider, b: AdminSlider) => (a.sortOrder || 0) - (b.sortOrder || 0));
  } catch (error) {
    console.error("Failed to fetch admin sliders:", error);
    return [];
  }
}

export function transformSliderToSlide(slider: AdminSlider): ProductSlide {
  const specs: [string, string][] = [];

  if (slider.specs && Array.isArray(slider.specs)) {
    // Use specs from slider (up to 6)
    slider.specs.slice(0, 6).forEach((spec) => {
      if (spec.label && spec.value) {
        specs.push([spec.label, spec.value]);
      }
    });
  }

  // Pad with empty specs if needed
  while (specs.length < 6) {
    specs.push(["", ""]);
  }

  return {
    name: slider.title || "Product",
    badge: slider.category || "Featured",
    price: slider.price ? `Rs. ${slider.price}` : "Contact for price",
    img: slider.image || "/product/default.png",
    specs: specs as [string, string][],
  };
}
