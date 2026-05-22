import HomeLineIcon from "./HomeLineIcon";
import { fetchHomeStats } from "./services/homeStats.service";

export default async function HomeStats() {
  const homeStats = await fetchHomeStats();

  return (
    <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-6 lg:px-10">
      <div className="grid overflow-hidden rounded-md bg-white shadow-xl shadow-slate-200/80 md:grid-cols-4">
        {homeStats.map((item, index) => (
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
