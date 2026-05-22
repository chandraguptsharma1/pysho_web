export default function HomeCommitmentSkeleton() {
    return (
        <section className="mx-auto max-w-6xl px-6 pb-12 lg:px-10">
            {/* Eyebrow skeleton */}
            <div className="mx-auto h-3 w-28 animate-pulse rounded-full bg-slate-200" />

            {/* Title skeleton */}
            <div className="mx-auto mt-3 h-9 w-96 max-w-full animate-pulse rounded-lg bg-slate-200" />

            {/* Cards grid skeleton */}
            <div className="mt-8 grid overflow-hidden border border-slate-200 bg-white shadow-[0_8px_20px_rgba(15,23,42,0.04)] md:grid-cols-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className={`min-h-[148px] p-6 ${index % 4 !== 3 ? "md:border-r" : ""
                            } ${index < 4 ? "border-b" : ""} border-slate-200`}
                    >
                        {/* Icon skeleton */}
                        <div className="h-9 w-9 animate-pulse rounded-lg bg-slate-200" />
                        {/* Title skeleton */}
                        <div className="mt-4 h-4 w-24 animate-pulse rounded bg-slate-200" />
                        <div className="mt-1 h-4 w-16 animate-pulse rounded bg-slate-200" />
                        {/* Description skeleton */}
                        <div className="mt-3 h-3 w-32 animate-pulse rounded bg-slate-100" />
                        <div className="mt-1.5 h-3 w-24 animate-pulse rounded bg-slate-100" />
                    </div>
                ))}
            </div>
        </section>
    );
}