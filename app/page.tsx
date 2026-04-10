import CategorySlider from "./components/CategorySlider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingHero from "./components/LandingHero";
import ProductSlider from "./components/ProductSlider";
import SpecializationSection from "./components/SpecializationSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <LandingHero />
      <ProductSlider />
      <CategorySlider />
      <SpecializationSection />
      <Footer />
    </main>
  );
}