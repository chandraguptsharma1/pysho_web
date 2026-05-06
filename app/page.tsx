import HomeAbout from "./components/home/HomeAbout";
import HomeAudience from "./components/home/HomeAudience";
import HomeBanner from "./components/home/HomeBanner";
import HomeCommitment from "./components/home/HomeCommitment";
import HomeCTA from "./components/home/HomeCTA";
import HomeHero from "./components/home/HomeHero";
import HomeStats from "./components/home/HomeStats";
import HomeStrengths from "./components/home/HomeStrengths";
import ProductSlider from "./sections/productSlider";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <HomeHero />
      <HomeStats />
      <HomeAbout />
      <ProductSlider />
      <HomeCommitment />
      <HomeBanner />
      <HomeStrengths />
      <HomeAudience />
      <HomeCTA />
    </main>
  );
}
