import Link from "next/link";

const products = [
    {
        name: "Mirror Drawing (Metal Star)",
        category: "Motor Skills",
        badge: "Electronics",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
        ),
    },
    {
        name: "Bolt Head Maze",
        category: "Spatial Ability",
        badge: "With Error Counter",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            </svg>
        ),
    },
    {
        name: "Tachistoscope",
        category: "Perception",
        badge: "Gravity + Electronics",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
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
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        ),
    },
    {
        name: "Steadiness Tester",
        category: "Motor Control",
        badge: "Electronics",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
    },
    {
        name: "Kohs Block Design Test",
        category: "Intelligence",
        badge: "Wooden",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
            </svg>
        ),
    },
];

export default function PopularProducts() {
    return (
        <section className="border-y border-slate-700 bg-slate-900 py-16">
            <div className="mx-auto max-w-6xl px-6 lg:px-10">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[2px] text-blue-400">
                    Our Products
                </p>
                <h2 className="mb-3 text-3xl font-bold text-white">
                    Popular Psychological Equipment
                </h2>
                <p className="mb-10 max-w-xl text-[15px] leading-relaxed text-slate-400">
                    Trusted apparatus used in psychology labs, B.Ed programmes, and research institutions nationwide.
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((p) => (
                        <div
                            key={p.name}
                            className="flex items-start gap-4 rounded-2xl border border-slate-700 bg-slate-800 p-5 transition hover:shadow-md hover:shadow-blue-900/40"
                        >
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-700">
                                {p.icon}
                            </div>
                            <div>
                                <h3 className="mb-0.5 text-[13px] font-semibold text-white">{p.name}</h3>
                                <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">{p.category}</p>
                                <span className="mt-1.5 inline-block rounded-full bg-blue-900/50 px-2.5 py-0.5 text-[10px] font-semibold text-blue-400">
                                    {p.badge}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-800 px-6 py-3 text-sm font-semibold text-blue-400 transition hover:bg-slate-700 hover:border-blue-500"
                    >
                        View All Products →
                    </Link>
                </div>
            </div>
        </section>
    );
}