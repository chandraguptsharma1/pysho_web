"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useTransform, useSpring } from "framer-motion";

const popularProducts = [
    {
        name: "Rational Learning Apparatus",
        badge: "Cognition",
        price: "₹7,000",
        tag: "Bestseller",
        img: "/product/Rational_Learning_Apparatus.png",
        specs: [["Material", "Metal"], ["Color", "Black"], ["Application", "Lab"], ["Warranty", "1 Year"]],
    },
    {
        name: "Muller Lyer Illusion",
        badge: "Perception",
        price: "₹2,800",
        tag: "Top Rated",
        img: "/product/Muller_Lyer_Illusion.png",
        specs: [["Type", "Visual"], ["Material", "Acrylic"], ["Illusion", "M-L Effect"], ["Warranty", "1 Year"]],
    },
    {
        name: "Pass Along Test",
        badge: "Intelligence",
        price: "₹5,500",
        tag: "Popular",
        img: "/product/Pass_Along_Test.png",
        specs: [["Type", "Performance"], ["Material", "Wood"], ["Condition", "New"], ["Warranty", "1 Year"]],
    },
    {
        name: "Bhatia Battery of Intelligence",
        badge: "Assessment",
        price: "₹6,200",
        tag: "Top Rated",
        img: "/product/bhatia-battery-of-intelligence.png",
        specs: [["Type", "Battery"], ["Material", "Mixed"], ["Tests", "5 Sub-tests"], ["Warranty", "1 Year"]],
    },
    {
        name: "Wooden Screen",
        badge: "Apparatus",
        price: "₹3,400",
        tag: "Popular",
        img: "/product/Wooden_Screen.png",
        specs: [["Material", "Wood"], ["Color", "Natural"], ["Condition", "New"], ["Warranty", "1 Year"]],
    },
    {
        name: "Manasshatrachi Multatwe Marathi",
        badge: "Book",
        price: "₹450",
        tag: "New",
        img: "/product/Manasshatrachi_Multatwe_Marathi.png",
        specs: [["Type", "Book"], ["Language", "Marathi"], ["Condition", "New"], ["Warranty", "N/A"]],
    },
];

const tagColors: Record<string, { bg: string; text: string }> = {
    Bestseller: { bg: "#FFF3E0", text: "#E65100" },
    "Top Rated": { bg: "#E8F5E9", text: "#2E7D32" },
    Popular: { bg: "#EDE7F6", text: "#4527A0" },
    New: { bg: "#E3F2FD", text: "#1565C0" },
};

/* ── 3D Tilt Card ── */
function TiltCard({
    p,
    index,
}: {
    p: (typeof popularProducts)[0];
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const cardInView = useInView(ref, { once: true, margin: "-60px" });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
        stiffness: 300, damping: 30,
    });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
        stiffness: 300, damping: 30,
    });
    const glowX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
    const glowY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const tagStyle = tagColors[p.tag] ?? { bg: "#F3F4F6", text: "#374151" };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={cardInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
            }}
            style={{ perspective: 800 }}
        >
            <motion.div
                className="relative rounded-2xl bg-white cursor-pointer group"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
                    border: "1px solid #f0f0f4",
                }}
                whileHover={{ boxShadow: "0 20px 60px rgba(83,74,183,0.18)", borderColor: "#AFA9EC" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                transition={{ duration: 0.2 }}
            >
                {/* Shine overlay */}
                <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none z-10 opacity-0 group-hover:opacity-100"
                    style={{
                        background: useTransform(
                            [glowX, glowY],
                            ([x, y]) =>
                                `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.25) 0%, transparent 60%)`
                        ),
                        transition: "opacity 0.2s",
                    }}
                />

                {/* Tag */}
                <div
                    className="absolute top-3 left-3 z-20 text-[10px] font-bold px-2.5 py-1 rounded-full"
                    style={{ background: tagStyle.bg, color: tagStyle.text }}
                >
                    {p.tag}
                </div>

                {/* Image */}
                <div
                    className="relative rounded-t-2xl overflow-hidden"
                    style={{
                        height: 200,
                        background: "linear-gradient(145deg, #EEEDFE 0%, #f5f4ff 100%)",
                    }}
                >
                    <motion.div
                        className="relative w-full h-full"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Image
                            src={p.img}
                            alt={p.name}
                            fill
                            className="object-contain p-6"
                        />
                    </motion.div>
                </div>

                {/* Body */}
                <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-1">
                        <p className="text-sm font-bold text-slate-900 leading-snug line-clamp-2 flex-1">
                            {p.name}
                        </p>
                        <span className="flex-shrink-0 bg-[#EEEDFE] text-[#534AB7] text-[9px] font-bold px-2 py-0.5 rounded-full mt-0.5">
                            {p.badge}
                        </span>
                    </div>
                    <p className="text-base font-bold text-[#3C3489] mb-3">{p.price}</p>

                    {/* Specs — revealed on hover */}
                    <motion.div
                        className="grid grid-cols-2 gap-1.5 overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        whileHover={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {p.specs.map(([label, val], j) => (
                            <div key={j} className="bg-[#f8f7ff] rounded-lg px-2.5 py-1.5">
                                <p className="text-[9px] text-slate-400 mb-0.5">{label}</p>
                                <p className="text-[11px] font-bold text-[#3C3489]">{val}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.button
                        className="w-full mt-3 bg-[#534AB7] text-white text-[11px] font-bold py-2.5 rounded-xl tracking-wide relative overflow-hidden"
                        whileHover={{ backgroundColor: "#3C3489" }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <motion.span
                            className="absolute inset-0 bg-white/10"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.4 }}
                        />
                        Send Inquiry →
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function MostPopular() {
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true });

    return (
        <section className="w-full py-16 px-4 sm:px-6 bg-white">
            {/* Header */}
            <motion.div
                ref={headerRef}
                className="mb-10"
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="flex items-center gap-3 mb-1">
                    {/* Animated line */}
                    <motion.div
                        className="h-[2px] bg-[#534AB7] rounded-full"
                        initial={{ width: 0 }}
                        animate={headerInView ? { width: 40 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                    <span className="text-[11px] font-semibold tracking-widest text-[#534AB7] uppercase">
                        Most Popular Products
                    </span>
                </div>
                <div className="flex items-end justify-between flex-wrap gap-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                        Trusted by 500+ Institutions
                    </h2>
                    <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                        Our highest-rated psychology apparatus — loved by researchers,
                        educators &amp; clinicians across India.
                    </p>
                </div>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {popularProducts.map((p, i) => (
                    <TiltCard key={i} p={p} index={i} />
                ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
                className="flex justify-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <motion.button
                    className="group flex items-center gap-2 border-2 border-[#534AB7] text-[#534AB7] font-bold text-sm px-7 py-3 rounded-full relative overflow-hidden"
                    whileHover={{ color: "#fff" }}
                    whileTap={{ scale: 0.97 }}
                >
                    <motion.div
                        className="absolute inset-0 bg-[#534AB7] rounded-full"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                    <span className="relative z-10">View All Products</span>
                    <motion.span
                        className="relative z-10"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                    >
                        →
                    </motion.span>
                </motion.button>
            </motion.div>
        </section>
    );
}