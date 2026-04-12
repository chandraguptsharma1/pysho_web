"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
    "All Equipment",
    "Motor Skills",
    "Visual Perception",
    "Intelligence Tests",
    "Learning & Memory",
    "Psychometric Tests",
    "Electronic Apparatus",
];

const products = [
    {
        name: "Mirror Drawing — Metal Star",
        category: "Motor Skills",
        badge: "Electronics",
        badgeColor: "bg-emerald-700",
        desc: "Measures hand-eye coordination and motor learning through mirror-reflected tracing tasks.",
        icon: (
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
    },
    {
        name: "Bolt Head Maze with Error Counter",
        category: "Motor Skills",
        badge: "With Counter",
        badgeColor: "bg-blue-700",
        desc: "Tests spatial reasoning and problem-solving with a precision error-counting mechanism.",
        icon: (
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            </svg>
        ),
    },
    {
        name: "Tachistoscope — Falling Door",
        category: "Electronic Apparatus",
        badge: "Electronics",
        badgeColor: "bg-emerald-700",
        desc: "Controls stimulus exposure time for studies in perception, attention and reading speed.",
        icon: (
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
    },
    {
        name: "Muller Lyer Illusion",
        category: "Visual Perception",
        badge: "Optical",
        badgeColor: "bg-blue-700",
        desc: "Classic optical illusion apparatus for studying visual perception and perceptual errors.",
        icon: (
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        ),
    },
    {
        name: "Steadiness Tester",
        category: "Electronic Apparatus",
        badge: "Electronics",
        badgeColor: "bg-emerald-700",
        desc: "Measures hand steadiness and fine motor control; widely used in clinical and research settings.",
        icon: (
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
    },
    {
        name: "Kohs Block Design Test",
        category: "Intelligence Tests",
        badge: "Wooden",
        badgeColor: "bg-amber-700",
        desc: "Non-verbal intelligence test using coloured blocks; ideal for cross-cultural assessment.",
        icon: (
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
            </svg>
        ),
    },
    {
        name: "Rational Learning Apparatus",
        category: "Learning & Memory",
        badge: "Wooden",
        badgeColor: "bg-amber-700",
        desc: "Studies trial-and-error learning and habit formation in controlled laboratory conditions.",
        icon: (
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
    },
    {
        name: "Bhatia Battery of Intelligence",
        category: "Intelligence Tests",
        badge: "Test Kit",
        badgeColor: "bg-blue-700",
        desc: "Comprehensive non-verbal intelligence battery widely used in Indian psychological assessment.",
        icon: (
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </svg>
        ),
    },
    {
        name: "Self Concept Scale",
        category: "Psychometric Tests",
        badge: "Test Kit",
        badgeColor: "bg-blue-700",
        desc: "Standardised psychometric scale for measuring self-concept in students and adults.",
        icon: (
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
    },
];

const ITEMS_PER_PAGE = 6;

export default function ProductShowcase() {
    const [activeCategory, setActiveCategory] = useState("All Equipment");
    const [page, setPage] = useState(0);

    const filtered =
        activeCategory === "All Equipment"
            ? products
            : products.filter((p) => p.category === activeCategory);

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const visible = filtered.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

    const handleCategory = (cat: string) => {
        setActiveCategory(cat);
        setPage(0);
    };

    return (
        <section className="bg-slate-50 py-16 border-y border-slate-200">
            <div className="mx-auto max-w-6xl px-6 lg:px-10">
                {/* Header */}
                <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[2px] text-blue-700">
                            Our Products
                        </p>
                        <h2 className="text-3xl font-bold text-slate-900">
                            Psychology Lab Equipment
                        </h2>
                        <p className="mt-2 text-[14px] text-slate-500">
                            50+ instruments for research, education &amp; clinical use
                        </p>
                    </div>
                    <Link
                        href="/products"
                        className="rounded-xl border border-blue-200 bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                    >
                        View All Products →
                    </Link>
                </div>

                {/* Category tabs */}
                <div className="mb-8 flex flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategory(cat)}
                            className={`rounded-full border px-4 py-1.5 text-[12px] font-500 transition-all ${activeCategory === cat
                                ? "border-blue-700 bg-blue-700 text-white"
                                : "border-slate-200 bg-white text-slate-500 hover:border-blue-300 hover:text-blue-700"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product grid */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {visible.map((p) => (
                        <div
                            key={p.name}
                            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100"
                        >
                            {/* Image area */}
                            <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-blue-800 to-slate-900">
                                {p.icon}
                                <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold text-white ${p.badgeColor}`}>
                                    {p.badge}
                                </span>
                            </div>

                            {/* Body */}
                            <div className="p-5">
                                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                                    {p.category}
                                </p>
                                <h3 className="mb-2 text-[14px] font-bold text-slate-900 leading-snug">
                                    {p.name}
                                </h3>
                                <p className="mb-4 text-[12px] leading-relaxed text-slate-500">
                                    {p.desc}
                                </p>
                                <div className="flex items-center justify-between">
                                    <Link
                                        href="/contact"
                                        className="rounded-lg bg-blue-50 px-4 py-2 text-[12px] font-semibold text-blue-700 transition hover:bg-blue-100"
                                    >
                                        Send Inquiry
                                    </Link>
                                    <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        In Stock
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-8 flex items-center justify-between">
                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setPage(i)}
                                    className={`h-2 rounded-full transition-all ${i === page ? "w-6 bg-blue-700" : "w-2 bg-slate-300"
                                        }`}
                                />
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setPage((p) => Math.max(0, p - 1))}
                                disabled={page === 0}
                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:border-blue-300 hover:text-blue-700 disabled:opacity-40"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                                disabled={page === totalPages - 1}
                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:border-blue-300 hover:text-blue-700 disabled:opacity-40"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}