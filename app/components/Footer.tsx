import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Mission", href: "/about" },
  { label: "Careers", href: "/contact" },
  { label: "Blog", href: "/about" },
];

const productLinks = [
  { label: "All Products", href: "/products" },
  { label: "Categories", href: "/products" },
  { label: "New Arrivals", href: "/products" },
  { label: "Custom Solutions", href: "/contact" },
];

const supportLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "Enquiry", href: "/contact" },
  { label: "Downloads", href: "/products" },
  { label: "FAQ", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#061323] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 md:grid-cols-[1.4fr_1fr_1fr_1fr_1.35fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo-icon.png" alt="Vishwakarma PsyTech Labs" width={42} height={42} className="h-11 w-11 object-contain" />
            <div>
              <p className="text-sm font-extrabold uppercase leading-none tracking-wide">Vishwakarma</p>
              <p className="mt-1 text-xs font-bold text-slate-200">PsyTech Labs</p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
            Engineering precision instruments that empower education, enhance research, and advance science.
          </p>
          <div className="mt-5 flex gap-3">
            {["f", "in", "yt"].map((item) => (
              <span key={item} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[11px] font-bold text-white">
                {item}
              </span>
            ))}
          </div>
        </div>

        <FooterColumn title="Company" links={companyLinks} />
        <FooterColumn title="Products" links={productLinks} />
        <FooterColumn title="Support" links={supportLinks} />

        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-white">Contact Info</h3>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-400">
            <li>+91 12345 67890</li>
            <li>info@vpsytech.com</li>
            <li>Plot No. 123, Industrial Area, Pune - 411026, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-slate-500">
        © 2026 Vishwakarma PsyTech Labs. All rights reserved.
      </div>
    </footer>
  );
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
