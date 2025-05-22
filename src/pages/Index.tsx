
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import MarketplaceLogosSection from "@/components/MarketplaceLogosSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ResultsSection from "@/components/ResultsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main>
        <HeroSection />
        <MarketplaceLogosSection />
        <FeaturesSection />
        <ResultsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
