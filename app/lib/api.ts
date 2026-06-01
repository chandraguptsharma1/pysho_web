import { API_BASE_URL } from "./config";

export interface Product {
    _id: string;
    name: string;
    category: string;
    slug: string;
    price: number;
    moq: string;
    gstExtra: boolean;
    description: string;
    stock: string;
    tags: string[];
    images: string[];
    technology: string;
    condition: string;
    application: string;
    equipmentType: string;
    automationGrade: string;
    color: string;
    material: string;
    shape: string;
    size: string;
    treatmentType: string;
    minOrder: string;
    supplyAbility: string;
    deliveryTime: string;
    packaging: string;
    sample: string;
    market: string;
    faqs: { question: string; answer: string }[];
    createdAt: string;
    updatedAt: string;
}

export async function fetchProducts(): Promise<Product[]> {
    const res = await fetch(`${API_BASE_URL}/products`);
    if (!res.ok) throw new Error('Failed to fetch products');
    const data = await res.json();
    return data.products;
}

export async function fetchProductBySlug(slug: string): Promise<Product> {
    const res = await fetch(`${API_BASE_URL}/products/${slug}`);
    if (!res.ok) throw new Error('Failed to fetch product');
    const data = await res.json();
    return data.product;
}
