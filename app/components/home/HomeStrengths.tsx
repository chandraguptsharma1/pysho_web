import Image from "next/image";

const strengths = [
  "Engineering excellence in every product",
  "Deep understanding of psychological research needs",
  "High accuracy and consistent performance",
  "Scalable manufacturing capabilities",
  "Continuous innovation and improvement",
];

export default function HomeStrengths() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-2 lg:px-10">
      <div>
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#2166ad]">
          Our Strengths
        </p>
        <ul className="mt-5 space-y-3 text-sm text-slate-600">
          {strengths.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 flex-shrink-0 text-[#2166ad]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m5 12 5 5L20 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative min-h-[210px] overflow-hidden rounded-md">
        <Image
          src="/strengths-blueprint.png"
          alt="Precision measurement tools"
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
    </section>
  );
}
