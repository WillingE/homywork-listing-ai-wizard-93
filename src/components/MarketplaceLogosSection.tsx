import { Card } from "@/components/ui/card";

// 导入静态资源
import amazonLogo from "@/assets/logos/Amazon_logo.svg.png";
import walmartLogo from "@/assets/logos/Walmart_logo.svg";
import wayfairLogo from "@/assets/logos/Wayfair_logo.svg.png";
import temuLogo from "@/assets/logos/Temu_logo.svg.png";
import maisonLogo from "@/assets/logos/Maisons_du_Monde_logo.svg.png";
import shopifyLogo from "@/assets/logos/Shopify_logo_2018.svg.png";

const marketplaces = [
  {
    name: "Amazon",
    logo: amazonLogo,
  },
  {
    name: "Walmart",
    logo: walmartLogo,
  },
  {
    name: "Wayfair",
    logo: wayfairLogo,
  },
  {
    name: "Temu",
    logo: temuLogo,
  },
  {
    name: "Maison du Monde",
    logo: maisonLogo,
  },
  {
    name: "Shopify",
    logo: shopifyLogo,
  },
];

const MarketplaceLogosSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container-width">
        <div className="text-center mb-8 animate-fade-up">
          <h3 className="text-xl font-medium text-homywork-gray">
            Trusted by Sellers Across Major Marketplaces
          </h3>
        </div>

        <Card className="border-none bg-gray-50 py-8 px-4 shadow-sm animate-fade-up">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {marketplaces.map((marketplace, index) => (
              <div
                key={index}
                className="w-32 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <img
                  src={marketplace.logo}
                  alt={`${marketplace.name} logo`}
                  className="max-h-10 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MarketplaceLogosSection;
