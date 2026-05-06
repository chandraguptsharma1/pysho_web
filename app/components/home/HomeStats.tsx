import HomeLineIcon from "./HomeLineIcon";

const stats = [
  { value: "45+", label: "Years Legacy", icon: "gear" as const },
  { value: "500+", label: "Trusted by Institutions", icon: "building" as const },
  { value: "100+", label: "Precision Instruments", icon: "target" as const },
  { value: "100%", label: "Quality Assured", icon: "shield" as const },
];

export default function HomeStats() {
  return (
    <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-6 lg:px-10">
      <div className="grid overflow-hidden rounded-md bg-white shadow-xl shadow-slate-200/80 md:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className={`flex items-center gap-4 px-7 py-6 ${index ? "border-t md:border-l md:border-t-0" : ""} border-slate-200`}
          >
            <div className="text-[#2166ad]">
              <HomeLineIcon type={item.icon} />
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[#2166ad]">{item.value}</p>
              <p className="text-sm font-semibold leading-5 text-slate-600">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
