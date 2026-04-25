"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const stats = [
    { num: "30+", label: "Years of Experience", icon: "🏛️" },
    { num: "500+", label: "Educational Institutions Served", icon: "🏆" },
    { num: "100+", label: "Precision Apparatus", icon: "⚙️" },
    { num: "100%", label: "Quality Commitment", icon: "👥" },
];

const mobileSlides = [
    { src: "/slider/slider1.png", label: "Error Counter" },
    { src: "/slider/slider2.png", label: "Mirror Drawing" },
    { src: "/slider/slider3.png", label: "Steadiness Tester" },
    { src: "/slider/slider4.png", label: "Reaction Time Meter" },
    { src: "/slider/slider5.png", label: "Rational Learning" },
    { src: "/slider/slider6.png", label: "Memory Drum" },
];

function MobileSlider() {
    const [current, setCurrent] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const touchStartX = useRef<number | null>(null);
    const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const total = mobileSlides.length;

    const goTo = (idx: number) => {
        setCurrent((idx + total) % total);
        setDragOffset(0);
    };

    const startAuto = () => {
        if (autoRef.current) clearInterval(autoRef.current);
        autoRef.current = setInterval(
            () => setCurrent((p) => (p + 1) % total),
            3200
        );
    };
    const stopAuto = () => {
        if (autoRef.current) clearInterval(autoRef.current);
    };

    useEffect(() => {
        startAuto();
        return stopAuto;
    }, []);

    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        setIsDragging(true);
        stopAuto();
    };
    const onTouchMove = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        setDragOffset(e.touches[0].clientX - touchStartX.current);
    };
    const onTouchEnd = () => {
        const width = containerRef.current?.offsetWidth ?? 320;
        const threshold = width * 0.15;
        if (dragOffset < -threshold) goTo(current + 1);
        else if (dragOffset > threshold) goTo(current - 1);
        else setDragOffset(0);
        touchStartX.current = null;
        setIsDragging(false);
        startAuto();
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full overflow-hidden lg:hidden"
            style={{ height: "100svh", touchAction: "pan-y" }}
        >
            <div
                className="flex h-full w-full"
                style={{
                    transform: `translate3d(calc(-${current * 100}% + ${dragOffset}px), 0, 0)`,
                    transition: isDragging
                        ? "none"
                        : "transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94)",
                    willChange: "transform",
                    userSelect: "none",
                }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {mobileSlides.map((slide, i) => (
                    <div
                        key={i}
                        className="relative flex-shrink-0 w-full h-full bg-[#111]"
                    >
                        <div className="relative w-full h-[calc(100%-88px)] px-2 pt-2 pb-1">
                            <Image
                                src={slide.src}
                                alt={slide.label}
                                fill
                                className="object-contain object-center pointer-events-none"
                                draggable={false}
                                priority={i === 0}
                                sizes="100vw"
                            />
                        </div>

                        <div
                            className="absolute bottom-0 left-0 w-full h-24 pointer-events-none"
                            style={{
                                background:
                                    "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 45%, transparent 100%)",
                            }}
                        />

                        <div className="absolute bottom-4 left-5 right-5 z-10">
                            <p className="text-white/60 text-[10px] font-semibold tracking-[2px] uppercase mb-1">
                                Psychoscan
                            </p>
                            <p className="text-white text-[20px] font-bold leading-tight">
                                {slide.label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                {mobileSlides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            goTo(i);
                            startAuto();
                        }}
                        style={{
                            width: i === current ? 22 : 7,
                            height: 7,
                            borderRadius: 999,
                            background: i === current ? "#fff" : "rgba(255,255,255,0.35)",
                            border: "none",
                            padding: 0,
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                        }}
                    />
                ))}
            </div>

            <div
                className="absolute top-5 right-5 z-20 text-white text-[12px] font-bold px-3 py-1 rounded-full"
                style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(6px)" }}
            >
                {current + 1} / {total}
            </div>
        </div>
    );
}

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

            {/* MOBILE */}
            <MobileSlider />

            {/* DESKTOP */}
            <section
                className="relative w-full overflow-hidden hidden lg:block"
                style={{
                    background:
                        "linear-gradient(130deg, #eef2ff 0%, #f0f4ff 50%, #e8f0fe 100%)",
                }}
            >
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 1px 1px, #c7d2fe 1px, transparent 0)",
                        backgroundSize: "28px 28px",
                    }}
                />
                <div
                    className="pointer-events-none absolute -top-20 left-0 h-96 w-96 rounded-full opacity-40"
                    style={{ background: "#dbeafe", filter: "blur(80px)" }}
                />

                <div
                    className="relative mx-auto grid max-w-7xl grid-cols-1 items-center lg:grid-cols-2"
                    style={{ minHeight: "460px" }}
                >
                    <div className="relative flex flex-col justify-center px-5 pb-10 pt-4 lg:px-10 lg:py-16">
                        <div
                            className="pointer-events-none absolute inset-0 flex items-center justify-center lg:justify-start"
                            style={{ zIndex: 0 }}
                        >
                            <Image
                                src="/logo-icon.png"
                                alt=""
                                width={280}
                                height={280}
                                className="object-contain"
                                style={{ opacity: 0.04 }}
                                aria-hidden="true"
                            />
                        </div>

                        <div className="relative" style={{ zIndex: 1 }}>
                            <p
                                className="h-a1 mb-2 text-[11px] font-bold uppercase tracking-[3px] lg:text-[12px]"
                                style={{ color: "#4f46e5" }}
                            >
                                Manufacturer &amp; Supplier
                            </p>
                            <h1
                                className="h-a2 mb-0.5 font-extrabold leading-[1.05] tracking-tight"
                                style={{ fontSize: "clamp(28px,7vw,52px)", color: "#0f172a" }}
                            >
                                VISHWAKARMA
                            </h1>
                            <h2
                                className="h-a2 mb-3 font-extrabold leading-[1.05]"
                                style={{ fontSize: "clamp(24px,6vw,46px)", color: "#4f46e5" }}
                            >
                                PsyTech Labs
                            </h2>
                            <p
                                className="h-a3 mb-1 text-[14px] font-bold lg:text-[15px]"
                                style={{ color: "#1e293b" }}
                            >
                                Precision Tools for Psychology
                            </p>
                            <p
                                className="h-a3 mb-7 text-[13px] leading-relaxed lg:text-[14px]"
                                style={{ color: "#64748b" }}
                            >
                                Manufacturing High-Quality Psychology Apparatus for Education,
                                Research &amp; Professional Use.
                            </p>
                            <div className="h-a4 flex flex-wrap items-center gap-3">
                                <Link
                                    href="/products"
                                    className="btn-exp flex items-center gap-2 rounded-xl px-6 py-2.5 text-[13px] font-bold text-white transition-colors lg:px-7 lg:py-3 lg:text-[14px]"
                                    style={{
                                        backgroundColor: "#4f46e5",
                                        boxShadow: "0 4px 18px rgba(79,70,229,0.35)",
                                    }}
                                >
                                    Explore Products
                                    <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/contact"
                                    className="btn-con rounded-xl px-6 py-2.5 text-[13px] font-medium transition-colors lg:px-7 lg:py-3 lg:text-[14px]"
                                    style={{
                                        border: "1.5px solid #cbd5e1",
                                        backgroundColor: "white",
                                        color: "#334155",
                                    }}
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="h-ar relative" style={{ height: "460px" }}>
                        <div className="absolute inset-0">
                            <Image
                                src="/bg-image.png"
                                alt="Psychology Lab Equipment"
                                fill
                                className="object-cover object-center"
                                priority
                                sizes="50vw"
                            />
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "linear-gradient(to right, #f0f4ff 0%, rgba(240,244,255,0.15) 30%, transparent 60%)",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS BAR */}
            <div
                className="w-full"
                style={{ backgroundColor: "#0f172a", borderTop: "1px solid #1e293b" }}
            >
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        {stats.map((s, i) => (
                            <div
                                key={s.label}
                                className="flex items-center justify-center gap-3 px-3 py-5 lg:gap-4 lg:px-4 lg:py-6"
                                style={{
                                    borderRight: i % 2 === 0 ? "1px solid #1e293b" : "none",
                                    borderBottom: i < 2 ? "1px solid #1e293b" : "none",
                                }}
                            >
                                <span style={{ fontSize: "22px" }}>{s.icon}</span>
                                <div>
                                    <p className="text-[20px] font-extrabold leading-none text-white lg:text-[24px]">
                                        {s.num}
                                    </p>
                                    <p
                                        className="mt-0.5 text-[10px] lg:text-[12px]"
                                        style={{ color: "#64748b" }}
                                    >
                                        {s.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}