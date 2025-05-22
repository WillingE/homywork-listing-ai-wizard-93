
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const VisualCTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-white py-24 md:py-32 px-4 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-homywork-purple/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-homywork-orange/5 blur-3xl"></div>
      </div>
      
      <div className="container-width">
        <div 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Transform Your Listings Today
            </h2>
            <p className="text-xl text-homywork-gray mb-8 max-w-md">
              Join companies who are saving hours per listing and dramatically
              increasing sales with Homywork.
            </p>
            <Button
              size="lg"
              className="bg-homywork-purple hover:bg-homywork-purple/90 text-white relative overflow-hidden group"
              onClick={() =>
                (window.location.href = "https://homywork.com/PublishRegister")
              }
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-homywork-purple to-homywork-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center">
                Get Started <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
          
          <div 
            className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <img
              src="https://i.imgur.com/xDjkbZh.png"
              alt="Homywork in action"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
            {/* Interactive overlay elements */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/40 w-full h-full absolute"></div>
              <div className="relative z-10 text-white text-center p-8">
                <h3 className="text-2xl font-bold mb-2">Ready to start?</h3>
                <p className="mb-4">Experience the power of AI-driven listings</p>
                <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualCTASection;
