
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full">
      {/* Main Hero */}
      <div className="pt-24 pb-16 md:pt-32 md:pb-20 px-4 bg-white">
        <div className="container-width text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-up">
            <span className="gradient-text">Homywork</span>
          </h1>
          <p className="text-2xl md:text-3xl text-homywork-gray mb-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            The AI Co-operator for Your Listings
          </p>
          <div className="flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              className="bg-homywork-purple hover:bg-homywork-purple/90 text-white"
              onClick={() =>
                (window.location.href = "https://homywork.com/PublishRegister")
              }
            >
              Start for Free <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Hero Image */}
      <div className="w-full bg-gradient-to-b from-white to-homywork-lightPurple/20 px-4 pb-16">
        <div className="container-width">
          <div className="relative rounded-xl overflow-hidden shadow-2xl animate-fade-up" 
               style={{ animationDelay: "0.3s" }}>
            <img
              src="https://i.imgur.com/i8pdkdB.png"
              alt="Homywork Dashboard"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
