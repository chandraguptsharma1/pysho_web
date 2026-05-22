import Link from "next/link";
import { homeCTAContent } from "./services/homeCTA.service";

export default function HomeCTA() {
  return (
    <section className="bg-[#0754bd] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-7 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <h2 className="text-2xl font-extrabold">{homeCTAContent.title}</h2>
          <p className="mt-1 text-sm text-blue-100">
            {homeCTAContent.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href={homeCTAContent.primaryHref}
            className="rounded-md bg-white px-6 py-3 text-sm font-bold text-[#0754bd]"
          >
            {homeCTAContent.primaryText}
          </Link>
          <Link
            href={homeCTAContent.secondaryHref}
            className="rounded-md bg-[#1784ff] px-6 py-3 text-sm font-bold text-white"
          >
            {homeCTAContent.secondaryText}
          </Link>
        </div>
      </div>
    </section>
  );
}
