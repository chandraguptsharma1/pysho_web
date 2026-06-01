"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchFooter, type FooterData, defaultFooterData } from "./home/services/footer.service";

export default function Footer() {
  const [footerData, setFooterData] = useState<FooterData>(defaultFooterData);

  useEffect(() => {
    fetchFooter().then(setFooterData);
  }, []);

  const {
    companyLinks,
    productLinks,
    supportLinks,
    contactInfo,
    description,
    copyright,
    socialLinks,
  } = footerData;

  return (
    <footer className="bg-[#061323] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 md:grid-cols-[1.4fr_1fr_1fr_1fr_1.35fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo-icon.png" alt="Vishwakarma PsyTech Labs" width={42} height={42} className="h-11 w-11 object-contain" />
            <div>
              <p className="text-sm font-extrabold uppercase leading-tight tracking-wide">Vishwakarma PsyTech Labs</p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
            {description}
          </p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((item) => (
              <a
                key={`${item.icon}-${item.href}`}
                href={item.href || "#"}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#1266d6]"
                aria-label={item.label || getSocialLabel(item.icon)}
                title={item.label || getSocialLabel(item.icon)}
              >
                <SocialIcon name={item.icon || item.label} />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Company" links={companyLinks} />
        <FooterColumn title="Products" links={productLinks} />
        <FooterColumn title="Support" links={supportLinks} />

        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-white">Contact Info</h3>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-400">
            <li>{contactInfo.phone}</li>
            <li>{contactInfo.email}</li>
            <li>{contactInfo.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-slate-500">
        {copyright}
      </div>
    </footer>
  );
}

function getSocialLabel(name: string) {
  const key = name.trim().toLowerCase();

  if (key === "f" || key === "fb" || key === "facebook") return "Facebook";
  if (key === "yt" || key === "youtube") return "YouTube";
  if (key === "in" || key === "ig" || key === "instagram") return "Instagram";

  return name;
}

function SocialIcon({ name }: { name: string }) {
  const key = name.trim().toLowerCase();

  if (key === "f" || key === "fb" || key === "facebook") {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14 8.5V6.8c0-.8.5-1 1.1-1H17V2.6c-.9-.1-1.8-.2-2.7-.2-2.7 0-4.5 1.6-4.5 4.6v1.5H7v3.6h2.8v9.5h3.8v-9.5h2.8l.5-3.6H14z" />
      </svg>
    );
  }

  if (key === "yt" || key === "youtube") {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.6 4.6 12 4.6 12 4.6s-5.6 0-7.5.5a3 3 0 0 0-2.1 2.1C2 9.1 2 12 2 12s0 2.9.5 4.8a3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-4.8.5-4.8s0-2.9-.5-4.8zM10 15.5v-7l6 3.5z" />
      </svg>
    );
  }

  if (key === "in" || key === "ig" || key === "instagram") {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="16.8" cy="7.2" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  return <span className="text-[11px] font-bold uppercase">{name.slice(0, 2)}</span>;
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-white">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm text-slate-400 transition hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
