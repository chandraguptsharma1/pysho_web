const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:5000/api";

const fallbackData = {
    isActive: true,
    eyebrow: "",
    title: "Our Commitment. Your Advantage.",
    subtitle: "",
    cards: [
        { icon: "award", title: "45+ Years Experience", description: "Decades of expertise in psychological instrumentation." },
        { icon: "target", title: "Precision Instruments", description: "Engineered for accuracy, consistency and reliability." },
        { icon: "building", title: "Trusted by Institutions", description: "Preferred by universities, colleges and research centers." },
        { icon: "shield-check", title: "Quality Assurance", description: "Rigorous testing ensures superior quality and durability." },
        { icon: "lightbulb", title: "Innovation Driven", description: "Modern technology and continuous improvement." },
        { icon: "sun", title: "Customized Solutions", description: "Tailor-made instruments for specific requirements." },
        { icon: "link", title: "Durable & Reliable", description: "Built for long-term use with minimal maintenance." },
        { icon: "headphones", title: "Service Support", description: "Responsive assistance for smooth laboratory operations." },
    ],
};

export async function getHomeWhyUs() {
    try {
        const res = await fetch(`${API_BASE_URL}/home/why-us`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) return fallbackData;

        const data = await res.json();

        if (!data.success || !data.whyUs) return fallbackData;

        return data.whyUs;
    } catch (error) {
        console.error("getHomeWhyUs error:", error);
        return fallbackData;
    }
}