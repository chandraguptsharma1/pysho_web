import Image from "next/image";
import Link from "next/link";

export default function HomeAbout() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 lg:px-10">
      <div>
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#2166ad]">
          About Us
        </p>
        <h2 className="mt-4 text-3xl font-extrabold leading-tight">
          About Vishwakarma PsyTech Labs
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          Vishwakarma PsyTech Labs stands at the intersection of precision engineering and psychological science, delivering world-class apparatus backed by more than 45 years of legacy and expertise.
        </p>
        <Link
          href="/about"
          className="mt-7 inline-flex rounded-md bg-[#0a3567] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#092b54]"
        >
          Learn More About Us
        </Link>
      </div>
      <div className="relative min-h-[260px] overflow-hidden rounded-md bg-slate-200 shadow-lg">
        <Image
          src="/about-lab.png"
          alt="Psychology laboratory"
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute right-6 top-6 text-right text-xs font-extrabold uppercase tracking-[0.14em] text-[#0a3567]">
          Precision
          <br />
          Reliability
          <br />
          Excellence
        </div>
      </div>
    </section>
  );
}
