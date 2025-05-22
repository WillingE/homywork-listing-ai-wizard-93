
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pricingPlans = [
  {
    name: "Starter",
    price: "$49",
    period: "per month",
    description: "Perfect for new sellers getting started",
    features: [
      "100 AI-generated listings per month",
      "Basic image generation",
      "Amazon & Walmart integrations",
      "Standard support"
    ],
    button: {
      text: "Start Free Trial",
      variant: "outline"
    }
  },
  {
    name: "Professional",
    price: "$149",
    period: "per month",
    description: "For growing e-commerce businesses",
    features: [
      "500 AI-generated listings per month",
      "Advanced image generation",
      "All marketplace integrations",
      "Priority support",
      "Performance analytics"
    ],
    button: {
      text: "Start Free Trial",
      variant: "default"
    },
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large-scale operations",
    features: [
      "Unlimited AI-generated listings",
      "Custom marketplace integrations",
      "Dedicated account manager",
      "API access",
      "Custom AI training"
    ],
    button: {
      text: "Contact Sales",
      variant: "outline"
    }
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 bg-gradient-to-b from-white to-homywork-lightPurple/20">
          <div className="container-width">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Pricing</span>
              </h1>
              <p className="text-xl text-homywork-gray mb-8 max-w-3xl mx-auto">
                Simple, transparent pricing designed to scale with your business.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`flex flex-col ${plan.popular ? 'border-homywork-purple shadow-lg relative' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-homywork-purple text-white px-3 py-1 rounded-full text-sm">Most Popular</span>
                    </div>
                  )}
                  <CardHeader>
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-gray-500 ml-2">{plan.period}</span>}
                    </div>
                    <p className="text-homywork-gray mt-2">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className={`w-full ${plan.button.variant === 'default' ? 'bg-homywork-purple hover:bg-homywork-purple/90 text-white' : 'border-homywork-purple text-homywork-purple hover:bg-homywork-purple/10'}`}
                      variant={plan.button.variant === 'default' ? 'default' : 'outline'}
                      onClick={() => window.location.href = "https://homywork.com/PublishRegister"}
                    >
                      {plan.button.text}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Need something different?</h3>
              <p className="text-homywork-gray mb-6">
                We offer custom solutions for businesses with specific requirements.
                Contact our team to discuss your needs.
              </p>
              <Button 
                onClick={() => window.location.href = "https://calendly.com/tinshlee/30min"}
                className="bg-homywork-purple hover:bg-homywork-purple/90 text-white"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
