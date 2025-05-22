
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarketplaceLogosSection from "@/components/MarketplaceLogosSection";
import FeaturesSection from "@/components/FeaturesSection";
import CaseStudySection from "@/components/CaseStudySection";
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
        <CaseStudySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
