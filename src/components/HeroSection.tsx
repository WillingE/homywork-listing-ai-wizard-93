import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import TopMainImg from "@/assets/images/Top_Main_Img.png";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 bg-gradient-to-b from-white to-homywork-lightPurple/20">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="gradient-text">Homywork</span> — The AI
              Co-operator for Your Listings
            </h1>
            <p className="text-xl md:text-2xl text-homywork-gray mb-8 max-w-2xl">
              Go from idea to live SKU in under 2 minutes. Homywork handles
              images, titles, categories, and listings — so you can focus on
              growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-homywork-purple hover:bg-homywork-purple/90 text-white"
                onClick={() =>
                  (window.location.href =
                    "https://homywork.com/PublishRegister")
                }
              >
                Start for Free <ArrowRight size={18} className="ml-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-homywork-purple text-homywork-purple hover:bg-homywork-purple/10"
                onClick={() =>
                  (window.location.href = "https://calendly.com/tinshlee/30min")
                }
              >
                Book a Demo <ChevronRight size={18} className="ml-1" />
              </Button>
            </div>
          </div>
          <div
            className="relative rounded-lg overflow-hidden shadow-2xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="aspect-video bg-homywork-darkPurple rounded-lg overflow-hidden">
              <img
                src={TopMainImg}
                alt="Homywork Dashboard"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-homywork-darkPurple/40 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
