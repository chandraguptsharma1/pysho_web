import Link from "next/link";

const products = [
    "Mirror Drawing (Metal Star)",
    "Bolt Head Maze",
    "Tachistoscope",
    "Muller Lyer Illusion",
    "Steadiness Tester",
    "Seguin Form Board",
    "Kohs Block Design",
    "Rational Learning Apparatus",
];

const stats = [
    { num: "25+", label: "Years Experience" },
    { num: "50+", label: "Products" },
    { num: "PAN India", label: "Fast Delivery" },
    { num: "GST ✓", label: "Registered" },
];

export default function Hero() {
    return (
        <section className="relative flex h-[calc(100vh-72px)] w-full overflow-hidden bg-slate-50">
            {/* Subtle background pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #1e3a8a 1px, transparent 0)`,
                    backgroundSize: "28px 28px",
                }}
            />
            {/* Soft glow blobs */}
            <div className="pointer-events-none absolute -top-32 left-0 h-[500px] w-[500px] rounded-full bg-blue-100 opacity-60 blur-[120px]" />
            <div className="pointer-events-none absolute bottom-0 right-10 h-[350px] w-[350px] rounded-full bg-cyan-100 opacity-50 blur-[100px]" />

            <div className="relative mx-auto grid w-full max-w-7xl grid-cols-2 items-center gap-12 px-6 lg:px-10">
                {/* LEFT */}
                <div className="flex flex-col justify-center">
                    {/* Badge */}
                    <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-blue-600">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
                        Manufacturer & Supplier · Wardha, Maharashtra
                    </div>

                    {/* Heading */}
                    <h1 className="mb-4 text-[42px] font-extrabold leading-[1.15] tracking-tight text-slate-900">
                        India&apos;s Trusted{" "}
                        <span className="text-blue-600">Psychology Lab</span>
                        <br />
                        Equipment Manufacturer
                    </h1>

                    {/* Description */}
                    <p className="mb-6 max-w-md text-[15px] leading-relaxed text-slate-500">
                        Supplying high-quality psychological testing equipment to universities, colleges, research labs & institutions across India. Factory prices, custom orders accepted.
                    </p>

                    {/* Product tags */}
                    <div className="mb-7 flex flex-wrap gap-2">
                        {products.map((p) => (
                            <span
                                key={p}
                                className="rounded-md border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm"
                            >
                                {p}
                            </span>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="/products"
                            className="rounded-xl bg-blue-700 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-800"
                        >
                            Browse All Products →
                        </Link>
                        <Link
                            href="/contact"
                            className="rounded-xl border border-slate-300 bg-white px-7 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-700"
                        >
                            Request a Quote
                        </Link>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex h-full items-center justify-end py-8">
                    <div className="flex w-full max-w-[360px] flex-col gap-3">
                        {/* Contact card */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-100">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                        <polyline points="9 22 9 12 15 12 15 22" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">PSYCHOSCAN</div>
                                    <div className="text-[11px] text-slate-400">GST: 27ADZPN6741P1ZC</div>
                                </div>
                            </div>

                            <div className="mb-4 space-y-2.5">
                                <div className="flex items-start gap-2.5 text-[13px] text-slate-600">
                                    <span className="mt-0.5 text-base">📍</span>
                                    Plot No 58, Laxminagar, Behind Yeshwant Mahavidyalay, Wardha – 442001, Maharashtra
                                </div>
                                <div className="flex items-center gap-2.5 text-[13px] text-slate-600">
                                    <span className="text-base">📞</span>
                                    08045816232
                                </div>
                                <div className="flex items-center gap-2.5 text-[13px] text-slate-600">
                                    <span className="text-base">👤</span>
                                    Ms. Chitra Nimbalkar (Proprietor)
                                </div>
                            </div>

                            <Link
                                href="/contact"
                                className="block w-full rounded-xl bg-blue-700 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-blue-800"
                            >
                                Send Inquiry Now
                            </Link>
                        </div>

                        {/* Stats grid */}
                        <div className="grid grid-cols-2 gap-3">
                            {stats.map((s) => (
                                <div
                                    key={s.label}
                                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center shadow-sm"
                                >
                                    <div className="text-lg font-bold text-blue-700">{s.num}</div>
                                    <div className="mt-0.5 text-[11px] text-slate-400">{s.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Trust strip */}
                        <div className="flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white py-2.5 text-[11px] text-slate-500 shadow-sm">
                            <span className="text-green-500">✓</span> Trusted Seller on TradeIndia
                            <span className="text-slate-300">|</span>
                            <span className="text-green-500">✓</span> Quality Assured
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}