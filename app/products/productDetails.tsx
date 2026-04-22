"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "./productData";

// ── Static params for SSG ─────────────────────────────────────────────────────
export async function generateStaticParams() {
    return products.map((p) => ({ slug: p.slug }));
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatINR(n: number) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(n);
}

const matBadge: Record<string, { bg: string; text: string }> = {
    wood: { bg: "bg-green-100", text: "text-green-800" },
    metal: { bg: "bg-blue-100", text: "text-blue-800" },
    paper: { bg: "bg-amber-100", text: "text-amber-800" },
    cloth: { bg: "bg-pink-100", text: "text-pink-800" },
    electronic: { bg: "bg-purple-100", text: "text-purple-800" },
};

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ProductDetailPage({
    params,
}: {
    params: { slug: string };
}) {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) notFound();

    const [quoteOpen, setQuoteOpen] = useState(false);
    const [imgError, setImgError] = useState(false);
    const badge = matBadge[product.mat];

    // Related products (same category, exclude self)
    const related = products
        .filter((p) => p.cat === product.cat && p.slug !== product.slug)
        .slice(0, 4);

    return (
        <main className="min-h-screen bg-white font-sans">

            {/* ── Breadcrumb ── */}
            <nav className="border-b border-gray-100 px-6 py-3 text-xs text-gray-400 md:px-16">
                <Link href="/products" className="hover:text-gray-600">Products</Link>
                <span className="mx-2">›</span>
                <span className="text-gray-600">{product.name}</span>
            </nav>

            {/* ── Main Product Section ── */}
            <div className="mx-auto max-w-6xl px-6 py-10 md:px-16">
                <div className="grid gap-10 md:grid-cols-2">

                    {/* Left – Image */}
                    <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
                        {!imgError ? (
                            <Image
                                src={product.imagePlaceholder}
                                alt={product.name}
                                fill
                                className="object-contain p-4"
                                onError={() => setImgError(true)}
                                priority
                            />
                        ) : (
                            /* Fallback when image not found */
                            <div className="flex h-full flex-col items-center justify-center gap-3 text-gray-300">
                                <span className="text-7xl">{product.icon}</span>
                                <p className="text-xs">
                                    Place image at{" "}
                                    <code className="font-mono text-gray-400">
                                        public{product.imagePlaceholder}
                                    </code>
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Right – Details */}
                    <div className="flex flex-col gap-5">

                        {/* Category + name */}
                        <div>
                            <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${badge.bg} ${badge.text} mb-3`}>
                                {product.cat}
                            </span>
                            <h1 className="font-serif text-3xl font-semibold leading-tight text-gray-900">
                                {product.name}
                            </h1>
                        </div>

                        {/* Price block */}
                        <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50 px-5 py-4">
                            <div>
                                <p className="text-xs text-gray-400">Price</p>
                                <p className="font-serif text-3xl font-semibold text-emerald-600">
                                    {formatINR(product.price)}
                                    <span className="ml-1 font-sans text-sm font-normal text-gray-400">
                                        / {product.unit}
                                    </span>
                                </p>
                            </div>
                            <div className="ml-auto text-right">
                                <p className="text-xs text-gray-400">Min. Order</p>
                                <p className="text-sm font-medium text-gray-700">
                                    {product.moq} {product.unit}
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        {product.description && (
                            <p className="text-sm leading-relaxed text-gray-500">
                                {product.description}
                            </p>
                        )}

                        {/* CTA buttons */}
                        <div className="flex gap-3">
                            <button
                                onClick={() => setQuoteOpen(true)}
                                className="flex-1 rounded-xl bg-emerald-600 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 active:scale-95"
                            >
                                Get a Price / Quote
                            </button>
                            <a
                                href="tel:+91XXXXXXXXXX"
                                className="flex-1 rounded-xl border border-gray-200 py-3 text-center text-sm font-medium text-gray-700 transition hover:bg-gray-50 active:scale-95"
                            >
                                Call Now
                            </a>
                        </div>

                        {/* Specifications table */}
                        <div>
                            <h2 className="mb-3 text-sm font-semibold text-gray-700">
                                Specifications
                            </h2>
                            <table className="w-full text-sm">
                                <tbody>
                                    {Object.entries(product.specs).map(([key, val]) => (
                                        <tr key={key} className="border-t border-gray-100">
                                            <td className="py-2.5 pr-4 text-gray-400 w-1/2">{key}</td>
                                            <td className="py-2.5 font-medium text-gray-800">{val}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* ── Related Products ── */}
                {related.length > 0 && (
                    <div className="mt-16">
                        <h2 className="mb-6 font-serif text-xl font-semibold text-gray-900">
                            Related Products
                        </h2>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                            {related.map((rp) => (
                                <Link
                                    key={rp.slug}
                                    href={`/products/${rp.slug}`}
                                    className="group rounded-xl border border-gray-100 p-4 transition hover:border-emerald-200 hover:bg-emerald-50"
                                >
                                    <span className="text-3xl">{rp.icon}</span>
                                    <p className="mt-3 text-[13px] font-medium text-gray-900 group-hover:text-emerald-700 leading-snug">
                                        {rp.name}
                                    </p>
                                    <p className="mt-1 font-serif text-base font-semibold text-gray-800">
                                        {formatINR(rp.price)}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* ── Quote Modal ── */}
            {quoteOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
                    onClick={() => setQuoteOpen(false)}
                >
                    <div
                        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="font-serif text-xl font-semibold text-gray-900">
                            Quote Request
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">
                            Product:{" "}
                            <span className="font-medium text-gray-800">{product.name}</span>
                        </p>

                        <div className="mt-6 flex flex-col gap-3">
                            <input
                                type="text"
                                placeholder="Aapka naam *"
                                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                            />
                            <input
                                type="tel"
                                placeholder="Phone number *"
                                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                            />
                            <input
                                type="email"
                                placeholder="Email (optional)"
                                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                            />
                            <input
                                type="number"
                                placeholder="Quantity"
                                min={1}
                                defaultValue={1}
                                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                            />
                            <textarea
                                placeholder="Koi aur details..."
                                rows={3}
                                className="w-full resize-none rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                            />
                        </div>

                        <div className="mt-6 flex gap-3">
                            <button
                                onClick={() => setQuoteOpen(false)}
                                className="flex-1 rounded-lg border border-gray-200 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setQuoteOpen(false)}
                                className="flex-1 rounded-xl bg-emerald-600 py-2.5 text-sm font-medium text-white hover:bg-emerald-700"
                            >
                                Submit Request
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}