import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
    title: "Contact Us | Vishwakarma PsyTech Labs",
    description: "Contact Vishwakarma PsyTech Labs for psychology lab equipment, quotations, bulk orders, and support.",
};

type ContactCardKey = "mobile" | "whatsapp" | "email" | "location";

type ContactCard = {
    key: ContactCardKey;
    label: string;
    value: string;
    href: string;
    tone: "blue" | "emerald" | "violet" | "amber";
    isActive: boolean;
};

type ContactDetails = {
    eyebrow: string;
    title: string;
    description: string;
    cards: ContactCard[];
    addressLabel: string;
    address: string;
    mapLabel: string;
    mapUrl: string;
    businessHours: string;
    form: {
        eyebrow: string;
        title: string;
        description: string;
        submitLabel: string;
        successMessage: string;
    };
    inquiryTypes: string[];
    isActive: boolean;
};

type ContactResponse = {
    contact?: Partial<ContactDetails>;
    contactDetails?: Partial<ContactDetails>;
    data?: {
        contact?: Partial<ContactDetails>;
        contactDetails?: Partial<ContactDetails>;
        data?: {
            contact?: Partial<ContactDetails>;
            contactDetails?: Partial<ContactDetails>;
        };
    };
};

const defaultContact: ContactDetails = {
    eyebrow: "Contact Us",
    title: "Need a quotation?",
    description: "Call, WhatsApp, email, or send the form. We help with product selection, bulk orders, dispatch details, and support.",
    cards: [
        { key: "mobile", label: "Mobile", value: "+91 080-4581-6232", href: "tel:08045816232", tone: "blue", isActive: true },
        { key: "whatsapp", label: "WhatsApp", value: "Chat with us", href: "https://wa.me/918045816232", tone: "emerald", isActive: true },
        { key: "email", label: "Email", value: "info@vishwakarmapsytech.com", href: "mailto:info@vishwakarmapsytech.com", tone: "violet", isActive: true },
        { key: "location", label: "Location", value: "Wardha, Maharashtra", href: "https://maps.google.com/?q=Plot+No+58+Laxminagar+Behind+Yeshwant+Mahavidyalay+Wardha+Maharashtra+442001", tone: "amber", isActive: true },
    ],
    addressLabel: "Address",
    address: "Plot No 58, Laxminagar, Behind Yeshwant Mahavidyalay, Wardha - 442001, Maharashtra, India.",
    mapLabel: "Open Google Maps",
    mapUrl: "https://maps.google.com/?q=Plot+No+58+Laxminagar+Behind+Yeshwant+Mahavidyalay+Wardha+Maharashtra+442001",
    businessHours: "Monday to Saturday, 10:00 AM to 6:00 PM",
    form: {
        eyebrow: "Send Inquiry",
        title: "Tell us what you need",
        description: "Share your product, quantity, and delivery city. Our team will respond with pricing and availability.",
        submitLabel: "Submit Inquiry",
        successMessage: "Thank you. Your inquiry is ready, and our team will contact you shortly.",
    },
    inquiryTypes: ["Product quotation", "Bulk order", "Custom requirement", "After-sales support"],
    isActive: true,
};

const toneClasses: Record<ContactCard["tone"], string> = {
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
    violet: "bg-violet-50 text-violet-700 border-violet-100",
    amber: "bg-amber-50 text-amber-700 border-amber-100",
};

function normalizeCards(cards?: Partial<ContactCard>[] | null): ContactCard[] {
    if (!Array.isArray(cards) || !cards.length) return defaultContact.cards;

    return defaultContact.cards.map((fallback) => {
        const match = cards.find((card) => card.key === fallback.key);
        return {
            ...fallback,
            ...match,
            key: fallback.key,
            tone: match?.tone || fallback.tone,
            isActive: typeof match?.isActive === "boolean" ? match.isActive : fallback.isActive,
        };
    });
}

function contactFromResponse(data: ContactResponse): ContactDetails {
    const contact =
        data.contact ||
        data.contactDetails ||
        data.data?.contact ||
        data.data?.contactDetails ||
        data.data?.data?.contact ||
        data.data?.data?.contactDetails;

    if (!contact) return defaultContact;

    return {
        ...defaultContact,
        ...contact,
        cards: normalizeCards(contact.cards),
        form: { ...defaultContact.form, ...contact.form },
        inquiryTypes: Array.isArray(contact.inquiryTypes) ? contact.inquiryTypes : defaultContact.inquiryTypes,
        isActive: typeof contact.isActive === "boolean" ? contact.isActive : true,
    };
}

async function getContactDetails(): Promise<ContactDetails> {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";

    try {
        const response = await fetch(`${baseUrl}/contact-details`, { cache: "no-store" });
        if (!response.ok) return defaultContact;

        const data = (await response.json()) as ContactResponse;
        return contactFromResponse(data);
    } catch {
        return defaultContact;
    }
}

const icons: Record<ContactCardKey, React.ReactNode> = {
    mobile: <path d="M6 3h12v18H6V3zm3 2v14h6V5H9zm2 12h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
    whatsapp: <path d="M5 19l1.2-3.6A7 7 0 1112 19a7.2 7.2 0 01-3.3-.8L5 19zm5-9.5c.2 1.8 1.7 3.3 3.5 3.7l1-1.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
    email: (
        <>
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
    ),
    location: (
        <>
            <path d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
        </>
    ),
};

export default async function ContactPage() {
    const contact = await getContactDetails();
    const contactCards = contact.cards.filter((card) => card.isActive);

    return (
        <main className="bg-slate-50 text-slate-900">
            <section className="px-4 py-4 md:px-6 lg:flex lg:min-h-[calc(100vh-164px)] lg:items-center lg:py-5">
                <div className="mx-auto grid w-full max-w-7xl gap-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_28px_80px_-60px_rgba(15,23,42,0.6)] md:p-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[3px] text-blue-700">
                            {contact.eyebrow}
                        </p>
                        <h1 className="mt-2 font-serif text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                            {contact.title}
                        </h1>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                            {contact.description}
                        </p>

                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {contactCards.map((card) => (
                                <a
                                    key={card.key}
                                    href={card.href}
                                    target={card.href.startsWith("http") ? "_blank" : undefined}
                                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="group flex min-h-[88px] items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-[0_22px_55px_-38px_rgba(15,23,42,0.45)]"
                                >
                                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border ${toneClasses[card.tone]}`}>
                                        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            {icons[card.key]}
                                        </svg>
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block text-xs font-semibold uppercase tracking-[1.5px] text-slate-400">
                                            {card.label}
                                        </span>
                                        <span className="mt-1 block break-words text-sm font-semibold text-slate-900 group-hover:text-blue-700">
                                            {card.value}
                                        </span>
                                    </span>
                                </a>
                            ))}
                        </div>

                        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                            <p className="text-xs font-semibold uppercase tracking-[2px] text-blue-600">
                                {contact.addressLabel}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                {contact.address}
                            </p>
                            {contact.mapUrl && (
                                <a
                                    href={contact.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-700"
                                >
                                    {contact.mapLabel}
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            )}
                        </div>

                        <div className="mt-3 rounded-xl border border-blue-100 bg-blue-50 p-3 text-sm leading-6 text-blue-800">
                            <strong>Business Hours:</strong> {contact.businessHours}
                        </div>
                    </div>

                    <ContactForm content={contact.form} inquiryTypes={contact.inquiryTypes} />
                </div>
            </section>
        </main>
    );
}
