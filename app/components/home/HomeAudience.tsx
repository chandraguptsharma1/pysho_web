import { homeAudience } from "./services/homeAudience.service";

export default function HomeAudience() {
  return (
    <section className="mx-auto grid max-w-6xl gap-0 px-6 pb-12 md:grid-cols-2 lg:px-10">
      <div className="border border-slate-200 bg-white p-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#2166ad]">
          Who We Serve
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {homeAudience.cards.map(([label, path]) => (
            <div key={label} className="text-center">
              <svg
                viewBox="0 0 24 24"
                className="mx-auto h-10 w-10 text-[#2166ad]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={path} />
              </svg>
              <p className="mt-3 text-xs font-bold text-slate-700">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-l-0 border-slate-200 bg-white p-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#2166ad]">
          What Our Clients Say
        </p>
        <blockquote className="mt-6 text-sm leading-7 text-slate-600">
          {homeAudience.testimonial.quote}
        </blockquote>
        <p className="mt-4 text-xs font-bold text-slate-900">
          {homeAudience.testimonial.author}
        </p>
        <p className="text-xs text-slate-500">{homeAudience.testimonial.role}</p>
      </div>
    </section>
  );
}
