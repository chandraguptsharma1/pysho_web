import { notFound } from "next/navigation";
import { products } from "../productData";
import ProductDetailsClient from "./ProductDetailsClient";

export async function generateStaticParams() {
    return products.map((p) => ({ slug: p.slug }));
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const product = products.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    return <ProductDetailsClient product={product} />;
}