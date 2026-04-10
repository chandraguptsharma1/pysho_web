import Link from "next/link";

const infoLinks = [
    "About Us",
    "Events",
    "Distribution Partnership",
    "Shipping & Return Policy",
    "Privacy Policy",
    "Terms & Conditions",
];

const serviceLinks = [
    "Trainings",
    "Testimonials",
    "Publish With Us",
    "Journals",
    "Careers",
    "Returns",
];

export default function Footer() {
    return (
        <footer className="overflow-x-hidden bg-[#eaf4f4] pt-16 text-slate-700">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
                    <div className="min-w-0">
                        <h3 className="text-xl font-bold uppercase tracking-wide text-slate-900">
                            Information
                        </h3>

                        <ul className="mt-6 space-y-3">
                            {infoLinks.map((item) => (
                                <li key={item}>
                                    <Link
                                        href="/"
                                        className="break-words text-lg text-slate-600 transition hover:text-teal-600"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="min-w-0">
                        <h3 className="text-xl font-bold uppercase tracking-wide text-slate-900">
                            Customer Service
                        </h3>

                        <ul className="mt-6 space-y-3">
                            {serviceLinks.map((item) => (
                                <li key={item}>
                                    <Link
                                        href="/"
                                        className="break-words text-lg text-slate-600 transition hover:text-teal-600"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="min-w-0">
                        <h3 className="text-xl font-bold uppercase tracking-wide text-slate-900">
                            Support
                        </h3>

                        <ul className="mt-6 space-y-3">
                            <li>
                                <Link
                                    href="/contact"
                                    className="break-words text-lg text-slate-600 transition hover:text-teal-600"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="min-w-0">
                        <div className="mb-6">
                            <h2 className="break-words text-3xl font-extrabold tracking-tight sm:text-4xl">
                                {/* <span className="text-green-600">PRASAD</span> */}
                                <span className="text-purple-700">PSYCHO</span>
                            </h2>
                        </div>

                        <div className="space-y-2 text-lg leading-8 text-slate-600">
                            <p className="font-medium text-slate-700">PSYCHO PVT. LTD.</p>
                            <p>B-97, Sector-67, Noida, UP -</p>
                            <p>201301, INDIA</p>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            {["f", "x", "◎", "in"].map((item) => (
                                <Link
                                    key={item}
                                    href="/"
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-teal-500 text-base font-semibold text-teal-600 transition hover:bg-teal-500 hover:text-white"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-300 py-6 text-center">
                    <p className="text-base text-slate-600">
                        Copyright by Psycho Pvt Ltd @ 2024
                    </p>
                </div>
            </div>
        </footer>
    );
}