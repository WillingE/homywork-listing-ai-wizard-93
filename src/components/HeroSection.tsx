
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-white to-homywork-lightPurple/20 -z-10"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="absolute w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-homywork-purple/10 blur-3xl"
               style={{ transform: `translate(${scrollY * 0.05}px, ${-scrollY * 0.02}px)` }} />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-homywork-orange/10 blur-3xl"
               style={{ transform: `translate(${-scrollY * 0.07}px, ${scrollY * 0.04}px)` }} />
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="pt-32 pb-12 md:pt-36 md:pb-16 px-4 relative z-10">
        <div className="container-width text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-up">
            <span className="gradient-text">Homywork</span>
          </h1>
          <p className="text-2xl md:text-3xl text-homywork-gray mb-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            The AI Co-operator for Your Listings
          </p>
          <div className="flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              className="bg-homywork-purple hover:bg-homywork-purple/90 text-white scale-110 transition-all hover:scale-105"
              onClick={() =>
                (window.location.href = "https://homywork.com/PublishRegister")
              }
            >
              Start for Free <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Hero Image with dynamic hover effect - REDUCED SIZE */}
      <div className="w-full bg-gradient-to-b from-white to-homywork-lightPurple/20 px-4 pb-12 relative">
        <div className="container-width">
          <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl animate-fade-up group cursor-pointer" 
               style={{ animationDelay: "0.3s" }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-homywork-purple/30 to-homywork-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img
              src="https://i.imgur.com/i8pdkdB.png"
              alt="Homywork Dashboard"
              className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-white text-left">
              <h3 className="text-xl font-bold mb-1">Sleek Dashboard Interface</h3>
              <p className="text-sm">Manage all your marketplace listings from one central location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
