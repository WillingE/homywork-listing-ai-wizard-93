
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="pt-20">
        <div className="container-width mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">About Us</span>
            </h1>
            <p className="text-xl text-homywork-gray max-w-3xl mx-auto">
              Homywork is a leading AI-powered tool helping sellers optimize their product listings for better visibility and conversion.
            </p>
          </div>
        </div>
        <AboutSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
