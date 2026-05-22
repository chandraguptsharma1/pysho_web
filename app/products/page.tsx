"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchProducts, type Product } from "../lib/api";

// ── Reusable image component with emoji fallback ──────────────────────────────
function ImageWithFallback({ src, alt, fallback }: { src: string; alt: string; fallback: string }) {
    const [errored, setErrored] = useState(false);

    if (errored) {
        return (
            <span className="text-5xl transition-transform duration-200 group-hover:scale-110 sm:text-6xl">
                {fallback}
            </span>
        );
    }

    return (
        <Image
            src={src}
            alt={alt}
            fill
            className="object-contain p-3 transition-transform duration-200 group-hover:scale-105"
            onError={() => setErrored(true)}
        />
    );
}

type Material = "wood" | "metal" | "paper" | "electronic" | "cloth";

type FilterType = Material | "all";

const filters: { label: string; value: FilterType }[] = [
    { label: "All Products", value: "all" },
    { label: "Wood", value: "wood" },
    { label: "Metal", value: "metal" },
    { label: "Paper / Books", value: "paper" },
    { label: "Electronic", value: "electronic" },
    { label: "Cloth", value: "cloth" },
];

const matBadge: Record<Material, { bg: string; text: string; label: string }> = {
    wood: { bg: "bg-green-100", text: "text-green-700", label: "Wood" },
    metal: { bg: "bg-blue-100", text: "text-blue-700", label: "Metal" },
    paper: { bg: "bg-amber-100", text: "text-amber-700", label: "Paper" },
    cloth: { bg: "bg-pink-100", text: "text-pink-700", label: "Cloth" },
    electronic: { bg: "bg-purple-100", text: "text-purple-700", label: "Electronic" },
};

function formatINR(n: number) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(n);
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState<FilterType>("all");

    useEffect(() => {
        fetchProducts()
            .then(setProducts)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    const filtered =
        active === "all" ? products : products.filter((p) => p.material?.toLowerCase() === active);

    if (loading) {
        return (
            <div className="flex items-center justify-center py-20">
                <div className="text-center">
                    <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent mx-auto"></div>
                    <p className="text-slate-600">Loading products...</p>
                </div>
            </div>
        );
    }

    return (
        <>


            {/* ── Hero ── */}
            <section className="relative overflow-hidden border-b border-slate-200 bg-white px-6 py-14 md:px-16">
                {/* Decorative circle */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-50 opacity-60" />

                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Home &rsaquo; Products
                </p>
                <h1 className="font-serif text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                    Psychological{" "}
                    <span className="text-blue-600">Equipment</span>{" "}
                    &amp; Tests
                </h1>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500">
                    Precision instruments for psychologists, researchers, and institutions —
                    crafted for accuracy, durability, and reliable results. 24+ years of expertise.
                </p>

                {/* Stats */}
                <div className="mt-8 flex flex-wrap gap-10">
                    {[
                        { num: "24+", label: "Years Expertise" },
                        { num: "25+", label: "Products" },
                        { num: "PAN India", label: "Supply" },
                        { num: "Export", label: "Available" },
                    ].map((s) => (
                        <div key={s.label}>
                            <p className="font-serif text-2xl font-semibold text-slate-900">{s.num}</p>
                            <p className="mt-0.5 text-xs text-slate-400">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Filter Bar ── */}
            <div className="sticky top-[63px] z-40 flex flex-wrap items-center gap-2 border-b border-slate-200 bg-white/90 px-6 py-3 backdrop-blur md:px-16 shadow-sm">
                {filters.map((f) => (
                    <button
                        key={f.value}
                        onClick={() => setActive(f.value)}
                        className="rounded-full border px-4 py-1.5 text-xs font-medium transition-all"
                        style={
                            active === f.value
                                ? { borderColor: "#2563eb", backgroundColor: "#eff6ff", color: "#1d4ed8" }
                                : { borderColor: "#e2e8f0", backgroundColor: "transparent", color: "#94a3b8" }
                        }
                    >
                        {f.label}
                    </button>
                ))}
                <span className="ml-auto text-xs text-slate-400">
                    {filtered.length} products
                </span>
            </div>

            {/* ── Product Grid ── */}
            <div className="grid grid-cols-1 bg-slate-100 gap-px sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.map((p) => {
                    const materialKey = p.material?.toLowerCase() as Material;
                    const badge = matBadge[materialKey] || { bg: "bg-gray-100", text: "text-gray-700", label: p.material || "Other" };
                    return (
                        <Link
                            key={p.slug}
                            href={`/products/${p.slug}`}
                            className="group relative flex flex-row bg-white transition-colors duration-150 hover:bg-blue-50 sm:flex-col"
                        >
                            {/* Material badge */}
                            <span
                                className={`absolute right-3 top-3 z-10 rounded-full px-2 py-0.5 text-[10px] font-medium ${badge.bg} ${badge.text}`}
                            >
                                {badge.label}
                            </span>

                            {/* ── Image area ──
                                Mobile: fixed square on left (w-32)
                                sm+:    full-width aspect-square on top
                            */}
                            <div className="relative flex w-32 shrink-0 items-center justify-center overflow-hidden bg-slate-50 border-r border-slate-100 sm:w-full sm:border-r-0 sm:border-b sm:aspect-square">
                                <ImageWithFallback
                                    src={p.images[0] || "/placeholder.png"}
                                    alt={p.name}
                                    fallback="📋"
                                />
                            </div>

                            {/* ── Info ── */}
                            <div className="flex flex-1 flex-col justify-center gap-1.5 p-4">
                                <div>
                                    <p className="text-[13px] font-medium leading-snug text-slate-800 transition-colors group-hover:text-blue-600">
                                        {p.name}
                                    </p>
                                    <p className="mt-0.5 text-[11px] text-slate-400">{p.category}</p>
                                </div>

                                <p className="mt-1 font-serif text-lg font-semibold text-slate-900">
                                    {formatINR(p.price || 0)}
                                    <span className="ml-1 font-sans text-[10px] font-normal text-slate-400">
                                        / Piece
                                    </span>
                                </p>

                                <p className="text-[10px] text-slate-300">MOQ: {p.moq || 1} Piece</p>

                                <span className="mt-1 text-[11px] font-medium text-blue-600 group-hover:underline">
                                    View details →
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>

            {/* ── Bottom CTA ── */}
            <div className="border-t border-slate-200 bg-white px-6 py-12 text-center md:px-16">
                <p className="font-serif text-2xl font-semibold text-slate-900">
                    Bulk order ya custom requirement hai?
                </p>
                <p className="mt-2 text-sm text-slate-500">
                    Humse seedha contact karein — All India delivery + export available.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <a
                        href="tel:08045816232"
                        className="rounded-xl px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                        style={{ backgroundColor: "#2563eb", boxShadow: "0 4px 14px rgba(37,99,235,0.25)" }}
                    >
                        📞 +91 080-4581-6232
                    </a>
                    <a
                        href="mailto:info@vishwakarmapsytech.com"
                        className="rounded-xl border border-slate-200 px-6 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                    >
                        ✉ info@vishwakarmapsytech.com
                    </a>
                </div>
            </div>
        </>
    );
}