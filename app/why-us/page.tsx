import type { Metadata } from "next";
import Link from "next/link";
import { defaultWhyUsData, fetchWhyUs, type WhyUsSection } from "./services/whyUs.service";

export const metadata: Metadata = {
    title: "Why Choose Us | Vishwakarma PsyTech Labs",
    description: "Why institutions choose Vishwakarma PsyTech Labs for psychology lab equipment, custom apparatus, and reliable support.",
};

export default async function WhyUsPage() {
    const whyUs: WhyUsSection = await fetchWhyUs();
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
