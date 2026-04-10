import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-purple-600 text-lg font-bold text-white shadow-md">
                        P
                    </div>
                    <div>
                        <h2 className="text-xl font-extrabold tracking-tight">
                            <span className="text-emerald-600">Psycho</span>{" "}
                            <span className="text-purple-600">Scan</span>
                        </h2>
                        <p className="text-xs text-slate-500">
                            Mental Wellness & Assessments
                        </p>
                    </div>
                </div>

                <nav className="hidden items-center gap-8 lg:flex">
                    <Link href="/" className="text-sm font-medium text-slate-700 hover:text-emerald-600">
                        Home
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-emerald-600">
                        About
                    </Link>
                    <Link href="/services" className="text-sm font-medium text-slate-700 hover:text-emerald-600">
                        Services
                    </Link>
                    <Link href="/programs" className="text-sm font-medium text-slate-700 hover:text-emerald-600">
                        Programs
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-slate-700 hover:text-emerald-600">
                        Contact
                    </Link>
                </nav>

                <Link
                    href="/contact"
                    className="rounded-full bg-gradient-to-r from-emerald-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md"
                >
                    Book Appointment
                </Link>
            </div>
        </header>
    );
}