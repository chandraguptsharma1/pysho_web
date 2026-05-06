import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Reaction Time Apparatus",
    desc: "Measures response time and motor coordination with high accuracy.",
    image: "/product/bhatia-battery-of-intelligence.png",
  },
  {
    title: "Memory & Learning Tools",
    desc: "Specially designed tools to study memory, learning, and recall abilities.",
    image: "/product/Rational_Learning_Apparatus.png",
  },
  {
    title: "Perception Instruments",
    desc: "Advanced instruments for visual, auditory, and sensory perception studies.",
    image: "/product/McDuggle_Disc_Apparatus.png",
  },
  {
    title: "Laboratory Equipment",
    desc: "High-quality lab equipment for academic and research applications.",
    image: "/product/Steadiness_Tester.png",
  },
];

export default function HomeFeaturedProducts() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12 lg:px-10">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#2166ad]">
            Why Products
          </p>
          <h2 className="mt-2 text-2xl font-extrabold">Featured Products</h2>
        </div>
        <Link
          href="/products"
          className="rounded-md border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-[#0a3567] transition hover:border-[#0a3567]"
        >
          View All Products
        </Link>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm"
          >
            <div className="relative h-44 bg-slate-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain p-4"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
            <div className="p-5">
              <h3 className="text-sm font-extrabold">{item.title}</h3>
              <p className="mt-2 min-h-16 text-xs leading-6 text-slate-500">
                {item.desc}
              </p>
              <Link
                href="/products"
                className="mt-4 inline-flex text-xs font-extrabold text-[#1266d6]"
              >
                View Details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
