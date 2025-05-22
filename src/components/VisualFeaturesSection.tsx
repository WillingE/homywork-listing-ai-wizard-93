
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Generate Product Images",
    description: "From idea to visual in seconds",
    image: "https://i.imgur.com/hV6hyQr.png",
    imagePosition: "right",
    bgColor: "bg-gray-50",
  },
  {
    title: "Optimize Your Listings",
    description: "Smart content that converts",
    image: "https://i.imgur.com/pI0YK4V.png",
    imagePosition: "left",
    bgColor: "bg-white",
  },
  {
    title: "Monitor Performance",
    description: "Insights at your fingertips",
    image: "https://i.imgur.com/WpXNeJN.png",
    imagePosition: "right",
    bgColor: "bg-gray-50",
  },
];

const VisualFeaturesSection = () => {
  return (
    <section className="w-full">
      {features.map((feature, index) => (
        <div
          key={index}
          className={cn("py-16 md:py-24 px-4 w-full", feature.bgColor)}
        >
          <div className="container-width">
            <div
              className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
                feature.imagePosition === "right"
                  ? "lg:grid-flow-col"
                  : "lg:grid-flow-col-dense"
              )}
            >
              <div
                className={cn(
                  "space-y-4 animate-fade-up",
                  feature.imagePosition === "left" ? "lg:order-last" : ""
                )}
              >
                <h2 className="text-3xl md:text-4xl font-semibold">
                  {feature.title}
                </h2>
                <p className="text-xl text-homywork-gray">
                  {feature.description}
                </p>
              </div>

              <div
                className="rounded-2xl overflow-hidden shadow-lg animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
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
