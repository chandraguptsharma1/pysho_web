import { API_BASE_URL } from "../../../lib/config";

export type FooterSocialLink = {
  label: string;
  icon: string;
  href: string;
};

export type FooterData = {
  companyLinks: { label: string; href: string }[];
  productLinks: { label: string; href: string }[];
  supportLinks: { label: string; href: string }[];
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  description: string;
  copyright: string;
  socialLinks: FooterSocialLink[];
};

export const defaultFooterData: FooterData = {
  companyLinks: [
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/about" },
    { label: "Careers", href: "/contact" },
    { label: "Blog", href: "/about" },
  ],
  productLinks: [
    { label: "All Products", href: "/products" },
    { label: "Categories", href: "/products" },
    { label: "New Arrivals", href: "/products" },
    { label: "Custom Solutions", href: "/contact" },
  ],
  supportLinks: [
    { label: "Contact Us", href: "/contact" },
    { label: "Enquiry", href: "/contact" },
    { label: "Downloads", href: "/products" },
    { label: "FAQ", href: "/contact" },
  ],
  contactInfo: {
    phone: "+91 12345 67890",
    email: "info@vpsytech.com",
    address: "Plot No. 123, Industrial Area, Pune - 411026, India",
  },
  description: "Engineering precision instruments that empower education, enhance research, and advance science.",
  copyright: "© 2026 Vishwakarma PsyTech Labs. All rights reserved.",
  socialLinks: [
    { label: "Facebook", icon: "facebook", href: "" },
    { label: "Instagram", icon: "instagram", href: "" },
    { label: "YouTube", icon: "youtube", href: "" },
  ],
};

function normalizeSocialLinks(socialLinks: unknown): FooterSocialLink[] {
  if (!Array.isArray(socialLinks)) return defaultFooterData.socialLinks;

  const normalized = socialLinks
    .map((item) => {
      if (typeof item === "string") {
        return { label: getSocialLabel(item), icon: item, href: "" };
      }

      if (!item || typeof item !== "object") return null;
      const link = item as Partial<FooterSocialLink>;
      return {
        label: link.label || link.icon || "",
        icon: link.icon || link.label || "",
        href: link.href || "",
      };
    })
    .filter((item): item is FooterSocialLink => Boolean(item));

  return normalized.length ? normalized : defaultFooterData.socialLinks;
}

function getSocialLabel(name: string) {
  const key = name.trim().toLowerCase();
  if (key === "f" || key === "fb" || key === "facebook") return "Facebook";
  if (key === "yt" || key === "youtube") return "YouTube";
  if (key === "in" || key === "ig" || key === "instagram") return "Instagram";
  return name;
}

export async function fetchFooter(): Promise<FooterData> {
  try {
    const response = await fetch(`${API_BASE_URL}/footer`, {
      cache: "no-store",
    });
    if (!response.ok) return defaultFooterData;

    const data = await response.json();
    const footer =
      data?.footer ||
      data?.footerData ||
      data?.data?.footer ||
      data?.data?.footerData ||
      data?.data;

    if (!footer) return defaultFooterData;

    return {
      companyLinks: footer.companyLinks || footer.quickLinks || defaultFooterData.companyLinks,
      productLinks: footer.productLinks || footer.popularProducts || defaultFooterData.productLinks,
      supportLinks: footer.supportLinks || defaultFooterData.supportLinks,
      contactInfo: {
        phone: footer.contactInfo?.phone || footer.contact?.phone || defaultFooterData.contactInfo.phone,
        email: footer.contactInfo?.email || footer.contact?.email || defaultFooterData.contactInfo.email,
        address: footer.contactInfo?.address || footer.contact?.address || defaultFooterData.contactInfo.address,
      },
      description: footer.description || footer.brand?.description || defaultFooterData.description,
      copyright: footer.copyright || defaultFooterData.copyright,
      socialLinks: normalizeSocialLinks(footer.socialLinks),
    };
  } catch (error) {
    console.error("Failed to fetch Footer data:", error);
    return defaultFooterData;
  }
}
