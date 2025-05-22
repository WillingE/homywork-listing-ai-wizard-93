
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small sellers just getting started",
      features: [
        "100 product listings per month",
        "Basic AI optimization",
        "Standard support",
        "1 marketplace connection"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      description: "Ideal for growing businesses with multiple products",
      features: [
        "500 product listings per month",
        "Advanced AI optimization",
        "Priority support",
        "5 marketplace connections",
        "Analytics dashboard"
      ],
      cta: "Start 14-day trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large operations with high-volume needs",
      features: [
        "Unlimited product listings",
        "Premium AI optimization",
        "Dedicated support manager",
        "Unlimited marketplace connections",
        "Advanced analytics & reporting",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="pt-20">
        <div className="container-width mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Simple, Transparent Pricing</span>
            </h1>
            <p className="text-xl text-homywork-gray max-w-3xl mx-auto">
              Choose the plan that's right for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card key={plan.name} className={`flex flex-col h-full ${plan.popular ? 'border-homywork-purple shadow-lg relative' : ''}`}>
                {plan.popular && (
                  <span className="absolute top-0 right-0 bg-homywork-purple text-white text-sm px-3 py-1 rounded-bl-lg rounded-tr-lg font-medium">
                    Most Popular
                  </span>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-homywork-gray ml-2">/month</span>}
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-homywork-purple mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-homywork-purple hover:bg-homywork-purple/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
