"use client";

import { useRef } from "react";

const products = [
    { id: 1, title: "Muller Lyer Illusion", image: "https://i.ibb.co/hxFfSNBN/image1.jpg" },
    { id: 2, title: "Tachistoscope Falling Door", image: "https://i.ibb.co/ksHJD2GM/image2.jpg" },
    { id: 3, title: "Marked Unmarked Ruler", image: "https://i.ibb.co/kkn919q/image3.png" },
    { id: 4, title: "Error Counter 6 Digits", image: "https://i.ibb.co/FLkvzdX6/image4.jpg" },
    { id: 5, title: "Mirror Drawing Metal Star Electronics", image: "https://i.ibb.co/mCrXwWvj/image5.jpg" },
    { id: 6, title: "Steadiness Tester", image: "https://i.ibb.co/sJDHjXr0/image6.jpg" },
];

export default function ProductSlider() {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        sliderRef.current?.scrollBy({ left: -320, behavior: "smooth" });
    };

    const scrollRight = () => {
        sliderRef.current?.scrollBy({ left: 320, behavior: "smooth" });
    };

    return (
        <section className="bg-white py-0">
            <div className="border-t border-slate-200">
                <div className="bg-[#dceff5] px-6 py-14">
                    <div className="mx-auto max-w-7xl text-center">
                        <h2 className="text-2xl font-semibold leading-[1.7] text-slate-700 md:text-4xl">
                            Our special products are Mirror Drawing (Metal Star) Electronics,
                            Bolt Head Maze, Muller Lyer Illusion, Steadiness Tester and
                            Seguin Form Board, etc.
                        </h2>
                    </div>
                </div>

                <div className="bg-[#fafafa] py-14">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-8 flex items-center justify-between">
                            <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
                                Special Products
                            </h3>

                            <div className="hidden gap-3 md:flex">
                                <button
                                    onClick={scrollLeft}
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-xl text-slate-700 shadow-sm transition hover:border-teal-500 hover:text-teal-600"
                                >
                                    ←
                                </button>
                                <button
                                    onClick={scrollRight}
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-xl text-slate-700 shadow-sm transition hover:border-teal-500 hover:text-teal-600"
                                >
                                    →
                                </button>
                            </div>
                        </div>

                        <div
                            ref={sliderRef}
                            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                        >
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="min-w-[250px] max-w-[250px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="flex h-[220px] items-center justify-center bg-white p-4">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="max-h-full w-auto object-contain"
                                        />
                                    </div>

                                    <div className="border-t border-slate-100 px-4 py-4">
                                        <h4 className="line-clamp-2 text-center text-lg font-semibold leading-6 text-slate-900">
                                            {product.title}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex justify-center gap-3 md:hidden">
                            <button
                                onClick={scrollLeft}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-lg text-slate-700 shadow-sm"
                            >
                                ←
                            </button>
                            <button
                                onClick={scrollRight}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-lg text-slate-700 shadow-sm"
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}