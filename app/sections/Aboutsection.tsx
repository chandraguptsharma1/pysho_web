export default function AboutSection() {
    const stats = [
        { num: "30+", label: "Years of Experience", accent: true },
        { num: "500+", label: "Institutions Served", accent: false },
        { num: "100+", label: "Precision Apparatus", accent: false },
        { num: "100%", label: "Quality Commitment", accent: false },
    ];

    const strengths = [
        {
            title: "Testing & Quality Control",
            desc: "Each piece of equipment goes through rigorous testing and evaluation to ensure it meets standardisation and client expectations.",
            icon: (
                <svg viewBox="0 0 16 16" fill="none" stroke="#AFA9EC" strokeWidth="1.8" strokeLinecap="round" className="w-4 h-4">
                    <path d="M8 2l1.5 3 3.5.5-2.5 2.5.5 3.5L8 10l-3 1.5.5-3.5L3 5.5l3.5-.5z" />
                </svg>
            ),
        },
        {
            title: "Quick Countrywide Supply",
            desc: "Located in Wardha (Vidharbha), the heart of India — we deliver to every corner of the country with speed and reliability.",
            icon: (
                <svg viewBox="0 0 16 16" fill="none" stroke="#AFA9EC" strokeWidth="1.8" strokeLinecap="round" className="w-4 h-4">
                    <path d="M2 8h12M8 2c0 4-3 6-3 6s3 2 3 6M8 2c0 4 3 6 3 6s-3 2-3 6" />
                </svg>
            ),
        },
        {
            title: "Excellent After-Sales Support",
            desc: "Our commitment extends beyond delivery — cutting-edge goods are backed by prompt, professional after-sales assistance.",
            icon: (
                <svg viewBox="0 0 16 16" fill="none" stroke="#AFA9EC" strokeWidth="1.8" strokeLinecap="round" className="w-4 h-4">
                    <path d="M2 12s2-4 6-4 6 4 6 4" /><circle cx="8" cy="5" r="3" />
                </svg>
            ),
        },
    ];

    const customPoints = [
        {
            title: "Precision Manufacturing",
            desc: "Products with specific dimensions and quality material made by our skilled staff to exact specifications.",
            icon: (
                <svg viewBox="0 0 16 16" fill="none" stroke="#534AB7" strokeWidth="1.8" strokeLinecap="round" className="w-3.5 h-3.5">
                    <path d="M13 3L6 10l-3-3" />
                </svg>
            ),
        },
        {
            title: "Prompt Delivery",
            desc: "Centrally located in Wardha — we ensure faster delivery to every corner of India.",
            icon: (
                <svg viewBox="0 0 16 16" fill="none" stroke="#534AB7" strokeWidth="1.8" strokeLinecap="round" className="w-3.5 h-3.5">
                    <circle cx="8" cy="8" r="6" /><path d="M8 5v3l2 2" />
                </svg>
            ),
        },
        {
            title: "Secure & Ethical Practices",
            desc: "Exceptional packaging, ethical business practices, and quality commitment in every single order.",
            icon: (
                <svg viewBox="0 0 16 16" fill="none" stroke="#534AB7" strokeWidth="1.8" strokeLinecap="round" className="w-3.5 h-3.5">
                    <rect x="2" y="5" width="12" height="9" rx="2" /><path d="M5 5V4a3 3 0 016 0v1" />
                </svg>
            ),
        },
    ];

    return (
        <section className="w-full bg-white border-t border-[#f0effe] py-20 px-6">
            <div className="max-w-6xl mx-auto space-y-16">

                {/* ── 1. INTRO: Text + Stats ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-[#EEEDFE] text-[#3C3489] text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#534AB7]" />
                            ABOUT PSYCHOSCAN
                        </div>
                        <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-3">
                            Crafting <span className="text-[#534AB7]">Precision Tools</span> for the Science of Mind
                        </h2>
                        <div className="w-11 h-[3px] bg-[#7F77DD] rounded-full mb-5" />
                        <p className="text-sm text-slate-500 leading-relaxed mb-3">
                            Psychoscan strives to stand out in the business with our extensive line-up of
                            psychology lab equipment that is completely quality assured. We produce equipment
                            in our specially constructed plant at{" "}
                            <strong className="text-slate-700">Wardha, Maharashtra (India)</strong>.
                        </p>
                        <p className="text-sm text-slate-500 leading-relaxed mb-6">
                            We manufacture the equipment and tests needed by psychology labs, students,
                            educators, physical education departments, and researchers — including the Bolt
                            Head Maze, Tachistoscope, Mirror Drawing apparatus, and much more.
                        </p>
                        <div className="inline-flex items-center gap-2 bg-[#f8f7ff] border border-[#EEEDFE] rounded-full px-4 py-1.5 text-[11px] text-[#534AB7] font-semibold">
                            <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M8 2C5.8 2 4 3.8 4 6c0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4z" />
                                <circle cx="8" cy="6" r="1.5" />
                            </svg>
                            Wardha, Maharashtra, India
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((s, i) => (
                            <div
                                key={i}
                                className={`relative overflow-hidden rounded-2xl px-5 py-6 ${s.accent ? "bg-[#534AB7]" : "bg-[#f8f7ff] border border-[#EEEDFE]"
                                    }`}
                            >
                                <div
                                    className="absolute -top-4 -right-4 w-14 h-14 rounded-full"
                                    style={{ background: "rgba(127,119,221,0.13)" }}
                                />
                                <p className={`text-4xl font-extrabold leading-none mb-1 ${s.accent ? "text-white" : "text-[#534AB7]"}`}>
                                    {s.num}
                                </p>
                                <p className={`text-xs font-medium ${s.accent ? "text-[#CECBF6]" : "text-slate-500"}`}>
                                    {s.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── 2. MISSION + OBJECTIVES ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="bg-white border border-[#EEEDFE] rounded-2xl p-7">
                        <div className="w-10 h-10 rounded-xl bg-[#EEEDFE] flex items-center justify-center mb-5">
                            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="#534AB7" strokeWidth="1.8" strokeLinecap="round">
                                <circle cx="10" cy="10" r="8" />
                                <circle cx="10" cy="10" r="3" />
                                <path d="M10 2v2M10 16v2M2 10h2M16 10h2" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-extrabold text-slate-900 mb-3">Our Mission</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Quality and Service are at the heart of everything we do. We are committed to
                            manufacturing precision psychology apparatus that empowers researchers,
                            educators, and students across India.
                        </p>
                    </div>

                    <div className="bg-white border border-[#EEEDFE] rounded-2xl p-7">
                        <div className="w-10 h-10 rounded-xl bg-[#EEEDFE] flex items-center justify-center mb-5">
                            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="#534AB7" strokeWidth="1.8" strokeLinecap="round">
                                <path d="M10 3L12.5 8l5.5.8-4 3.9.9 5.3L10 15.5l-4.9 2.5.9-5.3-4-3.9 5.5-.8z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-extrabold text-slate-900 mb-3">Our Objectives</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            We put in a lot of effort every day to reach our goal of offering{" "}
                            <strong className="text-slate-700">high-quality goods at factory prices</strong>{" "}
                            in order to deliver exceptional services in the field of psychology.
                        </p>
                    </div>
                </div>

                {/* ── 3. STRENGTHS (dark band) ── */}
                <div className="bg-slate-900 rounded-2xl p-10">
                    <div
                        className="inline-flex items-center gap-2 text-[#AFA9EC] text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-full mb-4"
                        style={{ background: "rgba(174,169,236,0.15)" }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#AFA9EC]" />
                        OUR STRENGTHS
                    </div>
                    <h3 className="text-2xl font-extrabold text-white mb-3">What Sets Us Apart</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-2xl">
                        For clients who need special product modification or alteration, we are experts at
                        providing customised service. We value quality, exceptional packaging, prompt
                        service, and ethical business practices.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {strengths.map((s, i) => (
                            <div
                                key={i}
                                className="rounded-xl p-5"
                                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                            >
                                <div
                                    className="w-9 h-9 rounded-[10px] flex items-center justify-center mb-4"
                                    style={{ background: "rgba(83,74,183,0.4)" }}
                                >
                                    {s.icon}
                                </div>
                                <h4 className="text-sm font-bold text-white mb-2">{s.title}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── 4. PRODUCT CUSTOMIZATION ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div
                        className="rounded-2xl p-7"
                        style={{ background: "linear-gradient(145deg,#EEEDFE,#f5f4ff)", border: "1px solid #d4d0f9" }}
                    >
                        <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                            style={{ background: "rgba(83,74,183,0.12)" }}
                        >
                            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="#534AB7" strokeWidth="1.8" strokeLinecap="round">
                                <path d="M14.7 3.3a1 1 0 011.4 1.4L6.4 14.4l-3.4.6.6-3.4z" />
                                <path d="M12 5l3 3" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-extrabold text-slate-900 mb-3">Product Customization</h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-3">
                            As a reliable and skilled manufacturer, we are experts in providing customisation
                            services. For customers who need specific product modification or adjustment, we
                            create precise systems that fit their exact needs.
                        </p>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Products with specific dimensions and quality materials can be made by our skilled
                            staff — tailored exactly to your requirements.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        {customPoints.map((c, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white border border-[#EEEDFE] rounded-2xl p-5">
                                <div className="w-8 h-8 rounded-[10px] bg-[#EEEDFE] flex items-center justify-center flex-shrink-0 mt-0.5">
                                    {c.icon}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 mb-1">{c.title}</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">{c.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}