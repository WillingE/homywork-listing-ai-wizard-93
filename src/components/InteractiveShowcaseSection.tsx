
import { useState, useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const showcaseItems = [
  {
    title: "AI-Generated Images",
    description: "Create stunning product visuals with just a prompt",
    image: "https://i.imgur.com/hV6hyQr.png",
    background: "bg-gradient-to-br from-homywork-purple/20 to-white"
  },
  {
    title: "Smart Listing Optimization",
    description: "Automatically enhance your product descriptions for conversion",
    image: "https://i.imgur.com/pI0YK4V.png",
    background: "bg-gradient-to-br from-homywork-orange/20 to-white"
  },
  {
    title: "Performance Analytics",
    description: "Track your success with detailed metrics and insights",
    image: "https://i.imgur.com/WpXNeJN.png", 
    background: "bg-gradient-to-br from-homywork-lightPurple/30 to-white"
  }
];

const InteractiveShowcaseSection = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    let interval: number | null = null;
    
    if (autoplayEnabled && !isHovered) {
      interval = window.setInterval(() => {
        setActiveItem((prev) => (prev + 1) % showcaseItems.length);
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, autoplayEnabled]);

  // Pause autoplay when hovering
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <section className="w-full py-24 px-4 bg-white overflow-hidden">
      <div className="container-width max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Transform Your Listings
          </h2>
          <p className="text-xl text-homywork-gray max-w-2xl mx-auto">
            Homywork's powerful features bring your products to life
          </p>
        </div>

        <div 
          className="relative" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Carousel
            opts={{ loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {showcaseItems.map((item, index) => (
                <CarouselItem key={index}>
                  <div className={`rounded-2xl overflow-hidden shadow-xl ${item.background} p-6 md:p-10`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className="order-2 lg:order-1">
                        <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                        <p className="text-xl text-homywork-gray mb-6">{item.description}</p>
                        <div className="flex space-x-2">
                          {showcaseItems.map((_, i) => (
                            <div 
                              key={i} 
                              className={`h-2 rounded-full transition-all duration-300 ${
                                i === index ? "w-8 bg-homywork-purple" : "w-2 bg-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <div className="order-1 lg:order-2 transform hover:scale-105 hover:rotate-1 transition-transform duration-500">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-auto rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 lg:left-8" />
            <CarouselNext className="right-4 lg:right-8" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default InteractiveShowcaseSection;
