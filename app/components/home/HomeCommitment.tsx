import HomeLineIcon from "./HomeLineIcon";
import { getHomeWhyUs } from "./services/Homewhyus.service";

export default async function HomeCommitment() {
  const data = await getHomeWhyUs();

  if (!data.isActive) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 pb-12 lg:px-10">
      <p className="text-center text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#2166ad]">
        {data.eyebrow}
      </p>
      <h2 className="mt-2 text-center text-[36px] font-extrabold leading-tight text-slate-900">
        {data.title}
      </h2>
      {data.subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-slate-500">
          {data.subtitle}
        </p>
      )}
      <div className="mt-8 grid overflow-hidden border border-slate-200 bg-white shadow-[0_8px_20px_rgba(15,23,42,0.04)] md:grid-cols-4">
        {data.cards.map((item, index) => (
          <div
            key={item._id || item.title}
            className={`min-h-[148px] p-6 ${index % 4 !== 3 ? "md:border-r" : ""
              } ${index < 4 ? "border-b" : ""} border-slate-200`}
          >
            <HomeLineIcon
              type={item.icon}
              className="h-9 w-9 text-[#7d96bc]"
            />
            <h3 className="mt-4 max-w-[150px] text-[15px] font-extrabold leading-[1.25] text-slate-900">
              {item.title}
            </h3>
            <p className="mt-2 max-w-[170px] text-[12px] leading-5 text-slate-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}