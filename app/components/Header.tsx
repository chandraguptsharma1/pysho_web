"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Research & Solutions", href: "/why-us" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#061323] text-white shadow-lg shadow-slate-950/30">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-icon.png" alt="Vishwakarma PsyTech Labs" width={44} height={44} priority className="h-11 w-11 object-contain" />
          <div>
            <p className="text-[16px] font-extrabold uppercase leading-none tracking-wide">Vishwakarma</p>
            <p className="mt-1 text-[12px] font-bold leading-none text-slate-200">PsyTech Labs</p>
            <p className="mt-1 hidden text-[9px] font-semibold tracking-[0.18em] text-slate-400 sm:block">Precision. Reliability. Excellence.</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="relative text-sm font-semibold text-slate-200 transition hover:text-[#4b8dff]">
              {item.label}
              {item.href === "/" && <span className="absolute -bottom-4 left-0 h-0.5 w-full rounded-full bg-[#4b8dff]" />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden rounded-md bg-[#1266d6] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition hover:bg-[#0f58bb] sm:inline-flex">
            Get Quote
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-[#071323] px-5 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="mt-2 rounded-md bg-[#1266d6] px-4 py-3 text-center text-sm font-bold text-white">
              Get Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
