import Link from "next/link";

export default function LandingHero() {
    return (
        <section className="px-6 py-20 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                <div>
                    <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
                        Trusted Psychology & Wellness Platform
                    </span>

                    <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Innovative <span className="text-emerald-600">Assessments</span> &
                        Holistic Care for Better Mental Wellness
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                        We provide digital assessments, psychology programs, expert
                        consultation, and wellness-focused solutions with a premium and
                        modern experience.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            href="/services"
                            className="rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-emerald-700"
                        >
                            Explore Services
                        </Link>

                        <Link
                            href="/contact"
                            className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:border-emerald-500 hover:text-emerald-600"
                        >
                            Book Appointment
                        </Link>
                    </div>
                </div>

                <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
                    <div className="rounded-3xl bg-gradient-to-r from-emerald-500 to-purple-600 p-10 text-white">
                        <p className="text-sm font-medium uppercase tracking-wider text-white/80">
                            Featured Program
                        </p>

                        <h2 className="mt-4 text-3xl font-bold leading-tight">
                            Dyslexia Screening & Mental Wellness Support
                        </h2>

                        <p className="mt-4 text-base leading-7 text-white/90">
                            A premium experience for assessments, therapy support, training
                            programs, and institutional psychology services.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}