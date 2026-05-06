"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const mobileSlides = [
  { src: "/slider/slider1.png", label: "Precision Psychology Lab Setup" },
  { src: "/slider/slider2.png", label: "Measurement and Calibration Tools" },
  { src: "/slider/slider3.png", label: "Steadiness and Motor Skill Apparatus" },
  { src: "/slider/slider4.png", label: "Reaction Time and Response Instruments" },
  { src: "/slider/slider5.png", label: "Learning and Cognitive Assessment Tools" },
  { src: "/slider/slider6.png", label: "Memory and Research Equipment" },
];

function MobileHeroSlider() {
  const [current, setCurrent] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const total = mobileSlides.length;

  const goTo = (index: number) => {
    setCurrent((index + total) % total);
    setDragOffset(0);
  };

  const stopAuto = useCallback(() => {
    if (autoRef.current) {
      clearInterval(autoRef.current);
      autoRef.current = null;
    }
  }, []);

  const startAuto = useCallback(() => {
    stopAuto();
    autoRef.current = setInterval(() => {
      setCurrent((value) => (value + 1) % total);
    }, 3200);
  }, [stopAuto, total]);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [startAuto, stopAuto]);

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
    setIsDragging(true);
    stopAuto();
  };

  const onTouchMove = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    setDragOffset(event.touches[0].clientX - touchStartX.current);
  };

  const onTouchEnd = () => {
    const width = containerRef.current?.offsetWidth ?? 320;
    const threshold = width * 0.15;

    if (dragOffset < -threshold) {
      goTo(current + 1);
    } else if (dragOffset > threshold) {
      goTo(current - 1);
    } else {
      setDragOffset(0);
    }

    touchStartX.current = null;
    setIsDragging(false);
    startAuto();
  };

  return (
    <section className="relative overflow-hidden bg-[#071323] text-white md:hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#061120]/60 via-transparent to-[#071323]" />
      <div
        ref={containerRef}
        className="relative overflow-hidden"
        style={{ touchAction: "pan-y" }}
      >
        <div
          className="flex"
          style={{
            transform: `translate3d(calc(-${current * 100}% + ${dragOffset}px), 0, 0)`,
            transition: isDragging
              ? "none"
              : "transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94)",
            willChange: "transform",
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {mobileSlides.map((slide, index) => (
            <div key={slide.src} className="relative h-[72svh] w-full flex-shrink-0">
              <Image
                src={slide.src}
                alt={slide.label}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071323] via-[#071323]/30 to-[#071323]/25" />
              <div className="absolute bottom-24 left-0 right-0 px-6">
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/products"
                    className="rounded-md bg-[#1266d6] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/30"
                  >
                    Explore Products
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-md border border-white/35 px-5 py-3 text-sm font-bold text-white"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 left-6 right-6 flex items-center justify-between">
          <div className="flex gap-2">
            {mobileSlides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => {
                  goTo(index);
                  startAuto();
                }}
                className="rounded-full transition-all"
                style={{
                  width: index === current ? 24 : 7,
                  height: 7,
                  backgroundColor:
                    index === current ? "#ffffff" : "rgba(255,255,255,0.35)",
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="rounded-full bg-black/25 px-3 py-1 text-xs font-bold backdrop-blur-sm">
            {current + 1} / {total}
          </div>
        </div>
      </div>
    </section>
  );
}

function DesktopHero() {
  return (
    <section className="relative hidden overflow-hidden bg-[#071323] text-white md:block">
      <div className="absolute inset-0">
        <Image
          src="/hero-desktop-reference.png"
          alt="Psychology laboratory instruments"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#04101f]/92 via-[#06162b]/78 to-[#06162b]/10" />
      </div>

      <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-16 lg:px-10">
        <div className="max-w-[520px]">
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-normal md:text-5xl">
            Engineering Precision for{" "}
            <span className="text-[#4b8dff]">Psychological Science</span>
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-slate-200">
            Over 45 years of excellence in manufacturing high-performance psychology apparatus for education and research.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-md bg-[#1266d6] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition hover:bg-[#0f58bb]"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/35 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomeHero() {
  return (
    <>
      <MobileHeroSlider />
      <DesktopHero />
    </>
  );
}
