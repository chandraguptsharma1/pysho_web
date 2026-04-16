import Link from "next/link";
import Image from "next/image";

const stats = [
    { num: "30+", label: "Years of Experience", icon: "🏛️" },
    { num: "500+", label: "Educational Institutions Served", icon: "🏆" },
    { num: "100+", label: "Precision Apparatus", icon: "⚙️" },
    { num: "100%", label: "Quality Commitment", icon: "👥" },
];

export default function Hero() {
    return (
        <>
            <style>{`
                @keyframes fadeUp {
                    from { opacity:0; transform:translateY(18px); }
                    to   { opacity:1; transform:translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity:0; }
                    to   { opacity:1; }
                }
                .h-a1 { animation: fadeUp .5s ease both .05s; }
                .h-a2 { animation: fadeUp .5s ease both .15s; }
                .h-a3 { animation: fadeUp .5s ease both .25s; }
                .h-a4 { animation: fadeUp .5s ease both .35s; }
                .h-ar { animation: fadeIn .8s ease both .1s; }
                .btn-exp:hover { background-color:#3730a3 !important; }
                .btn-con:hover { border-color:#6366f1 !important; color:#4f46e5 !important; }
            `}</style>

            {/* ── HERO ── */}
            <section
                className="relative w-full overflow-hidden"
                style={{ background: "linear-gradient(130deg, #eef2ff 0%, #f0f4ff 50%, #e8f0fe 100%)", minHeight: "460px" }}
            >
                {/* dot grid */}
                <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #c7d2fe 1px, transparent 0)", backgroundSize: "28px 28px" }} />

                {/* left glow */}
                <div className="pointer-events-none absolute -top-20 left-0 h-96 w-96 rounded-full opacity-50"
                    style={{ background: "#dbeafe", filter: "blur(80px)" }} />

                <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center lg:grid-cols-2"
                    style={{ minHeight: "460px" }}>

                    {/* ── LEFT: text + logo watermark behind ── */}
                    <div className="relative flex flex-col justify-center px-6 py-14 lg:px-10 lg:py-16">

                        {/* Logo watermark — behind content */}
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-start"
                            style={{ zIndex: 0, paddingLeft: "20px" }}>
                            <Image
                                src="/logo1.jpeg"
                                alt=""
                                width={340}
                                height={340}
                                className="object-contain"
                                style={{ opacity: 0.08 }}
                                aria-hidden="true"
                            />
                        </div>

                        {/* Text content — above watermark */}
                        <div className="relative" style={{ zIndex: 1 }}>
                            <p className="h-a1 mb-2 text-[12px] font-bold uppercase tracking-[3px]"
                                style={{ color: "#4f46e5" }}>
                                Manufacturer &amp; Supplier
                            </p>
                            <h1 className="h-a2 mb-0.5 font-extrabold leading-[1.05] tracking-tight"
                                style={{ fontSize: "clamp(34px,4vw,52px)", color: "#0f172a" }}>
                                VISHWAKARMA
                            </h1>
                            <h2 className="h-a2 mb-4 font-extrabold leading-[1.05]"
                                style={{ fontSize: "clamp(30px,3.5vw,46px)", color: "#4f46e5" }}>
                                PsyTech Labs
                            </h2>
                            <p className="h-a3 mb-1 text-[15px] font-bold" style={{ color: "#1e293b" }}>
                                Precision Tools for Psychology
                            </p>
                            <p className="h-a3 mb-8 text-[14px] leading-relaxed" style={{ color: "#64748b" }}>
                                Manufacturing High-Quality Psychology Apparatus<br />
                                for Education, Research &amp; Professional Use.
                            </p>
                            <div className="h-a4 flex flex-wrap items-center gap-3">
                                <Link href="/products"
                                    className="btn-exp flex items-center gap-2 rounded-xl px-7 py-3 text-[14px] font-bold text-white transition-colors"
                                    style={{ backgroundColor: "#4f46e5", boxShadow: "0 4px 18px rgba(79,70,229,0.35)" }}>
                                    Explore Products
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </Link>
                                <Link href="/contact"
                                    className="btn-con rounded-xl px-7 py-3 text-[14px] font-medium transition-colors"
                                    style={{ border: "1.5px solid #cbd5e1", backgroundColor: "white", color: "#334155" }}>
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT: product photo ── */}
                    <div className="h-ar relative hidden lg:block" style={{ height: "460px" }}>
                        <div className="absolute inset-0">
                            <Image
                                src="/bg-image.png"
                                alt="Psychology Lab Equipment"
                                fill
                                className="object-cover object-center"
                                priority
                                sizes="50vw"
                            />
                            {/* left fade to blend with left panel */}
                            <div className="absolute inset-0"
                                style={{ background: "linear-gradient(to right, #f0f4ff 0%, rgba(240,244,255,0.15) 30%, transparent 60%)" }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── STATS BAR ── */}
            <div className="w-full" style={{ backgroundColor: "#0f172a", borderTop: "1px solid #1e293b" }}>
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        {stats.map((s, i) => (
                            <div key={s.label}
                                className="flex items-center justify-center gap-4 py-6 px-4"
                                style={{ borderRight: i < 3 ? "1px solid #1e293b" : "none" }}>
                                <span style={{ fontSize: "26px" }}>{s.icon}</span>
                                <div>
                                    <p className="text-[24px] font-extrabold leading-none text-white">{s.num}</p>
                                    <p className="mt-0.5 text-[12px]" style={{ color: "#64748b" }}>{s.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}