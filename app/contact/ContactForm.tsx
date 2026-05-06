"use client";

import { useState } from "react";

type ContactFormContent = {
    eyebrow: string;
    title: string;
    description: string;
    submitLabel: string;
    successMessage: string;
};

export default function ContactForm({ content, inquiryTypes }: { content: ContactFormContent; inquiryTypes: string[] }) {
    const [submitted, setSubmitted] = useState(false);

    return (
        <form
            className="rounded-2xl border border-slate-200 bg-white p-4"
            onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
            }}
        >
            <div className="mb-3">
                <p className="text-[11px] font-semibold uppercase tracking-[2px] text-blue-600">
                    {content.eyebrow}
                </p>
                <h2 className="mt-1 font-serif text-2xl font-semibold text-slate-950">
                    {content.title}
                </h2>
                <p className="mt-1 text-sm leading-5 text-slate-500">
                    {content.description}
                </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                    <span className="text-[11px] font-semibold uppercase tracking-[1px] text-slate-500">
                        Full Name
                    </span>
                    <input
                        required
                        name="name"
                        type="text"
                        placeholder="Your name"
                        className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                </label>

                <label className="block">
                    <span className="text-[11px] font-semibold uppercase tracking-[1px] text-slate-500">
                        Mobile Number
                    </span>
                    <input
                        required
                        name="mobile"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                </label>

                <label className="block">
                    <span className="text-[11px] font-semibold uppercase tracking-[1px] text-slate-500">
                        Email
                    </span>
                    <input
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                </label>

                <label className="block">
                    <span className="text-[11px] font-semibold uppercase tracking-[1px] text-slate-500">
                        Inquiry Type
                    </span>
                    <select
                        name="inquiryType"
                        className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    >
                        {inquiryTypes.filter(Boolean).map((type) => (
                            <option key={type}>{type}</option>
                        ))}
                    </select>
                </label>
            </div>

            <label className="mt-3 block">
                <span className="text-[11px] font-semibold uppercase tracking-[1px] text-slate-500">
                    Requirement
                </span>
                <textarea
                    required
                    name="message"
                    rows={2}
                    placeholder="Product name, quantity, institution name, delivery location..."
                    className="mt-1 min-h-[76px] w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
            </label>

            <button
                type="submit"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_32px_-18px_rgba(29,78,216,0.8)] transition hover:-translate-y-0.5 hover:bg-blue-600"
            >
                {content.submitLabel}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                        d="M5 12h14m-6-6 6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {submitted && (
                <p className="mt-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                    {content.successMessage}
                </p>
            )}
        </form>
    );
}
