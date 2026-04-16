import Link from "next/link";

export default function CTABand() {
    return (
        <>
            <style>{`
                .cta-primary:hover { background-color: #1d4ed8 !important; }
                .cta-secondary:hover { border-color: #2563eb !important; }
            `}</style>
            <section className="py-14 text-center" style={{ backgroundColor: "#0f2444" }}>
                <div className="mx-auto max-w-2xl px-6">
                    <h2 className="mb-3 text-[28px] font-bold text-white">
                        Ready to Equip Your Psychology Lab?
                    </h2>
                    <p className="mb-8 text-[15px] leading-relaxed text-slate-400">
                        Get a quote today — bulk orders, custom dimensions, and GST invoicing available for all institutions.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="cta-primary rounded-xl px-8 py-3 text-sm font-bold text-white transition-colors"
                            style={{ backgroundColor: "#2563eb" }}
                        >
                            Send Inquiry Now
                        </Link>

                        <a
                            href="tel:08045816232"
                            className="cta-secondary rounded-xl px-8 py-3 text-sm font-medium text-slate-300 transition-colors"
                            style={{ border: "2px solid #1e3a5f" }}
                        >
                            Call: 080-4581-6232
                        </a>
                    </div>
                    <p className="mt-6 text-[12px] text-slate-500">
                        GST Registered · TradeIndia Trusted Seller · PAN India Delivery · After-Sales Support
                    </p>
                </div>
            </section>
        </>
    );
}