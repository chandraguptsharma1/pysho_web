"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Why Choose Us", href: "/why-us" },
    { label: "Contact", href: "/contact" },
];

type TopbarSocialLink = {
    platform: "facebook" | "linkedin";
    label: string;
    url: string;
    isActive: boolean;
};

type SiteTopbar = {
    email: string;
    phone: string;
    followLabel: string;
    socialLinks: TopbarSocialLink[];
    isActive: boolean;
};

type TopbarResponse = {
    topbar?: Partial<SiteTopbar>;
    topBar?: Partial<SiteTopbar>;
    data?: {
        topbar?: Partial<SiteTopbar>;
        topBar?: Partial<SiteTopbar>;
    };
};

const defaultTopbar: SiteTopbar = {
    email: "info@vishwakarmapsytech.com",
    phone: "+91 080-4581-6232",
    followLabel: "Follow Us:",
    socialLinks: [
        { platform: "facebook", label: "Facebook", url: "#", isActive: true },
        { platform: "linkedin", label: "LinkedIn", url: "#", isActive: true },
    ],
    isActive: true,
};

const socialIcons: Record<TopbarSocialLink["platform"], string> = {
    facebook: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
    linkedin: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z",
};

function getTopbarFromResponse(data: TopbarResponse): SiteTopbar {
    const topbar = data.topbar || data.topBar || data.data?.topbar || data.data?.topBar;

    if (!topbar) return defaultTopbar;

    const socialLinks = defaultTopbar.socialLinks.map((fallback) => {
        const match = topbar.socialLinks?.find((link) => link.platform === fallback.platform);
        return {
            ...fallback,
            ...match,
            platform: fallback.platform,
            isActive: typeof match?.isActive === "boolean" ? match.isActive : fallback.isActive,
        };
    });

    return {
        ...defaultTopbar,
        ...topbar,
        socialLinks,
        isActive: typeof topbar.isActive === "boolean" ? topbar.isActive : defaultTopbar.isActive,
    };
}

function telHref(phone: string) {
    const cleaned = phone.replace(/[^\d+]/g, "");
    return cleaned ? `tel:${cleaned}` : "tel:08045816232";
}

function mailHref(email: string) {
    return email ? `mailto:${email}` : "mailto:info@vishwakarmapsytech.com";
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [topbar, setTopbar] = useState<SiteTopbar>(defaultTopbar);

    useEffect(() => {
        const controller = new AbortController();
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";

        async function loadTopbar() {
            try {
                const response = await fetch(`${baseUrl}/topbar`, {
                    signal: controller.signal,
                    cache: "no-store",
                });

                if (!response.ok) return;

                const data = (await response.json()) as TopbarResponse;
                setTopbar(getTopbarFromResponse(data));
            } catch (error) {
                if (error instanceof DOMException && error.name === "AbortError") return;
            }
        }

        void loadTopbar();

        return () => controller.abort();
    }, []);

    const activeSocialLinks = topbar.socialLinks.filter((link) => link.isActive);

    return (
        <header className="sticky top-0 z-50" style={{ backgroundColor: "#0a1628" }}>
            {/* Top accent bar */}
            <div className="h-[3px] w-full bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400" />

            {/* Top info bar — desktop only */}
            {topbar.isActive && (
            <div className="hidden border-b lg:block" style={{ borderColor: "#1a3050", backgroundColor: "#071020" }}>
                <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 lg:px-10">
                    <div className="flex items-center gap-5">
                        <a href={mailHref(topbar.email)}
                            className="flex items-center gap-1.5 text-[12px] text-slate-500 transition hover:text-blue-400">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="M22 7L12 13 2 7" />
                            </svg>
                            {topbar.email}
                        </a>
                        <span className="text-slate-700">|</span>
                        <a href={telHref(topbar.phone)}
                            className="flex items-center gap-1.5 text-[12px] text-slate-500 transition hover:text-blue-400">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 011 1.18a2 2 0 012-2.18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7 6.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                            </svg>
                            {topbar.phone}
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-[12px] text-slate-600">{topbar.followLabel}</span>
                        {activeSocialLinks.map((s) => (
                            <a key={s.platform} href={s.url || "#"} aria-label={s.label}
                                className="flex h-6 w-6 items-center justify-center rounded-full"
                                target={s.url && s.url !== "#" ? "_blank" : undefined}
                                rel={s.url && s.url !== "#" ? "noopener noreferrer" : undefined}
                                style={{ backgroundColor: "#1e3a5f" }}>
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="#7ab3e8">
                                    <path d={socialIcons[s.platform]} />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            )}

            {/* Main navbar */}
            <div className="border-b" style={{ borderColor: "#1a3050" }}>
                <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-4 lg:h-[68px] lg:px-10">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 no-underline">
                        <Image
                            src="/logo-icon.png"
                            alt="Vishwakarma PsyTech Labs"
                            width={38}
                            height={38}
                            className="object-contain"
                            priority
                        />
                        <div className="flex flex-col justify-center">
                            <span className="text-[14px] font-bold leading-none tracking-tight text-white lg:text-[17px]">
                                VISHWAKARMA
                            </span>
                            <div className="flex items-center gap-1 mt-0.5">
                                <span className="text-[11px] font-bold lg:text-[13px]" style={{ color: "#7c3aed" }}>—</span>
                                <span className="text-[12px] font-bold lg:text-[14px]" style={{ color: "#7c3aed" }}>PsyTech</span>
                                <span className="text-[12px] font-bold text-white lg:text-[14px]">Labs</span>
                                <span className="text-[11px] font-bold lg:text-[13px]" style={{ color: "#7c3aed" }}>—</span>
                            </div>
                            <p className="hidden text-[8px] font-medium uppercase tracking-[1.5px] text-slate-500 lg:block">
                                Precision Tools for Psychology
                            </p>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden items-center gap-1 lg:flex">
                        {navLinks.map((item) => (
                            <Link key={item.href} href={item.href}
                                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition-all hover:bg-blue-900/40 hover:text-blue-400">
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right: CTA + hamburger */}
                    <div className="flex items-center gap-2">
                        <Link href="/contact"
                            className="flex items-center gap-1.5 rounded-lg bg-blue-700 px-3 py-2 text-[12px] font-semibold text-white transition hover:bg-blue-600 lg:px-5 lg:py-2.5 lg:text-sm"
                            style={{ boxShadow: "0 4px 14px rgba(37,99,235,0.35)" }}>
                            <span className="hidden sm:inline">Get a Quote</span>
                            <span className="sm:hidden">Quote</span>
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" fill="white" />
                            </svg>
                        </Link>

                        {/* Hamburger — mobile only */}
                        <button
                            onClick={() => setMenuOpen((v) => !v)}
                            className="flex h-9 w-9 items-center justify-center rounded-lg lg:hidden transition-colors"
                            style={{ backgroundColor: menuOpen ? "#2a4a7f" : "#1e3a5f" }}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                        >
                            {menuOpen ? (
                                /* X icon */
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7ab3e8" strokeWidth="2.5" strokeLinecap="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            ) : (
                                /* Hamburger icon */
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7ab3e8" strokeWidth="2" strokeLinecap="round">
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Mobile dropdown menu ── */}
            <div
                className="lg:hidden overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                    maxHeight: menuOpen ? "400px" : "0px",
                    borderBottom: menuOpen ? "1px solid #1a3050" : "none",
                    backgroundColor: "#071020",
                }}
            >
                <nav className="flex flex-col px-4 py-3 gap-1">
                    {navLinks.map((item, i) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-3 rounded-xl px-4 py-3 text-[14px] font-medium text-slate-400 transition-all hover:bg-blue-900/40 hover:text-blue-400"
                            style={{
                                animationDelay: `${i * 40}ms`,
                            }}
                        >
                            <span className="text-blue-700 text-[10px]">▶</span>
                            {item.label}
                        </Link>
                    ))}

                    {/* Divider */}
                    <div className="my-2 border-t" style={{ borderColor: "#1a3050" }} />

                    {/* Contact info in menu */}
                    {topbar.isActive && (
                        <>
                            <a href={telHref(topbar.phone)}
                                className="flex items-center gap-3 px-4 py-2 text-[13px] text-slate-500 hover:text-blue-400 transition-colors">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7ab3e8" strokeWidth="2" strokeLinecap="round">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 011 1.18a2 2 0 012-2.18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7 6.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                </svg>
                                {topbar.phone}
                            </a>
                            <a href={mailHref(topbar.email)}
                                className="flex items-center gap-3 px-4 py-2 text-[13px] text-slate-500 hover:text-blue-400 transition-colors">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7ab3e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="M22 7L12 13 2 7" />
                                </svg>
                                {topbar.email}
                            </a>
                        </>
                    )}

                    <div className="pb-2" />
                </nav>
            </div>
        </header>
    );
}
