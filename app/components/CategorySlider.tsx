"use client";

import { useRef } from "react";

const categories = [
    {
        id: 1,
        title: "Analytical Equipments",
        image: "https://i.ibb.co/BHQkr7yq/image8.jpg",
        icon: "⚗",
    },
    {
        id: 2,
        title: "Incinerator",
        image: "https://i.ibb.co/hF0WJp10/image10.png",
        icon: "⏃",
    },
    {
        id: 3,
        title: "Meteorological Equipments",
        image: "https://i.ibb.co/FLkvzdX6/image4.jpg",
        icon: "🧪",
    },
    {
        id: 4,
        title: "Microscopes",
        image: "https://i.ibb.co/ksHJD2GM/image2.jpg",
        icon: "🔬",
    },
    {
        id: 5,
        title: "Laboratory Glassware",
        image: "https://i.ibb.co/mCrXwWvj/image5.jpg",
        icon: "⚗️",
    },
    {
        id: 6,
        title: "Testing Instruments",
        image: "https://i.ibb.co/hxFfSNBN/image1.jpg",
        icon: "🧰",
    },
];

export default function CategorySlider() {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        sliderRef.current?.scrollBy({
            left: -420,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        sliderRef.current?.scrollBy({
            left: 420,
            behavior: "smooth",
        });
    };

    return (
        <section className="bg-[#f3f3f3] py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                            Product Categories
                        </p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                            Explore Our Product Range
                        </h2>
                    </div>

                    <div className="hidden gap-3 md:flex">
                        <button
                            onClick={scrollLeft}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-xl text-slate-700 shadow-sm transition hover:border-emerald-500 hover:text-emerald-600"
                        >
                            ←
                        </button>
                        <button
                            onClick={scrollRight}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-xl text-slate-700 shadow-sm transition hover:border-emerald-500 hover:text-emerald-600"
                        >
                            →
                        </button>
                    </div>
                </div>

                <div
                    ref={sliderRef}
                    className="flex gap-8 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                    {categories.map((item) => (
                        <div
                            key={item.id}
                            className="min-w-[290px] max-w-[290px] md:min-w-[340px] md:max-w-[340px]"
                        >
                            <div className="overflow-hidden bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                <div className="h-[220px] overflow-hidden md:h-[250px]">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <div className="flex items-center gap-4 px-5 py-5">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-emerald-500 text-3xl text-emerald-500">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold leading-tight text-slate-900">
                                        {item.title}
                                    </h3>
                                </div>
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
        </section>
    );
}