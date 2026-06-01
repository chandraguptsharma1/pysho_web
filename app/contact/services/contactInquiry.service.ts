import { API_BASE_URL } from "../../lib/config";

export type ContactInquiryPayload = {
    name: string;
    mobile: string;
    email: string;
    inquiryType: string;
    message: string;
};

type ContactInquiryResponse = {
    error?: string;
    message?: string;
};

export async function createContactInquiry(payload: ContactInquiryPayload) {
    const response = await fetch(`${API_BASE_URL}/contact-inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    const data = (await response.json().catch(() => null)) as ContactInquiryResponse | null;

    if (!response.ok) {
        throw new Error(data?.error || data?.message || "Inquiry submit nahi hui");
    }

    return data;
}
