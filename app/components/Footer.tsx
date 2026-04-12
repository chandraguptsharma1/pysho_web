import Link from "next/link";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Company Profile", href: "/about" },
    { label: "Contact Us", href: "/contact" },
];

const productLinks = [
    { label: "Mirror Drawing Apparatus", href: "/products" },
    { label: "Bolt Head Maze", href: "/products" },
    { label: "Tachistoscope", href: "/products" },
    { label: "Muller Lyer Illusion", href: "/products" },
    { label: "Steadiness Tester", href: "/products" },
    { label: "Kohs Block Design Test", href: "/products" },
];

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-900 text-white">
            {/* Main footer */}
            <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                                <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                                    <circle cx="11" cy="9" r="5" stroke="white" strokeWidth="1.5" fill="none" />
                                    <path d="M7.5 9 C7.5 6.5 9 5 11 5" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
                                    <circle cx="11" cy="9" r="2" fill="white" opacity="0.9" />
                                    <path d="M11 14 L11 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M8.5 17.5 L11 19 L13.5 17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-[17px] font-bold leading-none">
                                    <span className="text-blue-400">Psycho</span>
                                    <span className="text-white">Scan</span>
                                </h3>
                                <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[1.5px] text-slate-400">
                                    Psychology Lab Equipment
                                </p>
                            </div>
                        </div>
                        <p className="mb-5 text-[13px] leading-relaxed text-slate-400">
                            Manufacturer and supplier of quality psychological testing equipment for institutions across India since 1990s.
                        </p>
                        {/* GST badge */}
                        <div className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-[11px] text-slate-400">
                            <span className="text-emerald-400">✓</span>
                            GST: 27ADZPN6741P1ZC
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-5 text-[12px] font-semibold uppercase tracking-[1.5px] text-slate-400">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((l) => (
                                <li key={l.label}>
                                    <Link
                                        href={l.href}
                                        className="text-[13px] text-slate-400 transition hover:text-blue-400"
                                    >
                                        → {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="mb-5 text-[12px] font-semibold uppercase tracking-[1.5px] text-slate-400">
                            Popular Products
                        </h4>
                        <ul className="space-y-3">
                            {productLinks.map((l) => (
                                <li key={l.label}>
                                    <Link
                                        href={l.href}
                                        className="text-[13px] text-slate-400 transition hover:text-blue-400"
                                    >
                                        → {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-5 text-[12px] font-semibold uppercase tracking-[1.5px] text-slate-400">
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-[13px] text-slate-400">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                Plot No 58, Laxminagar, Behind Yeshwant Mahavidyalay, Wardha – 442001, Maharashtra
                            </li>
                            <li>

                                <a href="tel:08045816232"
                                    className="flex items-center gap-3 text-[13px] text-slate-400 transition hover:text-blue-400"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 011 1.18a2 2 0 012-2.18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7 6.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                    </svg>
                                    080-4581-6232
                                </a>
                            </li>
                            <li>

                                <a href="mailto:psychoscan@gmail.com"
                                    className="flex items-center gap-3 text-[13px] text-slate-400 transition hover:text-blue-400"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    psychoscan@gmail.com
                                </a>
                            </li>
                        </ul>

                        {/* Map link */}

                        <a href="https://maps.google.com/?q=Wardha,Maharashtra"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-[12px] font-medium text-slate-300 transition hover:border-blue-500 hover:text-blue-400"
                        >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            View on Google Maps
                        </a>
                    </div>
                </div >
            </div >

            {/* Bottom bar */}
            < div className="border-t border-slate-800" >
                <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4 lg:px-10">
                    <p className="text-[12px] text-slate-500">
                        © {new Date().getFullYear()} PsychoScan. All rights reserved. Wardha, Maharashtra, India.
                    </p>
                    <div className="flex items-center gap-4 text-[12px] text-slate-500">
                        <span className="flex items-center gap-1.5">
                            <span className="text-emerald-400">✓</span> TradeIndia Trusted Seller
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="text-emerald-400">✓</span> Quality Assured
                        </span>
                    </div>
                </div>
            </div >
        </footer >
    );
}
