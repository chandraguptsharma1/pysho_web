const testimonials = [
    {
        text: "The Bolt Head Maze and Mirror Drawing apparatus we ordered arrived in perfect condition. Build quality is excellent and students love working with them in our lab.",
        name: "Dr. Rekha Pathak",
        role: "HOD Psychology, Nagpur University",
        initials: "DR",
    },
    {
        text: "We needed customised Tachistoscopes for our research project. PsychoScan delivered exactly what we specified, on time and at factory prices. Highly recommended.",
        name: "Prof. Sandeep More",
        role: "Research Lab, SNDT College, Pune",
        initials: "PS",
    },
    {
        text: "Quick delivery, proper packaging, and quality that matches the description. Our B.Ed department has been using their equipment for 3 years without any issues.",
        name: "Anita Marathe",
        role: "Lab Coordinator, Amravati College of Education",
        initials: "AM",
    },
];

export default function Testimonials() {
    return (
        <section className="py-16" style={{ backgroundColor: "#0d1b2e" }}>
            <div className="mx-auto max-w-6xl px-6 lg:px-10">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[2px] text-blue-400">
                    What Clients Say
                </p>
                <h2 className="mb-3 text-3xl font-bold text-white">
                    Trusted by Institutions Across India
                </h2>
                <p className="mb-10 max-w-xl text-[15px] leading-relaxed text-slate-400">
                    Hear from professors, lab coordinators, and researchers who rely on PsychoScan equipment every day.
                </p>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="flex flex-col justify-between rounded-2xl p-6"
                            style={{
                                backgroundColor: "#162032",
                                border: "1px solid #1e3a5f",
                            }}
                        >
                            <div>
                                <div className="mb-3 text-sm tracking-widest text-amber-400">
                                    ★★★★★
                                </div>
                                <p className="mb-5 text-[13px] italic leading-relaxed text-slate-400">
                                    &ldquo;{t.text}&rdquo;
                                </p>
                            </div>
                            <div
                                className="flex items-center gap-3 pt-4"
                                style={{ borderTop: "1px solid #1e3a5f" }}
                            >
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[13px] font-bold text-white">
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="text-[13px] font-semibold text-white">{t.name}</p>
                                    <p className="text-[11px] text-slate-500">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}