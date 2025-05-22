
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Generate Product Images",
    description: "From idea to visual in seconds",
    image: "https://i.imgur.com/hV6hyQr.png",
    imagePosition: "right",
    bgColor: "bg-white",
    highlightColor: "from-homywork-purple/40 to-homywork-purple/5",
  },
  {
    title: "Optimize Your Listings",
    description: "Smart content that converts",
    image: "https://i.imgur.com/pI0YK4V.png",
    imagePosition: "left",
    bgColor: "bg-gray-50",
    highlightColor: "from-homywork-orange/40 to-homywork-orange/5",
  },
  {
    title: "Monitor Performance",
    description: "Insights at your fingertips",
    image: "https://i.imgur.com/WpXNeJN.png",
    imagePosition: "right",
    bgColor: "bg-white",
    highlightColor: "from-homywork-lightPurple/40 to-homywork-lightPurple/5",
  },
];

const VisualFeaturesSection = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeFeature, setActiveFeature] = useState(-1);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const index = featureRefs.current.findIndex(ref => ref === entry.target);
        if (entry.isIntersecting && index !== -1) {
          setActiveFeature(index);
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <section className="w-full">
      {features.map((feature, index) => (
        <div
          key={index}
          ref={el => featureRefs.current[index] = el}
          className={cn(
            "py-24 md:py-32 px-4 w-full transition-all duration-700", 
            feature.bgColor,
            activeFeature === index ? "opacity-100" : "opacity-75"
          )}
        >
          <div className="container-width">
            <div
              className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                feature.imagePosition === "right"
                  ? "lg:grid-flow-col"
                  : "lg:grid-flow-col-dense"
              )}
            >
              <div
                className={cn(
                  "space-y-6 animate-fade-up",
                  feature.imagePosition === "left" ? "lg:order-last" : ""
                )}
              >
                <h2 className="text-4xl md:text-5xl font-bold">
                  {feature.title}
                </h2>
                <p className="text-xl text-homywork-gray">
                  {feature.description}
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-homywork-purple to-homywork-orange rounded-full"></div>
              </div>

              <div
                className={cn(
                  "rounded-2xl overflow-hidden shadow-xl animate-fade-up group cursor-pointer",
                  activeFeature === index ? "transform-gpu scale-100" : "transform-gpu scale-95",
                  "transition-all duration-700 ease-in-out"
                )}
                style={{ animationDelay: "0.2s" }}
              >
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-tr",
                  feature.highlightColor,
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                )}></div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 relative z-0"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default VisualFeaturesSection;
