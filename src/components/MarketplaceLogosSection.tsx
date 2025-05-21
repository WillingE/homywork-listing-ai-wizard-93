import { Card } from "@/components/ui/card";

const marketplaces = [
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png",
  },
  {
    name: "Walmart",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
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
