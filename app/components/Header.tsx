import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/95 backdrop-blur">
            {/* Top accent bar */}
            <div className="h-[3px] w-full bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400" />

            <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-10">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 no-underline">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 shadow-md shadow-blue-900">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <circle cx="11" cy="9" r="5" stroke="white" strokeWidth="1.5" fill="none" />
                            <path d="M7.5 9 C7.5 6.5 9 5 11 5" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
                            <circle cx="11" cy="9" r="2" fill="white" opacity="0.9" />
                            <path d="M11 14 L11 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M8.5 17.5 L11 19 L13.5 17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-[18px] font-bold leading-none tracking-tight">
                            <span className="text-blue-400">Psycho</span>
                            <span className="text-slate-100">Scan</span>
                        </h2>
                        <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[1.5px] text-slate-500">
                            Psychology Lab Equipment
                        </p>
                    </div>
                </Link>

                {/* Nav */}
                <nav className="hidden items-center gap-1 lg:flex">
                    {[
                        { label: "Home", href: "/" },
                        { label: "Products", href: "/products" },
                        { label: "Company Profile", href: "/about" },
                        { label: "Contact Us", href: "/contact" },
                    ].map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition-all hover:bg-blue-900/40 hover:text-blue-400"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <div className="flex items-center gap-3">
                    <a href="tel:08045816232"
                        className="hidden items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-400 transition hover:border-blue-700/60 hover:text-blue-400 lg:flex"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 011 1.18a2 2 0 012-2.18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7 6.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                        </svg>
                        080-4581-6232
                    </a>
                    <Link
                        href="/contact"
                        className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-900/50 transition hover:bg-blue-600"
                    >
                        Send Inquiry
                    </Link>
                </div>
            </div>
        </header>
    );
}