
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="pt-20">
        <div className="container-width mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Products</span>
            </h1>
            <p className="text-xl text-homywork-gray max-w-3xl mx-auto">
              Discover the powerful tools that make listing creation faster and easier
              than ever before.
            </p>
          </div>
        </div>
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
