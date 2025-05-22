
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/routes";
import { Link } from "react-router-dom";
import AboutSection from "@/components/AboutSection";
import AudienceSection from "@/components/AudienceSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 bg-gradient-to-b from-white to-homywork-lightPurple/20">
          <div className="container-width">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">About Us</span>
              </h1>
              <p className="text-xl text-homywork-gray mb-8 max-w-3xl mx-auto">
                Homywork is a leading AI assistant tool helping you simplify the product listing creation process.
                Our mission is to enable merchants to grow their business faster and more effectively.
              </p>
            </div>
          </div>
        </section>

        <AboutSection />
        <AudienceSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
