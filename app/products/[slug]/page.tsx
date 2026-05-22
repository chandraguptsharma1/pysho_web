"use client";

import { useState, useEffect } from "react";
import { notFound, useParams } from "next/navigation";
import { fetchProductBySlug, type Product } from "../../lib/api";
import ProductDetailsClient from "./ProductDetailsClient";

export default function Page() {
    const params = useParams();
    const slug = params.slug as string;
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProductBySlug(slug)
            .then(setProduct)
            .catch(() => setProduct(null))
            .finally(() => setLoading(false));
    }, [slug]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent mx-auto"></div>
                    <p className="text-slate-600">Loading product...</p>
                </div>
            </div>
        );
    }

    if (!product) {
        notFound();
    }

    return <ProductDetailsClient product={product} />;
}