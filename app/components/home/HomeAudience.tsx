const serve = [
  ["Universities & Colleges", "M3 20h18M6 20V9l6-4 6 4v11M8 12h2M14 12h2"],
  ["Research Institutions", "M10 2v6L5 19h14l-5-11V2M8 2h8"],
  ["Psychology Labs", "M12 4a4 4 0 0 0-4 4v1H7a4 4 0 1 0 4 4h2a4 4 0 1 0 4-4h-1V8a4 4 0 0 0-4-4Z"],
  ["Educational Institutes", "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5Z"],
];

export default function HomeAudience() {
  return (
    <section className="mx-auto grid max-w-6xl gap-0 px-6 pb-12 md:grid-cols-2 lg:px-10">
      <div className="border border-slate-200 bg-white p-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#2166ad]">
          Who We Serve
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {serve.map(([label, path]) => (
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
          The quality and accuracy of the instruments from Vishwakarma PsyTech Labs are outstanding. Highly reliable for academics and research use.
        </blockquote>
        <p className="mt-4 text-xs font-bold text-slate-900">
          Head of Psychology Department
        </p>
        <p className="text-xs text-slate-500">Leading University</p>
      </div>
    </section>
  );
}
