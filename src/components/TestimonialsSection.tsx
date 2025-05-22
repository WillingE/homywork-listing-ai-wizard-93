import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Vince (Our Founder), I listed 12 SKUs in 10 mins — this thing saved my Sunday 😭",
    author: "GoMyHome",
    position: "Walmart Seller",
  },
  {
    quote:
      "You know I haven’t booked a product photographer in 2 months? This is crazy.",
    author: "HomeStyle",
    position: "Amazon Seller",
  },
  {
    quote:
      "We used to tell clients 1-week turnaround. Now it's 1 day. They think we're magicians lol.",
    author: "E-Com Agency",
    position: "Marketing Lead",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Users Say
          </h2>
          <p className="text-lg text-homywork-gray max-w-2xl mx-auto">
            Don't take our word for it - hear directly from e-commerce
            professionals using Homywork
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-none shadow-md bg-gradient-to-br from-homywork-lightPurple/20 to-white animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-homywork-purple mb-4 opacity-70" />
                <p className="text-lg mb-6 text-homywork-darkPurple italic">
                  "{testimonial.quote}"
                </p>
                <div className="mt-auto">
                  <p className="font-bold text-homywork-darkPurple">
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
