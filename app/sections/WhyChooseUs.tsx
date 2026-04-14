const reasons = [
    {
        num: "01",
        title: "ISO-Standard Manufacturing",
        text: "All equipment made in our dedicated plant at Wardha with strict quality control and standardization testing.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <polyline points="20 6 9 17 4 12" />
            </svg>
        ),
    },
    {
        num: "02",
        title: "Fast PAN India Delivery",
        text: "Located at the geographic centre of India — Wardha, Maharashtra — for the fastest delivery to every corner of the country.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
    },
    {
        num: "03",
        title: "After-Sales Support",
        text: "Our commitment doesn't end at delivery. Prompt after-sales assistance for every product we ship.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
    },
    {
        num: "04",
        title: "Factory Direct Prices",
        text: "No middlemen. Buy directly from the manufacturer and get the best price for bulk institutional orders.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
        ),
    },
    {
        num: "05",
        title: "Custom Product Orders",
        text: "Need specific dimensions or modifications? Our skilled team delivers customised apparatus built to your exact requirements.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
            </svg>
        ),
    },
    {
        num: "06",
        title: "Secure Packaging",
        text: "Instruments are packed with exceptional care to ensure they arrive in perfect condition, even for long-distance deliveries.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <rect x="1" y="3" width="15" height="13" rx="2" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
        ),
    },
];

export default function WhyChooseUs() {
    return (
        <section className="bg-slate-900 py-16">
            <div className="mx-auto max-w-6xl px-6 lg:px-10">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[2px] text-blue-400">
                    Why PsychoScan
                </p>
                <h2 className="mb-3 text-3xl font-bold text-white">
                    Built for Labs. Backed by Quality.
                </h2>
                <p className="mb-10 max-w-xl text-[15px] leading-relaxed text-slate-400">
                    Every instrument we manufacture goes through strict quality checks so that your research and assessments are never compromised.
                </p>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {reasons.map((r) => (
                        <div
                            key={r.num}
                            className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 p-6"
                        >
                            {/* Left accent */}
                            <div className="absolute bottom-0 left-0 top-0 w-1 rounded-l-2xl bg-blue-500" />

                            {/* Background number */}
                            <span className="absolute right-5 top-4 text-4xl font-bold leading-none text-slate-700 select-none">
                                {r.num}
                            </span>

                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-700">
                                {r.icon}
                            </div>
                            <h3 className="mb-2 text-[15px] font-semibold text-white">{r.title}</h3>
                            <p className="text-[13px] leading-relaxed text-slate-400">{r.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}