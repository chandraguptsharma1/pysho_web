"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Product = {
    slug: string;
    name: string;
    cat: string;
    mat: "wood" | "metal" | "paper" | "cloth" | "electronic";
    price: number;
    unit: string;
    moq: number;
    imagePlaceholder: string;
    icon: string;
    description?: string;
    specs: Record<string, string>;
};

function formatINR(n: number) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(n);
}

const matBadge: Record<string, { bg: string; text: string; label: string }> = {
    wood: { bg: "bg-emerald-50", text: "text-emerald-700", label: "Wood" },
    metal: { bg: "bg-sky-50", text: "text-sky-700", label: "Metal" },
    paper: { bg: "bg-amber-50", text: "text-amber-700", label: "Paper-Pencil" },
    cloth: { bg: "bg-pink-50", text: "text-pink-700", label: "Cloth" },
    electronic: { bg: "bg-indigo-50", text: "text-indigo-700", label: "Electronic" },
};

// Default FAQs (you can override by adding product.faqs if you extend the type later)
const DEFAULT_FAQS = [
    {
        q: "What technology does this instrument use?",
        a: "The product uses a paper-pencil methodology for conducting psychological assessments, ensuring reliable and repeatable results across sessions.",
    },
    {
        q: "What material is used in construction?",
        a: "It is constructed from high-quality wood and cardboard, engineered for durability and long-term laboratory use.",
    },
    {
        q: "Is the product automated?",
        a: "No, the instrument operates on a manual approach, giving the examiner full control over administration and timing.",
    },
    {
        q: "Where can this product be applied?",
        a: "It is suitable for industrial and laboratory applications, specifically for psychological assessments and clinical evaluations.",
    },
];

type Props = {
    product: Product;
};

export default function ProductDetailsClient({ product }: Props) {
    const [quoteOpen, setQuoteOpen] = useState(false);
    const [imgError, setImgError] = useState(false);
    const [activeFaq, setActiveFaq] = useState<number | null>(0);
    const [qty, setQty] = useState<number>(product.moq || 1);

    const badge = matBadge[product.mat];

    return (
        <div className="bg-[#f6f5fb] font-sans">
            {/* Breadcrumb */}
            <nav className="border-b border-gray-100 bg-white/60 backdrop-blur-sm">
                <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-4 text-xs text-gray-500 md:px-10">
                    <Link href="/" className="hover:text-indigo-600">
                        Home
                    </Link>
                    <span className="opacity-40">/</span>
                    <Link href="/products" className="hover:text-indigo-600">
                        Products
                    </Link>
                    <span className="opacity-40">/</span>
                    <span className="font-medium text-gray-900">{product.name}</span>
                </div>
            </nav>

            {/* HERO — product gallery + info */}
            <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
                <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
                    {/* Gallery */}
                    <div className="lg:sticky lg:top-6 lg:self-start">
                        <div className="relative aspect-square overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_10px_40px_-20px_rgba(15,18,34,0.2)]">
                            {/* Ambient gradient */}
                            <div
                                className="pointer-events-none absolute inset-0 opacity-60"
                                style={{
                                    background:
                                        "radial-gradient(circle at 15% 10%, rgba(91,91,247,0.08), transparent 45%), radial-gradient(circle at 90% 90%, rgba(242,181,68,0.06), transparent 45%)",
                                }}
                            />

                            {/* In-stock badge */}
                            <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full bg-gray-900 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                </span>
                                In Stock
                            </div>

                            {/* Ref code */}
                            <div className="absolute right-5 top-5 z-10 font-serif text-xs italic text-gray-400">
                                ref · {product.slug}
                            </div>

                            {!imgError ? (
                                <Image
                                    src={product.imagePlaceholder}
                                    alt={product.name}
                                    fill
                                    className="object-contain p-8"
                                    onError={() => setImgError(true)}
                                    priority
                                />
                            ) : (
                                <div className="flex h-full flex-col items-center justify-center gap-4 text-gray-300">
                                    <span className="text-8xl drop-shadow-sm">{product.icon}</span>
                                    <p className="text-xs text-gray-400">
                                        Place image at{" "}
                                        <code className="font-mono">
                                            public{product.imagePlaceholder}
                                        </code>
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Thumbnail strip */}
                        <div className="mt-4 flex gap-3">
                            {[0, 1, 2].map((i) => (
                                <button
                                    key={i}
                                    className={`flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border-2 bg-white p-1.5 transition ${i === 0
                                        ? "border-indigo-500 shadow-sm"
                                        : "border-gray-200 hover:-translate-y-0.5 hover:border-gray-300"
                                        }`}
                                >
                                    {i === 0 && !imgError ? (
                                        <Image
                                            src={product.imagePlaceholder}
                                            alt=""
                                            width={72}
                                            height={72}
                                            className="h-full w-full object-contain"
                                        />
                                    ) : (
                                        <span className="text-2xl opacity-40">{product.icon}</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Info */}
                    <div className="flex flex-col">
                        {/* Kicker */}
                        <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[2px] text-indigo-600">
                            <span className="inline-block h-px w-7 bg-indigo-500" />
                            {product.cat}
                        </div>

                        {/* Title */}
                        <h1 className="font-serif text-[28px] font-semibold leading-[1.15] tracking-tight text-gray-900 md:text-[34px]">
                            {product.name}
                        </h1>

                        {/* Chips */}
                        <div className="mt-5 flex flex-wrap gap-2">
                            <span
                                className={`rounded-full px-3 py-1 text-xs font-medium ${badge.bg} ${badge.text}`}
                            >
                                {badge.label}
                            </span>
                            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                                Psychological Assessment
                            </span>
                            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                                Manual Grade
                            </span>
                        </div>

                        {/* Price card */}
                        <div className="relative mt-7 overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-indigo-500 to-violet-500" />
                            <div className="flex flex-wrap items-end justify-between gap-5 pl-2">
                                <div>
                                    <p className="text-[11px] font-medium uppercase tracking-[2px] text-gray-400">
                                        Starting Price
                                    </p>
                                    <p className="mt-1 flex items-baseline gap-1 font-serif text-[28px] font-semibold text-gray-900">
                                        <span className="text-base font-medium text-indigo-600">₹</span>
                                        {new Intl.NumberFormat("en-IN").format(product.price)}
                                        <span className="ml-2 font-sans text-xs font-normal text-gray-500">
                                            / {product.unit}
                                        </span>
                                    </p>
                                    <p className="mt-2 text-xs text-gray-500">
                                        MOQ: {product.moq} {product.unit} · GST extra
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[11px] font-medium uppercase tracking-[2px] text-gray-400">
                                        Delivery
                                    </p>
                                    <p className="mt-1 text-sm font-semibold text-gray-900">
                                        4 – 5 days
                                    </p>
                                    <p className="text-xs text-gray-500">All India</p>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        {product.description && (
                            <p className="mt-6 text-[15px] leading-[1.75] text-gray-600">
                                {product.description}
                            </p>
                        )}

                        {/* Quick highlights */}
                        <div className="mt-6 grid grid-cols-3 gap-2.5">
                            {[
                                {
                                    lb: "Technology",
                                    vl: "Paper-Pencil",
                                    ic: (
                                        <path
                                            d="M4 4h12v12H4V4zm2 2v8h8V6H6z"
                                            fill="currentColor"
                                        />
                                    ),
                                },
                                {
                                    lb: "Condition",
                                    vl: "Brand New",
                                    ic: (
                                        <path
                                            d="M10 2l2.5 5 5.5.8-4 3.9.9 5.5L10 14.6 5.1 17.2 6 11.7 2 7.8l5.5-.8L10 2z"
                                            fill="currentColor"
                                        />
                                    ),
                                },
                                {
                                    lb: "Application",
                                    vl: "Lab & Clinical",
                                    ic: (
                                        <path
                                            d="M10 2a4 4 0 014 4c0 1.8-1.2 3.4-3 3.9V13h2v2h-2v3H9v-3H7v-2h2V9.9C7.2 9.4 6 7.8 6 6a4 4 0 014-4z"
                                            fill="currentColor"
                                        />
                                    ),
                                },
                            ].map((h) => (
                                <div
                                    key={h.lb}
                                    className="rounded-xl border border-gray-200 bg-white p-3.5"
                                >
                                    <div className="mb-2 grid h-8 w-8 place-items-center rounded-lg bg-indigo-50 text-indigo-600">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            {h.ic}
                                        </svg>
                                    </div>
                                    <p className="text-[10px] font-medium uppercase tracking-[1px] text-gray-400">
                                        {h.lb}
                                    </p>
                                    <p className="text-sm font-semibold text-gray-900">
                                        {h.vl}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="mt-7 flex flex-wrap gap-3">
                            <button
                                onClick={() => setQuoteOpen(true)}
                                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_-10px_rgba(79,70,229,0.55)] transition hover:-translate-y-0.5 hover:bg-indigo-700"
                            >
                                <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                                    <path
                                        d="M2 4h16v12H2V4zm2 1.5V6l6 4 6-4v-.5H4z"
                                        fill="currentColor"
                                    />
                                </svg>
                                Send Inquiry
                            </button>
                            <a
                                href="tel:08045816232"
                                className="inline-flex items-center gap-2 rounded-full border-2 border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-indigo-500 hover:text-indigo-600"
                            >
                                <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                                    <path
                                        d="M4 3h3l1.5 4-2 1a10 10 0 005.5 5.5l1-2 4 1.5v3a1 1 0 01-1 1A14 14 0 013 4a1 1 0 011-1z"
                                        fill="currentColor"
                                    />
                                </svg>
                                Request Callback
                            </a>
                            <a
                                href="https://wa.me/918045816232"
                                className="inline-flex items-center gap-2 rounded-full border-2 border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-emerald-500 hover:text-emerald-600"
                            >
                                WhatsApp
                            </a>
                        </div>

                        {/* Trust row */}
                        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-gray-200 pt-5 text-xs text-gray-500">
                            <span className="inline-flex items-center gap-1.5">
                                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                                    <path
                                        d="M10 1l2 6h6l-5 4 2 7-5-4-5 4 2-7-5-4h6z"
                                        fill="#f2b544"
                                    />
                                </svg>
                                Trusted by 500+ institutions
                            </span>
                            <span>•</span>
                            <span>Pan-India delivery</span>
                            <span>•</span>
                            <span>Manufacturer direct pricing</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SPECIFICATIONS */}
            <section className="border-t border-gray-200 bg-white py-16">
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="mb-10 flex flex-wrap items-baseline gap-4">
                        <span className="text-[11px] font-semibold uppercase tracking-[2px] text-indigo-600">
                            Technical Sheet
                        </span>
                        <h2 className="font-serif text-[26px] font-semibold tracking-tight text-gray-900 md:text-[32px]">
                            Specifications
                        </h2>
                        <span className="hidden h-px flex-1 bg-gray-200 md:inline-block" />
                    </div>

                    <div className="grid overflow-hidden rounded-2xl border border-gray-200 md:grid-cols-2">
                        {Object.entries(product.specs ?? {}).map(([key, val], i, arr) => {
                            const isLastLeft = i === arr.length - 2 && arr.length % 2 === 0;
                            const isLast = i === arr.length - 1;
                            return (
                                <div
                                    key={key}
                                    className={`grid grid-cols-[140px_1fr] items-center gap-3 px-6 py-4 md:grid-cols-[160px_1fr] ${i % 2 === 0 ? "md:border-r" : ""
                                        } ${!isLast && !isLastLeft ? "border-b" : ""} border-gray-100`}
                                >
                                    <span className="text-[11px] font-medium uppercase tracking-[1px] text-gray-500">
                                        {key}
                                    </span>
                                    <span className="text-sm font-semibold text-gray-900">
                                        {val}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section className="border-t border-gray-200 bg-[#f6f5fb] py-16">
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
                        <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-[0_10px_40px_-20px_rgba(15,18,34,0.15)]">
                            <div className="pointer-events-none absolute right-6 top-5 font-serif text-6xl font-light text-indigo-100">
                                ✦
                            </div>
                            <div className="grid aspect-square place-items-center rounded-xl bg-gradient-to-br from-indigo-50 via-violet-50 to-white">
                                {!imgError ? (
                                    <Image
                                        src={product.imagePlaceholder}
                                        alt=""
                                        width={360}
                                        height={360}
                                        className="h-4/5 w-4/5 object-contain"
                                    />
                                ) : (
                                    <span className="text-8xl opacity-80">{product.icon}</span>
                                )}
                            </div>
                        </div>

                        <div>
                            <span className="text-[11px] font-semibold uppercase tracking-[2px] text-indigo-600">
                                About the instrument
                            </span>
                            <h3 className="mt-3 font-serif text-[24px] font-semibold leading-[1.2] tracking-tight text-gray-900 md:text-[30px]">
                                Precision-crafted for <em className="text-indigo-600">serious</em>{" "}
                                psychological work.
                            </h3>
                            <p className="mt-5 text-[15px] leading-[1.8] text-gray-600">
                                The {product.name} is a meticulously crafted psychological
                                assessment tool designed to facilitate comprehensive evaluations.
                                Built with a durable paper-pencil methodology, it employs a manual
                                approach to ensure precision and reliable results during
                                assessments.
                            </p>
                            <blockquote className="my-6 border-l-[3px] border-indigo-500 pl-5 font-serif text-lg italic leading-relaxed text-gray-800">
                                Constructed from high-quality wood and cardboard — the instrument is
                                both professional and functional, equally at home in a university
                                lab or a clinical practice.
                            </blockquote>
                            <p className="text-[15px] leading-[1.8] text-gray-600">
                                Ideal for psychologists, researchers, and educators requiring an
                                accurate and dependable solution for intelligence testing.
                                Delivered in brand-new condition, it guarantees unmatched quality
                                for sensitive psychological evaluations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRADE INFO */}
            <section className="border-t border-gray-200 bg-white py-16">
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="mb-10 flex flex-wrap items-baseline gap-4">
                        <span className="text-[11px] font-semibold uppercase tracking-[2px] text-indigo-600">
                            Trade Information
                        </span>
                        <h2 className="font-serif text-[26px] font-semibold tracking-tight text-gray-900 md:text-[32px]">
                            Ordering & supply
                        </h2>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        {[
                            {
                                lb: "Minimum Order",
                                vl: `${product.moq} ${product.unit}`,
                                dsc: "Small pilot orders welcome for institutions.",
                                ic: (
                                    <path
                                        d="M3 3h14v4H3V3zm0 6h14v8H3V9zm2 2v4h10v-4H5z"
                                        fill="currentColor"
                                    />
                                ),
                            },
                            {
                                lb: "Supply Ability",
                                vl: "10 Pieces / month",
                                dsc: "Scale pricing available on bulk requests.",
                                ic: (
                                    <path
                                        d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 4v4l3 2-1 1.5-4-2.5V6h2z"
                                        fill="currentColor"
                                    />
                                ),
                            },
                            {
                                lb: "Delivery Time",
                                vl: "4 – 5 Days",
                                dsc: "Dispatched within 24 hours of confirmation.",
                                ic: (
                                    <path
                                        d="M3 6h10l2 3h2v5h-2a2 2 0 11-4 0H9a2 2 0 11-4 0H3V6zm8 2v1h2.5L12.5 8H11z"
                                        fill="currentColor"
                                    />
                                ),
                            },
                            {
                                lb: "Packaging",
                                vl: "Corrugated + Thermocol",
                                dsc: "Impact-safe packaging for pan-India transit.",
                                ic: (
                                    <path
                                        d="M10 1L2 5v10l8 4 8-4V5l-8-4zm0 2.2L15.5 6 10 8.8 4.5 6 10 3.2z"
                                        fill="currentColor"
                                    />
                                ),
                            },
                            {
                                lb: "Sample",
                                vl: "Not Available",
                                dsc: "Full-unit dispatch only; demo video on request.",
                                ic: (
                                    <path
                                        d="M10 2a4 4 0 014 4v1h1a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h1V6a4 4 0 014-4zm-2 5h4V6a2 2 0 10-4 0v1z"
                                        fill="currentColor"
                                    />
                                ),
                            },
                            {
                                lb: "Market",
                                vl: "All India",
                                dsc: "Serving universities, hospitals & research labs.",
                                ic: (
                                    <path
                                        d="M10 1a9 9 0 100 18 9 9 0 000-18zm0 2c1.2 0 2.8 2.4 3.3 6H6.7C7.2 5.4 8.8 3 10 3zm-4.8 6h1.4c-.1.9-.2 1.9-.2 3H3.2c.2-1.1.7-2.1 1.4-3H5.2zm3.4 0h2.8c.1.9.1 1.9 0 3H8.6c-.1-1.1-.1-2.1 0-3zm5.8 0H16c.7.9 1.2 1.9 1.4 3H14c0-1.1-.1-2.1-.2-3z"
                                        fill="currentColor"
                                    />
                                ),
                            },
                        ].map((t) => (
                            <div
                                key={t.lb}
                                className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_40px_-20px_rgba(15,18,34,0.2)]"
                            >
                                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        {t.ic}
                                    </svg>
                                </div>
                                <p className="text-[11px] font-medium uppercase tracking-[1.5px] text-gray-500">
                                    {t.lb}
                                </p>
                                <p className="mt-1 font-serif text-lg font-semibold text-gray-900">
                                    {t.vl}
                                </p>
                                <p className="mt-1.5 text-[13px] leading-relaxed text-gray-500">
                                    {t.dsc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="border-t border-gray-200 bg-[#f6f5fb] py-16">
                <div className="mx-auto max-w-3xl px-6 md:px-10">
                    <div className="mb-10 text-center">
                        <span className="text-[11px] font-semibold uppercase tracking-[2px] text-indigo-600">
                            Questions
                        </span>
                        <h2 className="mt-2 font-serif text-[26px] font-semibold tracking-tight text-gray-900 md:text-[32px]">
                            Frequently asked
                        </h2>
                    </div>

                    <div className="space-y-2.5">
                        {DEFAULT_FAQS.map((f, i) => {
                            const open = activeFaq === i;
                            return (
                                <div
                                    key={i}
                                    className={`overflow-hidden rounded-2xl border bg-white transition ${open
                                        ? "border-indigo-200 shadow-sm"
                                        : "border-gray-200"
                                        }`}
                                >
                                    <button
                                        onClick={() => setActiveFaq(open ? null : i)}
                                        className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="font-serif text-sm italic text-indigo-500">
                                                0{i + 1}
                                            </span>
                                            <span className="font-semibold text-gray-900">
                                                {f.q}
                                            </span>
                                        </div>
                                        <span
                                            className={`grid h-8 w-8 flex-none place-items-center rounded-full transition ${open
                                                ? "rotate-45 bg-indigo-600 text-white"
                                                : "bg-indigo-50 text-indigo-600"
                                                }`}
                                        >
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M10 4v12M4 10h12"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                    <div
                                        className={`grid transition-all duration-300 ${open
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="px-6 pb-5 text-[14.5px] leading-[1.75] text-gray-600">
                                                {f.a}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA — inquiry block (matches your dark navbar palette) */}
            <section className="px-6 pb-20 md:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="relative overflow-hidden rounded-3xl bg-[#0b1020] p-10 text-white md:p-16">
                        <div
                            className="pointer-events-none absolute inset-0"
                            style={{
                                background:
                                    "radial-gradient(circle at 0% 0%, rgba(91,91,247,0.28), transparent 50%), radial-gradient(circle at 100% 100%, rgba(139,92,246,0.22), transparent 50%)",
                            }}
                        />
                        <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
                            <div>
                                <span className="text-[11px] font-semibold uppercase tracking-[2px] text-indigo-300">
                                    Tell us about your requirement
                                </span>
                                <h2 className="mt-3 font-serif text-[24px] font-semibold leading-[1.2] tracking-tight md:text-[30px]">
                                    Bulk order or{" "}
                                    <em className="text-indigo-300">custom configuration?</em>{" "}
                                    Let's talk.
                                </h2>
                                <p className="mt-4 max-w-md text-[15px] leading-[1.75] text-gray-300">
                                    Fill the form and our team will get back to you within 24
                                    hours with a detailed quotation.
                                </p>

                                <div className="mt-7 space-y-3">
                                    {[
                                        { lb: "info@vishwakarmapsytech.com", ic: "✉" },
                                        { lb: "+91 080-4581-6232", ic: "☎" },
                                        { lb: "Pan-India delivery in 4–5 days", ic: "◎" },
                                    ].map((c) => (
                                        <div
                                            key={c.lb}
                                            className="flex items-center gap-3 text-sm text-gray-300"
                                        >
                                            <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-indigo-300">
                                                {c.ic}
                                            </span>
                                            {c.lb}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                                <label className="text-[11px] font-medium uppercase tracking-[1px] text-gray-400">
                                    Quantity
                                </label>
                                <input
                                    type="number"
                                    value={qty}
                                    onChange={(e) => setQty(Number(e.target.value))}
                                    min={1}
                                    className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-indigo-400"
                                />
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                    {[1, 5, 10, 25, 50, 100].map((n) => (
                                        <button
                                            key={n}
                                            onClick={() => setQty(n)}
                                            className={`rounded-full border px-3.5 py-1.5 text-xs transition ${qty === n
                                                ? "border-indigo-400 bg-indigo-500 text-white"
                                                : "border-white/10 bg-white/5 text-gray-300 hover:border-white/25"
                                                }`}
                                        >
                                            {n}
                                        </button>
                                    ))}
                                </div>

                                <div className="mt-4 grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="text-[11px] font-medium uppercase tracking-[1px] text-gray-400">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-indigo-400"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[11px] font-medium uppercase tracking-[1px] text-gray-400">
                                            Mobile
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="+91 —"
                                            className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-indigo-400"
                                        />
                                    </div>
                                </div>

                                <label className="mt-4 block text-[11px] font-medium uppercase tracking-[1px] text-gray-400">
                                    Additional detail
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder="Tell us about your institution, use-case, delivery pin-code..."
                                    className="mt-1.5 w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-indigo-400"
                                />

                                <button
                                    onClick={() => setQuoteOpen(true)}
                                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3.5 text-sm font-semibold text-[#0b1020] transition hover:-translate-y-0.5"
                                >
                                    Submit Inquiry
                                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                                        <path
                                            d="M4 10h12m-5-5l5 5-5 5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>

                                <p className="mt-3 text-center text-[11px] text-gray-500">
                                    We respect your privacy. No spam, ever.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote modal */}
            {quoteOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 p-4 backdrop-blur-sm"
                    onClick={() => setQuoteOpen(false)}
                >
                    <div
                        className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="bg-gradient-to-br from-indigo-600 to-violet-600 px-7 py-6 text-white">
                            <h2 className="font-serif text-xl font-semibold">
                                Request a Quote
                            </h2>
                            <p className="mt-1 text-sm text-indigo-100">
                                for <span className="font-semibold">{product.name}</span>
                            </p>
                        </div>

                        <div className="space-y-3 px-7 py-6">
                            <input
                                type="text"
                                placeholder="Full name *"
                                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
                            />
                            <input
                                type="tel"
                                placeholder="Phone number *"
                                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
                            />
                            <input
                                type="email"
                                placeholder="Email (optional)"
                                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
                            />
                            <input
                                type="number"
                                placeholder="Quantity"
                                min={1}
                                defaultValue={product.moq}
                                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
                            />
                            <textarea
                                placeholder="Additional details..."
                                rows={3}
                                className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
                            />
                        </div>

                        <div className="flex gap-3 border-t border-gray-100 px-7 py-5">
                            <button
                                onClick={() => setQuoteOpen(false)}
                                className="flex-1 rounded-lg border border-gray-200 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setQuoteOpen(false)}
                                className="flex-1 rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                            >
                                Submit Request
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}