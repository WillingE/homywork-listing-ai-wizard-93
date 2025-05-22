
import { Card } from "@/components/ui/card";
import { useRef, useEffect, useState } from "react";

const marketplaces = [
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png",
  },
  {
    name: "Wayfair",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Wayfair_logo.svg/2560px-Wayfair_logo.svg.png",
  },
  {
    name: "Temu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Temu_logo.svg/1024px-Temu_logo.svg.png",
  },
  {
    name: "Maison du Monde",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Maisons_du_Monde_logo.svg/2560px-Maisons_du_Monde_logo.svg.png",
  },
  {
    name: "Shopify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/1280px-Shopify_logo_2018.svg.png",
  },
  {
    name: "Walmart",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/2560px-Walmart_logo.svg.png",
  },
];

const MarketplaceLogosSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
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
      className="py-16 bg-white relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Subtle Background Animation */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-homywork-purple/5 to-homywork-lightPurple/10 opacity-50"
        style={{ 
          transform: `translateY(${scrollPosition * 0.05}px)`,
        }}
      ></div>
      
      <div className="container-width relative z-10">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold mb-2 text-pink-500">
            Trusted by Sellers Across Major Marketplaces
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-homywork-purple to-homywork-orange mx-auto"></div>
        </div>

        <Card className="border-none bg-white/80 backdrop-blur-md py-12 px-6 shadow-lg relative">
          {/* Animated Light Beam */}
          <div 
            className="absolute inset-0 overflow-hidden rounded-lg"
            style={{
              transform: isSectionVisible ? 'translateX(0)' : 'translateX(-100%)',
              transition: 'transform 1s ease-in-out',
            }}
          >
            <div 
              className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
              style={{
                transform: `translateX(${isSectionVisible ? '400%' : '-100%'})`,
                transition: 'transform 2s ease-in-out',
              }}
            ></div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {marketplaces.map((marketplace, index) => (
              <div
                key={index}
                className={`w-32 h-16 flex items-center justify-center transform transition-all duration-700`}
                style={{ 
                  opacity: isSectionVisible ? 1 : 0,
                  transform: isSectionVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative group cursor-pointer">
                  <img
                    src={marketplace.logo}
                    alt={`${marketplace.name} logo`}
                    className={`max-h-12 max-w-full object-contain transition-all duration-300 ${marketplace.name === 'Walmart' ? 'filter-none' : 'filter grayscale group-hover:grayscale-0'}`}
                    style={{
                      background: marketplace.name === 'Walmart' ? '#0071ce' : 'transparent',
                      padding: marketplace.name === 'Walmart' ? '4px' : '0',
                      borderRadius: marketplace.name === 'Walmart' ? '4px' : '0',
                    }}
                  />
                  <div className="absolute -bottom-4 left-0 right-0 mx-auto w-0 h-0.5 bg-homywork-purple group-hover:w-full transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MarketplaceLogosSection;
