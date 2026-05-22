"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchProductSlides, type ProductSlide } from "./services/productSlider.service";

const initialProducts: ProductSlide[] = [];

const GAP = 18;

function useVisibleCount() {
    const [visible, setVisible] = useState(4);

    useEffect(() => {
        const update = () => {
            const width = window.innerWidth;
            if (width < 480) setVisible(1);
            else if (width < 768) setVisible(2);
            else if (width < 1024) setVisible(3);
            else setVisible(4);
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    return visible;
}

const useTilt = <T extends HTMLElement>(
    ref: React.RefObject<T | null>,
    active: boolean
) => {
    useEffect(() => {
        const element = ref.current;
        if (!element || !active) return;

        const handleMove = (event: MouseEvent) => {
            const rect = element.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const rotateX = (y / rect.height - 0.5) * -10;
            const rotateY = (x / rect.width - 0.5) * 10;

            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        };

        const handleLeave = () => {
            element.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
        };

        element.addEventListener("mousemove", handleMove);
        element.addEventListener("mouseleave", handleLeave);

        return () => {
            element.removeEventListener("mousemove", handleMove);
            element.removeEventListener("mouseleave", handleLeave);
        };
    }, [ref, active]);
};

function ProductCard({
    product,
    width,
    isMobile,
}: {
    product: ProductSlide;
    width: number;
    isMobile: boolean;
}) {
    const [hovered, setHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useTilt(cardRef, hovered);

    return (
        <div
            ref={cardRef}
            className="relative flex-shrink-0 cursor-pointer"
            style={{ width, height: 320, willChange: "transform" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => isMobile && setHovered((value) => !value)}
        >
            <div
                className="h-full w-full overflow-hidden rounded-2xl bg-white transition-all duration-300"
                style={{
                    border: hovered ? "1.5px solid #AFA9EC" : "1.5px solid #e8eaf0",
                    boxShadow: hovered
                        ? "0 8px 32px rgba(83,74,183,0.13)"
                        : "0 1px 4px rgba(0,0,0,0.05)",
                }}
            >
                <div
                    className="flex items-center justify-center overflow-hidden"
                    style={{
                        height: "55%",
                        background: "linear-gradient(145deg,#EEEDFE,#f5f4ff)",
                    }}
                >
                    <div className="relative h-full w-full">
                        <Image
                            src={product.img}
                            alt={product.name}
                            fill
                            className={`object-contain p-5 transition-transform duration-500 ${hovered ? "scale-110" : "scale-100"}`}
                        />
                    </div>
                </div>

                <div className="px-4 pb-2 pt-3 text-center" style={{ height: "45%" }}>
                    <p className="mb-1 line-clamp-2 text-sm font-bold leading-snug text-slate-900">
                        {product.name}
                    </p>
                    <span className="inline-block rounded-full bg-[#EEEDFE] px-3 py-0.5 text-[10px] font-bold text-[#534AB7]">
                        {product.badge}
                    </span>
                    <p className="mt-1 text-xs font-bold text-[#3C3489]">{product.price}</p>
                    <p
                        className={`mt-1 text-[10px] transition-colors duration-200 ${hovered ? "text-[#534AB7]" : "text-slate-300"}`}
                    >
                        {isMobile ? "Tap to explore" : "Hover to explore"}
                    </p>
                </div>
            </div>

            <div
                className="absolute bottom-0 left-[8%] z-50 flex w-[84%] flex-col overflow-hidden rounded-2xl border-2 border-[#534AB7] bg-white shadow-[0_-8px_32px_rgba(83,74,183,0.18)]"
                style={{
                    height: "54%",
                    transform: hovered ? "translateY(0%)" : "translateY(108%)",
                    opacity: hovered ? 1 : 0,
                    pointerEvents: hovered ? "auto" : "none",
                    transition:
                        "transform 0.42s cubic-bezier(0.34,1.4,0.64,1), opacity 0.3s ease",
                }}
            >
                <div className="h-[3px] w-full flex-shrink-0 bg-[#7F77DD]" />

                <div className="flex flex-shrink-0 items-center justify-between border-b border-[#f0effe] px-3 py-2">
                    <p className="truncate pr-2 text-[10px] font-bold leading-snug text-slate-800">
                        {product.name}
                    </p>
                    <span className="flex-shrink-0 rounded-full bg-[#EEEDFE] px-2 py-0.5 text-[9px] font-bold text-[#3C3489]">
                        {product.badge}
                    </span>
                </div>

                <div className="grid flex-1 grid-cols-2 gap-1 overflow-hidden px-2 py-2">
                    {product.specs.map(([label, value]) => (
                        <div key={label} className="rounded-lg bg-[#f8f7ff] px-2 py-1.5">
                            <p className="mb-0.5 text-[8px] leading-none text-slate-400">
                                {label}
                            </p>
                            <p className="text-[10px] font-bold leading-snug text-[#3C3489]">
                                {value}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex-shrink-0 px-2 pb-2">
                    {product.ctaLink ? (
                        <Link
                            href={product.ctaLink}
                            className="block w-full rounded-xl bg-[#534AB7] py-2 text-center text-[10px] font-bold tracking-wide text-white transition-all duration-150 hover:bg-[#3C3489] active:scale-95"
                        >
                            {product.ctaText}
                        </Link>
                    ) : (
                        <button className="w-full rounded-xl bg-[#534AB7] py-2 text-[10px] font-bold tracking-wide text-white transition-all duration-150 hover:bg-[#3C3489] active:scale-95">
                            {product.ctaText}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

// Skeleton loader card
function SkeletonCard({ width }: { width: number }) {
    return (
        <div
            className="relative flex-shrink-0 rounded-2xl overflow-hidden"
            style={{ width, height: 320 }}
        >
            <div className="h-full w-full rounded-2xl border border-[#e8eaf0] bg-white overflow-hidden">
                <div
                    className="animate-pulse bg-[#EEEDFE]"
                    style={{ height: "55%" }}
                />
                <div className="px-4 pt-3 pb-2 space-y-2" style={{ height: "45%" }}>
                    <div className="animate-pulse bg-slate-100 rounded h-4 w-3/4 mx-auto" />
                    <div className="animate-pulse bg-[#EEEDFE] rounded-full h-4 w-1/3 mx-auto" />
                    <div className="animate-pulse bg-slate-100 rounded h-3 w-1/4 mx-auto" />
                </div>
            </div>
        </div>
    );
}

export default function ProductSlider() {
    const [current, setCurrent] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const [products, setProducts] = useState<ProductSlide[]>(initialProducts);
    const [loading, setLoading] = useState(true); // ← new
    const containerRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef<number | null>(null);

    const visibleCount = useVisibleCount();
    const isMobile = visibleCount === 1;
    const maxSlide = Math.max(0, products.length - visibleCount);
    const cardStep = cardWidth + GAP;
    const activeCurrent = Math.min(current, maxSlide);

    useEffect(() => {
        async function loadSlides() {
            try {
                setLoading(true); // ← new
                const slides = await fetchProductSlides();
                setProducts(slides);
            } catch (error) {
                console.error("Failed to load product slides:", error);
                setProducts([]);
            } finally {
                setLoading(false); // ← new
            }
        }

        loadSlides();
    }, []);

    useEffect(() => {
        const calculate = () => {
            if (!containerRef.current) return;
            const totalGaps = GAP * (visibleCount - 1);
            setCardWidth(
                Math.floor((containerRef.current.offsetWidth - totalGaps) / visibleCount)
            );
        };

        calculate();
        const observer = new ResizeObserver(calculate);
        if (containerRef.current) observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, [visibleCount, products.length]);

    const goTo = useCallback(
        (index: number) => setCurrent(Math.max(0, Math.min(index, maxSlide))),
        [maxSlide]
    );

    const onTouchStart = (event: React.TouchEvent) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const onTouchEnd = (event: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const delta = touchStartX.current - event.changedTouches[0].clientX;
        if (Math.abs(delta) > 40) {
            goTo(delta > 0 ? activeCurrent + 1 : activeCurrent - 1);
        }
        touchStartX.current = null;
    };

    return (
        <section className="w-full bg-[#f4f7fb] px-4 py-16 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-7xl rounded-[28px] border border-slate-200/80 bg-white px-4 py-10 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-6 lg:px-8 lg:py-12">
                <div className="mb-10 text-center">
                    <span className="mb-3 inline-block rounded-full bg-[#EEEDFE] px-4 py-1 text-[11px] font-semibold tracking-widest text-[#3C3489]">
                        PRECISION INSTRUMENTS
                    </span>
                    <h2 className="mb-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                        Psychology Apparatus
                    </h2>
                    <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-[15px]">
                        Psychoscan manufactures high-quality psychology lab equipment for
                        education, research and professional use, trusted by 500+
                        institutions across India.
                    </p>
                </div>

                {loading ? (
                    // Skeleton loader — same layout as real cards
                    <div
                        ref={containerRef}
                        className="w-full"
                    >
                        <div
                            className="flex"
                            style={{ gap: GAP }}
                        >
                            {Array.from({ length: visibleCount }).map((_, i) => (
                                <SkeletonCard
                                    key={i}
                                    width={cardWidth > 0 ? cardWidth : 220}
                                />
                            ))}
                        </div>
                        {/* Fake pagination dots while loading */}
                        <div className="mt-10 flex items-center justify-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-slate-100 animate-pulse" />
                            <div className="flex gap-1.5">
                                {Array.from({ length: 3 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="h-1.5 rounded-full bg-slate-200 animate-pulse"
                                        style={{ width: i === 0 ? 22 : 6 }}
                                    />
                                ))}
                            </div>
                            <div className="h-10 w-10 rounded-full bg-slate-100 animate-pulse" />
                        </div>
                    </div>
                ) : products.length > 0 ? (
                    <>
                        <div
                            ref={containerRef}
                            className="w-full overflow-hidden lg:overflow-visible"
                            style={{ touchAction: "pan-y" }}
                            onTouchStart={onTouchStart}
                            onTouchEnd={onTouchEnd}
                        >
                            {cardWidth > 0 && (
                                <div
                                    className="flex"
                                    style={{
                                        gap: GAP,
                                        transform: `translateX(-${activeCurrent * cardStep}px)`,
                                        transition: "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
                                        paddingBottom: "6px",
                                    }}
                                >
                                    {products.map((product) => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                            width={cardWidth}
                                            isMobile={isMobile}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="mt-10 flex items-center justify-center gap-4">
                            <button
                                onClick={() => goTo(activeCurrent - 1)}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#534AB7] transition-all duration-200 hover:border-[#534AB7] hover:bg-[#534AB7] hover:text-white"
                                aria-label="Previous products"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m15 18-6-6 6-6" />
                                </svg>
                            </button>

                            <div className="flex items-center gap-1.5">
                                {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goTo(index)}
                                        className="h-1.5 rounded-full transition-all duration-300"
                                        style={{
                                            width: index === activeCurrent ? 22 : 6,
                                            background: index === activeCurrent ? "#534AB7" : "#DDD",
                                            borderRadius: index === activeCurrent ? 3 : "50%",
                                        }}
                                        aria-label={`Go to product slide ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={() => goTo(activeCurrent + 1)}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#534AB7] transition-all duration-200 hover:border-[#534AB7] hover:bg-[#534AB7] hover:text-white"
                                aria-label="Next products"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-8">
                        <p className="text-slate-500">No products available at the moment.</p>
                    </div>
                )}
            </div>
        </section>
    );
}