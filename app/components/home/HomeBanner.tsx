import { homeBannerContent } from "./services/homeBanner.service";

export default function HomeBanner() {
  return (
    <section className="bg-[#06264a] py-8 text-center text-white">
      <h2 className="text-3xl font-extrabold">{homeBannerContent.heading}</h2>
      <p className="mt-2 text-sm font-semibold text-blue-100">
        {homeBannerContent.description}
      </p>
    </section>
  );
}
