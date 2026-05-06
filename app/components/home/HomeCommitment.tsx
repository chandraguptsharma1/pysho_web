import HomeLineIcon from "./HomeLineIcon";

const commitments = [
  {
    title: "45+ Years Experience",
    desc: "Decades of expertise in psychological instrumentation.",
    icon: "medal" as const,
  },
  {
    title: "Precision Instruments",
    desc: "Engineered for accuracy, consistency and reliability.",
    icon: "target" as const,
  },
  {
    title: "Trusted by Institutions",
    desc: "Preferred by universities, colleges and research centers.",
    icon: "building" as const,
  },
  {
    title: "Quality Assurance",
    desc: "Rigorous testing ensures superior quality and durability.",
    icon: "shield" as const,
  },
  {
    title: "Innovation Driven",
    desc: "Modern technology and continuous improvement.",
    icon: "bulb" as const,
  },
  {
    title: "Customized Solutions",
    desc: "Tailor-made instruments for specific requirements.",
    icon: "gear" as const,
  },
  {
    title: "Durable & Reliable",
    desc: "Built for long-term use with minimal maintenance.",
    icon: "link" as const,
  },
  {
    title: "Service Support",
    desc: "Responsive assistance for smooth laboratory operations.",
    icon: "headset" as const,
  },
];

export default function HomeCommitment() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12 lg:px-10">
      <p className="text-center text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#2166ad]">
        Why Choose Us
      </p>
      <h2 className="mt-2 text-center text-[36px] font-extrabold leading-tight text-slate-900">
        Our Commitment. Your Advantage.
      </h2>
      <div className="mt-8 grid overflow-hidden border border-slate-200 bg-white shadow-[0_8px_20px_rgba(15,23,42,0.04)] md:grid-cols-4">
        {commitments.map((item, index) => (
          <div
            key={item.title}
            className={`min-h-[148px] p-6 ${
              index % 4 !== 3 ? "md:border-r" : ""
            } ${index < 4 ? "border-b" : ""} border-slate-200`}
          >
            <HomeLineIcon type={item.icon} className="h-9 w-9 text-[#7d96bc]" />
            <h3 className="mt-4 max-w-[150px] text-[15px] font-extrabold leading-[1.25] text-slate-900">
              {item.title}
            </h3>
            <p className="mt-2 max-w-[170px] text-[12px] leading-5 text-slate-500">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
