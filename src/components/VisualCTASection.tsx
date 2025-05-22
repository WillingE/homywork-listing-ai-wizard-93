
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const VisualCTASection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Transform Your Listings Today
            </h2>
            <p className="text-xl text-homywork-gray mb-8">
              Join companies who are saving hours per listing and dramatically
              increasing sales with Homywork.
            </p>
            <Button
              size="lg"
              className="bg-homywork-purple hover:bg-homywork-purple/90 text-white"
              onClick={() =>
                (window.location.href = "https://homywork.com/PublishRegister")
              }
            >
              Get Started <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-lg animate-fade-up"
               style={{ animationDelay: "0.2s" }}>
            <img
              src="https://i.imgur.com/xDjkbZh.png"
              alt="Homywork in action"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualCTASection;
