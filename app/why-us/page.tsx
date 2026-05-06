import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Why Choose Us | Vishwakarma PsyTech Labs",
    description: "Why institutions choose Vishwakarma PsyTech Labs for psychology lab equipment, custom apparatus, and reliable support.",
};

type WhyUsStat = {
    value: string;
    label: string;
};

type WhyUsReason = {
    title: string;
    text: string;
    isActive: boolean;
};

type WhyUsSection = {
    eyebrow: string;
    title: string;
    description: string;
    stats: WhyUsStat[];
    reasons: WhyUsReason[];
    ctaText: string;
    ctaLabel: string;
    ctaHref: string;
    isActive: boolean;
};

type WhyUsResponse = {
    whyUs?: Partial<WhyUsSection>;
    whyChooseUs?: Partial<WhyUsSection>;
    data?: {
        whyUs?: Partial<WhyUsSection>;
        whyChooseUs?: Partial<WhyUsSection>;
        data?: {
            whyUs?: Partial<WhyUsSection>;
            whyChooseUs?: Partial<WhyUsSection>;
        };
    };
};

const defaultWhyUs: WhyUsSection = {
    eyebrow: "Why Choose Us",
    title: "Built for labs. Backed by quality.",
    description: "We focus on dependable apparatus, direct pricing, safe dispatch, and support that makes procurement easier for institutions.",
    stats: [
        { value: "30+", label: "Years Experience" },
        { value: "500+", label: "Institutions Served" },
        { value: "100%", label: "Quality Focus" },
    ],
    reasons: [
        { title: "Quality Manufacturing", text: "Durable psychology lab equipment made with practical lab use in mind.", isActive: true },
        { title: "Factory Direct Price", text: "Direct supply helps institutions get fair pricing for regular and bulk orders.", isActive: true },
        { title: "Custom Apparatus", text: "Product modification and specific dimensions can be supported on request.", isActive: true },
        { title: "Pan India Delivery", text: "Wardha location helps us dispatch efficiently across India.", isActive: true },
        { title: "Secure Packaging", text: "Careful packing keeps instruments protected during transport.", isActive: true },
        { title: "After-Sales Support", text: "Quick help for product guidance, order updates, and support needs.", isActive: true },
    ],
    ctaText: "Need reliable psychology lab equipment for your institution?",
    ctaLabel: "Get a Quote",
    ctaHref: "/contact",
    isActive: true,
};

function normalizeWhyUs(whyUs?: Partial<WhyUsSection> | null): WhyUsSection {
    if (!whyUs) return defaultWhyUs;

    return {
        ...defaultWhyUs,
        ...whyUs,
        stats: Array.isArray(whyUs.stats) && whyUs.stats.length ? whyUs.stats : defaultWhyUs.stats,
        reasons: Array.isArray(whyUs.reasons) && whyUs.reasons.length
            ? whyUs.reasons.map((reason, index) => ({
                ...defaultWhyUs.reasons[index % defaultWhyUs.reasons.length],
                ...reason,
                isActive: typeof reason.isActive === "boolean" ? reason.isActive : true,
            }))
            : defaultWhyUs.reasons,
        isActive: typeof whyUs.isActive === "boolean" ? whyUs.isActive : true,
    };
}

function whyUsFromResponse(data: WhyUsResponse): WhyUsSection {
    return normalizeWhyUs(
        data.whyUs ||
        data.whyChooseUs ||
        data.data?.whyUs ||
        data.data?.whyChooseUs ||
        data.data?.data?.whyUs ||
        data.data?.data?.whyChooseUs
    );
}

async function getWhyUs(): Promise<WhyUsSection> {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";

    try {
        const response = await fetch(`${baseUrl}/why-us`, { cache: "no-store" });
        if (!response.ok) return defaultWhyUs;

        const data = (await response.json()) as WhyUsResponse;
        return whyUsFromResponse(data);
    } catch {
        return defaultWhyUs;
    }
}

export default async function WhyUsPage() {
    const whyUs = await getWhyUs();
    const activeReasons = whyUs.reasons.filter((reason) => reason.isActive);

    return (
        <main className="bg-slate-50 text-slate-900">
            <section className="px-4 py-4 md:px-6 lg:flex lg:min-h-[calc(100vh-164px)] lg:items-center lg:py-5">
                <div className="mx-auto grid w-full max-w-7xl gap-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_28px_80px_-60px_rgba(15,23,42,0.6)] md:p-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                    <div className="relative overflow-hidden rounded-2xl bg-[#0a1628] p-5 text-white">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.38),transparent_34%),radial-gradient(circle_at_88%_88%,rgba(124,58,237,0.24),transparent_42%)]" />
                        <div className="relative">
                            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-blue-200">
                                {whyUs.eyebrow}
                            </p>
                            <h1 className="mt-3 font-serif text-3xl font-semibold leading-tight md:text-4xl">
                                {whyUs.title}
                            </h1>
                            <p className="mt-4 text-sm leading-6 text-slate-300">
                                {whyUs.description}
                            </p>

                            <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                                {whyUs.stats.filter((stat) => stat.value || stat.label).map((stat) => (
                                    <div key={`${stat.value}-${stat.label}`} className="rounded-xl border border-white/10 bg-white/10 p-3">
                                        <p className="font-serif text-xl font-semibold">{stat.value}</p>
                                        <p className="mt-0.5 text-xs text-slate-300">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {activeReasons.map((reason, index) => (
                                <div
                                    key={`${reason.title}-${index}`}
                                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-white"
                                >
                                    <span className="text-[11px] font-bold tracking-[2px] text-blue-700">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <h2 className="mt-3 text-base font-semibold text-slate-950">
                                        {reason.title}
                                    </h2>
                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        {reason.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4">
                            <p className="text-sm font-medium leading-6 text-blue-900">
                                {whyUs.ctaText}
                            </p>
                            <Link
                                href={whyUs.ctaHref || "/contact"}
                                className="rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
                            >
                                {whyUs.ctaLabel}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
