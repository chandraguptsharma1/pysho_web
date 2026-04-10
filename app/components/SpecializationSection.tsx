import Image from "next/image";


const specializations = [
    {
        title: "Lab Glasswares",
        icon: "⚗",
    },
    {
        title: "Pharmaceutical Laboratory Equipment",
        icon: "🧪",
    },
    {
        title: "Analytical Equipments",
        icon: "⚙",
    },
    {
        title: "Medical Equipments",
        icon: "⚕",
    },
    {
        title: "Microscope Equipments",
        icon: "🔬",
    },
    {
        title: "Meteorological Equipments",
        icon: "☁",
    },
    {
        title: "Analytical Instruments",
        icon: "🧬",
    },
    {
        title: "Laboratory Equipments",
        icon: "⚛",
    },
];

export default function SpecializationSection() {
    return (
        <section className="relative overflow-hidden py-20">
            <div className="absolute inset-0">
                <img
                    src="https://i.ibb.co/zWQ0gSGd/background.jpg"
                    alt="Laboratory background"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/65" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-5xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                        Our Services
                    </p>

                    <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        Our Specialization
                    </h2>

                    <div className="mt-4 h-1.5 w-24 rounded-full bg-emerald-500" />

                    <p className="mt-8 text-lg leading-9 text-slate-200 sm:text-xl">
                        We believe in the modern technology concepts and that’s why our
                        focus is developing world-class scientific equipment. With the
                        comprehensive testing process, our product quality grades are
                        touching the highest level of innovation and quality.
                    </p>
                </div>

                <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {specializations.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10"
                        >
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/40 bg-white/5 text-4xl text-white">
                                {item.icon}
                            </div>

                            <h3 className="mt-5 text-2xl font-bold leading-tight text-white">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}