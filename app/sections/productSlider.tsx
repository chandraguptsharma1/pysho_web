"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/* ─── Apna data yahan update karo ─── */
const products = [
    {
        name: "Error Counter 6 Digits",
        badge: "Electronics",
        desc: "Counts errors automatically during psychomotor tasks. Ideal for mirror drawing and maze experiments.",
        specs: [["Type", "Digital"], ["Display", "6-Digit LED"], ["Input", "Auto Sensor"], ["Use", "Research"]],
        img: "/images/error-counter.png",
    },
    {
        name: "Mirror Drawing Metal Star",
        badge: "Motor Skills",
        desc: "Traces star pattern using mirror reflection. Measures psychomotor coordination and learning curve.",
        specs: [["Material", "Metal"], ["Pattern", "6-Point Star"], ["Counter", "Built-in"], ["Use", "Psychomotor"]],
        img: "/images/mirror-drawing.png",
    },
    {
        name: "Steadiness Tester",
        badge: "Fine Motor",
        desc: "Measures hand steadiness by detecting contact with holes of varying sizes. Electronic counter included.",
        specs: [["Holes", "Multiple"], ["Counter", "Electronic"], ["Material", "Metal"], ["Use", "Fine Motor"]],
        img: "/images/steadiness-tester.png",
    },
    {
        name: "Horizontal Vertical Illusion",
        badge: "Perception",
        desc: "Demonstrates that vertical lines appear longer than equal horizontal lines — classic perceptual illusion study.",
        specs: [["Type", "Visual"], ["Illusion", "H-V Effect"], ["Material", "Acrylic"], ["Use", "Perception"]],
        img: "/images/hv-illusion.png",
    },
    {
        name: "Personality & Psychosocial",
        badge: "Assessment",
        desc: "Standardised booklet for assessing personality traits and psychosocial behaviour patterns.",
        specs: [["Format", "Booklet"], ["Language", "English"], ["Pages", "48"], ["Use", "Personality"]],
        img: "/images/personality.png",
    },
    {
        name: "Rational Thinking Apparatus",
        badge: "Cognition",
        desc: "Evaluates logical reasoning and rational decision-making abilities in students and professionals.",
        specs: [["Type", "Cognitive"], ["Mode", "Individual"], ["Output", "Score"], ["Use", "Reasoning"]],
        img: "/images/rational-thinking.png",
    },
    {
        name: "Reaction Time Meter",
        badge: "Response",
        desc: "Measures simple and choice reaction time with millisecond precision. Audio and visual stimuli.",
        specs: [["Precision", "±1 ms"], ["Stimuli", "Audio+Visual"], ["Display", "Digital"], ["Use", "Response"]],
        img: "/images/reaction-time.png",
    },
    {
        name: "Memory Drum Apparatus",
        badge: "Memory",
        desc: "Classic serial learning device. Presents stimuli at controlled intervals for memory and learning experiments.",
        specs: [["Speed", "Adjustable"], ["Stimuli", "Serial"], ["Drive", "Motor"], ["Use", "Memory"]],
        img: "/images/memory-drum.png",
    },
];

const VISIBLE = 4;
const GAP = 18;

export default function ProductSlider() {
    const [current, setCurrent] = useState(0);
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const [cardWidth, setCardWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const MAX_SLIDE = products.length - VISIBLE;
    const CARD_STEP = cardWidth + GAP;

    /* Card width — container se dynamically calculate */
    useEffect(() => {
        const calc = () => {
            if (!containerRef.current) return;
            const totalGaps = GAP * (VISIBLE - 1);
            setCardWidth(Math.floor((containerRef.current.offsetWidth - totalGaps) / VISIBLE));
        };
        calc();
        const ro = new ResizeObserver(calc);
        if (containerRef.current) ro.observe(containerRef.current);
        return () => ro.disconnect();
    }, []);

    const goTo = (idx: number) => setCurrent(Math.max(0, Math.min(idx, MAX_SLIDE)));

    const startAuto = () => {
        autoRef.current = setInterval(
            () => setCurrent((p) => (p >= MAX_SLIDE ? 0 : p + 1)),
            4000
        );
    };
    const stopAuto = () => { if (autoRef.current) clearInterval(autoRef.current); };

    useEffect(() => { startAuto(); return stopAuto; }, []);

    return (
        <section className="w-full py-14 px-6 bg-white">

            {/* ── Header ── */}
            <div className="text-center mb-10">
                <span className="inline-block bg-[#EEEDFE] text-[#3C3489] text-[11px] font-semibold tracking-widest px-4 py-1 rounded-full mb-3">
                    PRECISION INSTRUMENTS
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Psychology Apparatus</h2>
                <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
                    Psychoscan manufactures high-quality psychology lab equipment for education, research &amp;
                    professional use — trusted by 500+ institutions across India.
                </p>
            </div>

            {/* ── Slider track ── */}
            <div
                ref={containerRef}
                className="overflow-hidden w-full"
                onMouseEnter={stopAuto}
                onMouseLeave={startAuto}
            >
                {cardWidth > 0 && (
                    <div
                        className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                        style={{ gap: GAP, transform: `translateX(-${current * CARD_STEP}px)` }}
                    >
                        {products.map((p, i) => {
                            const hovered = hoveredIdx === i;
                            return (
                                <div
                                    key={i}
                                    className="relative flex-shrink-0"
                                    style={{ width: cardWidth, height: 310 }}
                                    onMouseEnter={() => setHoveredIdx(i)}
                                    onMouseLeave={() => setHoveredIdx(null)}
                                >
                                    {/* ── Base card ── */}
                                    <div
                                        className="w-full h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
                                        style={{
                                            border: hovered ? "1.5px solid #AFA9EC" : "1.5px solid #e8eaf0",
                                            boxShadow: hovered
                                                ? "0 8px 32px rgba(83,74,183,0.12)"
                                                : "0 1px 4px rgba(0,0,0,0.05)",
                                        }}
                                    >
                                        {/* Image area */}
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
                                                    className={`object-contain p-5 transition-transform duration-500 ${hovered ? "scale-110" : "scale-100"
                                                        }`}
                                                />
                                            </div>
                                        </div>

                                        {/* Name + badge */}
                                        <div className="px-4 pt-4 pb-3 text-center" style={{ height: "45%" }}>
                                            <p className="text-sm font-bold text-slate-900 leading-snug line-clamp-2 mb-2">
                                                {p.name}
                                            </p>
                                            <span className="inline-block bg-[#EEEDFE] text-[#534AB7] text-[10px] font-bold px-3 py-0.5 rounded-full">
                                                {p.badge}
                                            </span>
                                            <p
                                                className={`text-[10px] mt-2 transition-colors duration-200 ${hovered ? "text-[#534AB7]" : "text-slate-300"
                                                    }`}
                                            >
                                                · · hover to explore · ·
                                            </p>
                                        </div>
                                    </div>

                                    {/* ── Detail overlay (same card pe) ── */}
                                    <div
                                        className={`absolute inset-0 bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ${hovered
                                            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                                            : "opacity-0 translate-y-3 scale-95 pointer-events-none"
                                            }`}
                                        style={{
                                            zIndex: 50,
                                            border: "2px solid #534AB7",
                                            boxShadow: "0 20px 60px rgba(83,74,183,0.22)",
                                        }}
                                    >
                                        {/* Purple accent bar */}
                                        <div className="h-[3px] w-full flex-shrink-0 bg-[#7F77DD]" />

                                        {/* Header row */}
                                        <div className="flex items-start justify-between gap-2 px-4 py-3 border-b border-[#f0effe] flex-shrink-0">
                                            <p className="text-xs font-bold text-slate-900 leading-snug">{p.name}</p>
                                            <span className="flex-shrink-0 bg-[#EEEDFE] text-[#3C3489] text-[9px] font-bold px-2 py-0.5 rounded-full mt-0.5">
                                                {p.badge}
                                            </span>
                                        </div>

                                        {/* Body */}
                                        <div className="flex flex-col flex-1 px-4 py-3 gap-3 overflow-hidden">
                                            <p className="text-[10px] text-slate-500 leading-relaxed line-clamp-2">
                                                {p.desc}
                                            </p>

                                            {/* Spec grid — 2x2 */}
                                            <div className="grid grid-cols-2 gap-1.5 flex-1">
                                                {p.specs.map(([label, val], j) => (
                                                    <div key={j} className="bg-[#f8f7ff] rounded-lg px-3 py-2">
                                                        <p className="text-[9px] text-slate-400 mb-0.5">{label}</p>
                                                        <p className="text-[11px] font-bold text-[#3C3489]">{val}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CTA button */}
                                        <div className="px-4 pb-4 flex-shrink-0">
                                            <button className="w-full bg-[#534AB7] hover:bg-[#3C3489] active:scale-95 text-white text-[11px] font-bold py-2.5 rounded-xl transition-all duration-150 tracking-wide">
                                                Get a Quote →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* ── Navigation ── */}
            <div className="flex items-center justify-center gap-4 mt-8">
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