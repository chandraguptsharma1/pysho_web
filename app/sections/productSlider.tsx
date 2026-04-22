"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const products = [
    {
        name: "Error Counter 6 Digits",
        badge: "Electronics",
        price: "₹4,500",
        img: "/product/Error_Counter_6_Digits.png",
        specs: [
            ["Shape", "Rectangle"],
            ["Material", "Metal"],
            ["Display", "6-Digit LED"],
            ["Condition", "New"],
            ["Use", "Research"],
            ["Warranty", "1 Year"],
        ],
    },
    {
        name: "Mirror Drawing Metal Star",
        badge: "Motor Skills",
        price: "₹3,800",
        img: "/product/Mirror_Drawing_Metal_Star_Electronics.png",
        specs: [
            ["Shape", "Star"],
            ["Material", "Metal"],
            ["Pattern", "6-Point"],
            ["Condition", "New"],
            ["Use", "Psychomotor"],
            ["Warranty", "1 Year"],
        ],
    },
    {
        name: "Steadiness Tester",
        badge: "Fine Motor",
        price: "₹5,200",
        img: "/product/Steadiness_Tester.png",
        specs: [
            ["Shape", "Rectangle"],
            ["Material", "Metal"],
            ["Holes", "Multiple"],
            ["Condition", "New"],
            ["Use", "Fine Motor"],
            ["Warranty", "1 Year"],
        ],
    },
    {
        name: "Horizontal Vertical Illusion",
        badge: "Perception",
        price: "₹2,100",
        img: "/product/Horizontal_Vertical_Illusion.png",
        specs: [
            ["Type", "Visual"],
            ["Material", "Acrylic"],
            ["Illusion", "H-V Effect"],
            ["Condition", "New"],
            ["Use", "Perception"],
            ["Warranty", "1 Year"],
        ],
    },
    {
        name: "Personality & Psychosocial",
        badge: "Assessment",
        price: "₹1,800",
        img: "/product/Self_Concept_Scale.png",
        specs: [
            ["Format", "Booklet"],
            ["Language", "English"],
            ["Pages", "48"],
            ["Condition", "New"],
            ["Use", "Personality"],
            ["Warranty", "6 Months"],
        ],
    },
    {
        name: "Rational Learning Apparatus",
        badge: "Cognition",
        price: "₹7,000",
        img: "/product/Rational_Learning_Apparatus.png",
        specs: [
            ["Shape", "Rectangle"],
            ["Material", "Metal"],
            ["Color", "Black"],
            ["Application", "Lab"],
            ["MOQ", "1 Unit"],
            ["Warranty", "1 Year"],
        ],
    },
    {
        name: "Reaction Time Meter",
        badge: "Response",
        price: "₹6,500",
        img: "/product/Bolt_Head_Maze_with_Error_Counter.png",
        specs: [
            ["Shape", "Rectangle"],
            ["Material", "Metal"],
            ["Precision", "±1 ms"],
            ["Stimuli", "Audio+Visual"],
            ["Display", "Digital"],
            ["Warranty", "1 Year"],
        ],
    },
    {
        name: "Memory Drum Apparatus",
        badge: "Memory",
        price: "₹8,200",
        img: "/product/Personality_and_Psychosocial_Behaviour.png",
        specs: [
            ["Shape", "Drum"],
            ["Material", "Metal"],
            ["Speed", "Adjustable"],
            ["Drive", "Motor"],
            ["Application", "Lab"],
            ["Warranty", "1 Year"],
        ],
    },
];

const GAP = 18;

function useVisibleCount() {
    const [visible, setVisible] = useState(4);
    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            if (w < 480) setVisible(1);
            else if (w < 768) setVisible(2);
            else if (w < 1024) setVisible(3);
            else setVisible(4);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);
    return visible;
}

/* ── 3D tilt hook ── */
function useTilt(ref: React.RefObject<HTMLDivElement>, active: boolean) {
    const frameRef = useRef<number>(0);
    const mx = useRef(0);
    const my = useRef(0);
    const tx = useRef(0);
    const ty = useRef(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const onMove = (e: MouseEvent) => {
            const r = el.getBoundingClientRect();
            mx.current = ((e.clientX - r.left) / r.width - 0.5) * 2;
            my.current = ((e.clientY - r.top) / r.height - 0.5) * 2;
        };

        const onLeave = () => {
            mx.current = 0;
            my.current = 0;
        };

        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);
        return () => {
            el.removeEventListener("mousemove", onMove);
            el.removeEventListener("mouseleave", onLeave);
        };
    }, [ref]);

    useEffect(() => {
        const MAX = active ? 14 : 0;
        const tick = () => {
            tx.current += (mx.current - tx.current) * 0.1;
            ty.current += (my.current - ty.current) * 0.1;
            if (ref.current) {
                ref.current.style.transform = `perspective(800px) rotateY(${tx.current * MAX}deg) rotateX(${-ty.current * MAX}deg) scale3d(${active ? 1.03 : 1},${active ? 1.03 : 1},1)`;
            }
            frameRef.current = requestAnimationFrame(tick);
        };
        frameRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frameRef.current);
    }, [active, ref]);
}

function ProductCard({
    p,
    width,
    isMobile,
}: {
    p: (typeof products)[0];
    width: number;
    isMobile: boolean;
}) {
    const [hovered, setHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    useTilt(cardRef, hovered);

    const show = isMobile ? hovered : hovered;

    return (
        <div
            ref={cardRef}
            className="relative flex-shrink-0 cursor-pointer"
            style={{ width, height: 310, willChange: "transform" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => isMobile && setHovered((v) => !v)}
        >
            {/* ── Base card ── */}
            <div
                className="w-full h-full bg-white rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                    border: show ? "1.5px solid #AFA9EC" : "1.5px solid #e8eaf0",
                    boxShadow: show
                        ? "0 8px 32px rgba(83,74,183,0.13)"
                        : "0 1px 4px rgba(0,0,0,0.05)",
                }}
            >
                {/* Image */}
                <div
                    className="flex items-center justify-center overflow-hidden"
                    style={{
                        height: "55%",
                        background: "linear-gradient(145deg,#EEEDFE,#f5f4ff)",
                    }}
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={p.img}
                            alt={p.name}
                            fill
                            className={`object-contain p-5 transition-transform duration-500 ${show ? "scale-110" : "scale-100"}`}
                        />
                    </div>
                </div>

                {/* Name + badge */}
                <div className="px-4 pt-3 pb-2 text-center" style={{ height: "45%" }}>
                    <p className="text-sm font-bold text-slate-900 leading-snug line-clamp-2 mb-1">
                        {p.name}
                    </p>
                    <span className="inline-block bg-[#EEEDFE] text-[#534AB7] text-[10px] font-bold px-3 py-0.5 rounded-full">
                        {p.badge}
                    </span>
                    <p className="text-xs font-bold text-[#3C3489] mt-1">{p.price}</p>
                    <p
                        className={`text-[10px] mt-1 transition-colors duration-200 ${show ? "text-[#534AB7]" : "text-slate-300"}`}
                    >
                        {isMobile ? "· tap to explore ·" : "· hover to explore ·"}
                    </p>
                </div>
            </div>

            {/* ── Detail overlay — slides up from bottom, overlaps front card ── */}
            <div
                className="absolute rounded-2xl flex flex-col overflow-hidden"
                style={{
                    zIndex: 50,
                    left: "8%",
                    width: "84%",
                    bottom: 0,
                    height: "54%",
                    border: "2px solid #534AB7",
                    boxShadow: "0 -8px 32px rgba(83,74,183,0.18)",
                    background: "#fff",
                    transition:
                        "transform 0.42s cubic-bezier(0.34,1.4,0.64,1), opacity 0.3s ease",
                    transform: show ? "translateY(0%)" : "translateY(108%)",
                    opacity: show ? 1 : 0,
                    pointerEvents: show ? "auto" : "none",
                }}
            >
                {/* Purple accent top bar */}
                <div className="h-[3px] w-full flex-shrink-0 bg-[#7F77DD]" />

                {/* Header */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-[#f0effe] flex-shrink-0">
                    <p className="text-[10px] font-bold text-slate-800 leading-snug truncate pr-2">
                        {p.name}
                    </p>
                    <span className="flex-shrink-0 bg-[#EEEDFE] text-[#3C3489] text-[9px] font-bold px-2 py-0.5 rounded-full">
                        {p.badge}
                    </span>
                </div>

                {/* Spec grid — 3 rows × 2 cols */}
                <div className="grid grid-cols-2 gap-1 px-2 py-2 flex-1 overflow-hidden">
                    {p.specs.map(([label, val], j) => (
                        <div key={j} className="bg-[#f8f7ff] rounded-lg px-2 py-1.5">
                            <p className="text-[8px] text-slate-400 mb-0.5 leading-none">
                                {label}
                            </p>
                            <p className="text-[10px] font-bold text-[#3C3489] leading-snug">
                                {val}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="px-2 pb-2 flex-shrink-0">
                    <button className="w-full bg-[#534AB7] hover:bg-[#3C3489] active:scale-95 text-white text-[10px] font-bold py-2 rounded-xl transition-all duration-150 tracking-wide">
                        Get a Quote →
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function ProductSlider() {
    const [current, setCurrent] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const touchStartX = useRef<number | null>(null);

    const visibleCount = useVisibleCount();
    const isMobile = visibleCount === 1;
    const MAX_SLIDE = Math.max(0, products.length - visibleCount);
    const CARD_STEP = cardWidth + GAP;

    useEffect(() => {
        const calc = () => {
            if (!containerRef.current) return;
            const totalGaps = GAP * (visibleCount - 1);
            setCardWidth(
                Math.floor((containerRef.current.offsetWidth - totalGaps) / visibleCount)
            );
        };
        calc();
        const ro = new ResizeObserver(calc);
        if (containerRef.current) ro.observe(containerRef.current);
        return () => ro.disconnect();
    }, [visibleCount]);

    useEffect(() => {
        setCurrent((c) => Math.min(c, MAX_SLIDE));
    }, [MAX_SLIDE]);

    const goTo = useCallback(
        (idx: number) => setCurrent(Math.max(0, Math.min(idx, MAX_SLIDE))),
        [MAX_SLIDE]
    );

    const startAuto = useCallback(() => {
        if (autoRef.current) clearInterval(autoRef.current);
        autoRef.current = setInterval(
            () => setCurrent((p) => (p >= MAX_SLIDE ? 0 : p + 1)),
            4000
        );
    }, [MAX_SLIDE]);

    const stopAuto = useCallback(() => {
        if (autoRef.current) clearInterval(autoRef.current);
    }, []);

    useEffect(() => {
        startAuto();
        return stopAuto;
    }, [startAuto, stopAuto]);

    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        stopAuto();
    };
    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const delta = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 40) goTo(delta > 0 ? current + 1 : current - 1);
        touchStartX.current = null;
        startAuto();
    };

    return (
        <section className="w-full py-14 px-4 sm:px-6 bg-white">
            {/* Header */}
            <div className="text-center mb-10">
                <span className="inline-block bg-[#EEEDFE] text-[#3C3489] text-[11px] font-semibold tracking-widest px-4 py-1 rounded-full mb-3">
                    PRECISION INSTRUMENTS
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                    Psychology Apparatus
                </h2>
                <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
                    Psychoscan manufactures high-quality psychology lab equipment for
                    education, research &amp; professional use — trusted by 500+
                    institutions across India.
                </p>
            </div>

            {/* Slider */}
            <div
                ref={containerRef}
                className="overflow-visible w-full"
                onMouseEnter={stopAuto}
                onMouseLeave={startAuto}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                {cardWidth > 0 && (
                    <div
                        className="flex"
                        style={{
                            gap: GAP,
                            transform: `translateX(-${current * CARD_STEP}px)`,
                            transition: "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
                            paddingBottom: "2px",
                        }}
                    >
                        {products.map((p, i) => (
                            <ProductCard
                                key={i}
                                p={p}
                                width={cardWidth}
                                isMobile={isMobile}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-10">
                <button
                    onClick={() => goTo(current - 1)}
                    className="w-10 h-10 rounded-full bg-white border border-slate-200 text-[#534AB7] flex items-center justify-center hover:bg-[#534AB7] hover:border-[#534AB7] hover:text-white transition-all duration-200 font-bold text-base"
                >
                    ←
                </button>

                <div className="flex gap-1.5 items-center">
                    {Array.from({ length: MAX_SLIDE + 1 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className="h-1.5 rounded-full transition-all duration-300"
                            style={{
                                width: i === current ? 22 : 6,
                                background: i === current ? "#534AB7" : "#DDD",
                                borderRadius: i === current ? 3 : "50%",
                            }}
                        />
                    ))}
                </div>

                <button
                    onClick={() => goTo(current + 1)}
                    className="w-10 h-10 rounded-full bg-white border border-slate-200 text-[#534AB7] flex items-center justify-center hover:bg-[#534AB7] hover:border-[#534AB7] hover:text-white transition-all duration-200 font-bold text-base"
                >
                    →
                </button>
            </div>
        </section>
    );
}