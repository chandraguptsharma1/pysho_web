import Link from "next/link";

export default function CTABand() {
    return (
        <section className="bg-blue-700 py-14 text-center">
            <div className="mx-auto max-w-2xl px-6">
                <h2 className="mb-3 text-[28px] font-bold text-white">
                    Ready to Equip Your Psychology Lab?
                </h2>
                <p className="mb-8 text-[15px] leading-relaxed text-blue-200">
                    Get a quote today — bulk orders, custom dimensions, and GST invoicing available for all institutions.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link
                        href="/contact"
                        className="rounded-xl bg-white px-8 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
                    >
                        Send Inquiry Now
                    </Link>

                    <a href="tel:08045816232"
                        className="rounded-xl border-2 border-white/30 px-8 py-3 text-sm font-medium text-white transition hover:border-white/60"
                    >
                        Call: 080-4581-6232
                    </a>
                </div>
                <p className="mt-6 text-[12px] text-blue-300">
                    GST Registered · TradeIndia Trusted Seller · PAN India Delivery · After-Sales Support
                </p>
            </div>
        </section >
    );
}