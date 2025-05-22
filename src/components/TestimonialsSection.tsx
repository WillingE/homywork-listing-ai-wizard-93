
import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Vince (Our Founder), I listed 12 SKUs in 10 mins — this thing saved my Sunday 😭",
    author: "GoMyHome",
    position: "Walmart Seller",
    color: "from-homywork-purple/20 to-white",
  },
  {
    quote:
      "You know I haven't booked a product photographer in 2 months? This is crazy.",
    author: "HomeStyle",
    position: "Amazon Seller",
    color: "from-homywork-orange/20 to-white",
  },
  {
    quote:
      "We used to tell clients 1-week turnaround. Now it's 1 day. They think we're magicians lol.",
    author: "E-Com Agency",
    position: "Marketing Lead",
    color: "from-homywork-lightPurple/30 to-white",
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
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
      id="testimonials" 
      className="py-24 bg-gray-50"
      ref={sectionRef}
    >
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            What Users Say
          </h2>
          <p className="text-xl text-homywork-gray max-w-2xl mx-auto">
            Don't take our word for it - hear directly from e-commerce
            professionals using Homywork
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`border-none shadow-lg bg-gradient-to-br ${testimonial.color} 
                transition-all duration-700 hover:shadow-xl hover:-translate-y-2
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0.95) rotate(-2deg)',
              }}
            >
              <CardContent className="pt-8 p-8">
                <div className="relative">
                  <Quote className="h-12 w-12 text-homywork-purple mb-4 opacity-70" />
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-homywork-purple/10 to-transparent rounded-full blur-xl"></div>
                </div>
                <p className="text-xl mb-8 text-homywork-darkPurple italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <p className="font-bold text-lg text-homywork-darkPurple">
                    {testimonial.author}
                  </p>
                  <p className="text-homywork-gray">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
