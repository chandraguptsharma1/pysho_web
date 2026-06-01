import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AboutData, defaultAboutData, fetchAbout } from "./services/about.service";

export const metadata: Metadata = {
    title: "About Us | Vishwakarma PsyTech Labs",
    description: "About Vishwakarma PsyTech Labs, manufacturer and supplier of psychology lab equipment in Wardha, Maharashtra.",
};

async function AboutPageContent() {
    const about: AboutData = await fetchAbout();
    const titleParts = about.title.split(about.highlight);

    return (
        <main className="bg-slate-50 text-slate-900">
            <section className="px-4 py-4 md:px-6 lg:flex lg:min-h-[calc(100vh-164px)] lg:items-center lg:py-5">
                <div className="mx-auto grid w-full max-w-7xl gap-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_28px_80px_-60px_rgba(15,23,42,0.6)] md:p-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
                    <div className="relative overflow-hidden rounded-2xl bg-[#0a1628] p-5 text-white">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(37,99,235,0.35),transparent_35%),radial-gradient(circle_at_90%_90%,rgba(124,58,237,0.24),transparent_40%)]" />
                        <div className="relative">
                            <div className="flex items-center gap-4">
                                <div className="grid h-14 w-14 place-items-center rounded-xl bg-white">
                                    <Image
                                        src="/logo-icon.png"
                                        alt="Vishwakarma PsyTech Labs"
                                        width={42}
                                        height={42}
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <p className="text-lg font-bold leading-tight">Vishwakarma PsyTech Labs</p>
                                </div>
                            </div>

                            <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                                {about.metrics.map((item) => (
                                    <div key={item.label} className="rounded-xl border border-white/10 bg-white/10 p-3">
                                        <p className="font-serif text-xl font-semibold">{item.value}</p>
                                        <p className="mt-0.5 text-xs text-slate-300">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[3px] text-blue-700">
                            {about.eyebrow}
                        </p>
                        <h1 className="mt-2 font-serif text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                            {titleParts.map((part, index) => (
                                <span key={index}>
                                    {part}
                                    {index < titleParts.length - 1 && (
                                        <span className="text-[#4b8dff]">{about.highlight}</span>
                                    )}
                                </span>
                            ))}
                        </h1>
                        <div className="mt-4 space-y-4 text-sm leading-6 text-slate-600 md:text-[15px]">
                            {about.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                        <p className="mt-4 text-sm leading-6 text-slate-500">
                            Location: {about.location}
                        </p>

                        <div className="mt-4 grid gap-3 sm:grid-cols-3">
                            {[about.mission, about.objective, about.strengthIntro].map((section) => (
                                <div key={section.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium leading-6 text-slate-700">
                                    <p className="font-semibold text-slate-900">{section.title}</p>
                                    <p className="mt-2 text-xs text-slate-600">{section.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5 flex flex-wrap gap-3">
                            <Link
                                href="/products"
                                className="rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
                            >
                                View Products
                            </Link>
                            <Link
                                href="/contact"
                                className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-700"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8">
                <div className="grid gap-5 sm:grid-cols-3">
                    {about.strengths.map((strength) => (
                        <div key={strength.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h2 className="text-lg font-semibold text-slate-900">{strength.title}</h2>
                            <p className="mt-3 text-sm leading-6 text-slate-600">{strength.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default async function AboutPage() {
    return <AboutPageContent />;
}
