import CategorySlider from "./components/CategorySlider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingHero from "./components/LandingHero";
// import ProductSlider from "./components/ProductSlider";
import SpecializationSection from "./components/SpecializationSection";
import AboutSection from "./sections/Aboutsection";
import CTABand from "./sections/CTABand";
import PopularProducts from "./sections/PopularProducts";
import ProductShowcase from "./sections/ProductShowcase";
import ProductSlider from "./sections/productSlider";
import Testimonials from "./sections/Testimonials";
import WhoWeServe from "./sections/WhoWeServe";
import WhyChooseUs from "./sections/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <LandingHero />
      <ProductSlider />
      <AboutSection />
      {/* <WhoWeServe />
      <WhyChooseUs />
      <ProductShowcase />
      <PopularProducts />
      <Testimonials /> */}
      <CTABand />
      {/* <ProductSlider />
      <CategorySlider />
      <SpecializationSection /> */}
      <Footer />
    </main>
  );
}