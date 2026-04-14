const buyers = [
    {
        title: "Universities & Colleges",
        desc: "Psychology departments, B.Ed & M.Ed labs across India",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
    },
    {
        title: "Research Institutes",
        desc: "Clinical and behavioural research labs, ICMR-funded projects",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
    },
    {
        title: "Hospitals & Clinics",
        desc: "Psychiatric departments and occupational therapy units",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                <line x1="12" y1="12" x2="12" y2="16" />
                <line x1="10" y1="14" x2="14" y2="14" />
            </svg>
        ),
    },
    {
        title: "Schools & Ed. Boards",
        desc: "Physical education, special education, and counselling labs",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
    },
];

export default function WhoWeServe() {
    return (
        <section className="border-y border-slate-700 bg-slate-900 py-16">
            <div className="mx-auto max-w-6xl px-6 lg:px-10">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[2px] text-blue-400">
                    Trusted By
                </p>
                <h2 className="mb-3 text-3xl font-bold text-slate-100">
                    Who Uses Our Equipment?
                </h2>
                <p className="mb-10 max-w-xl text-[15px] leading-relaxed text-slate-400">
                    Colleges, universities, research institutions, and hospitals across India rely on our quality-assured psychological apparatus.
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {buyers.map((b) => (
                        <div
                            key={b.title}
                            className="rounded-2xl border border-slate-700 bg-slate-800 p-6 text-center transition hover:shadow-md hover:shadow-blue-900/30 hover:border-slate-600"
                        >
                            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-900/40">
                                {b.icon}
                            </div>
                            <h3 className="mb-1.5 text-sm font-semibold text-slate-100">{b.title}</h3>
                            <p className="text-xs leading-relaxed text-slate-400">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}