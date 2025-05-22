
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VisualFeaturesSection from "@/components/VisualFeaturesSection";
import MarketplaceLogosSection from "@/components/MarketplaceLogosSection";
import VisualCTASection from "@/components/VisualCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main>
        <HeroSection />
        <MarketplaceLogosSection />
        <VisualFeaturesSection />
        <VisualCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
