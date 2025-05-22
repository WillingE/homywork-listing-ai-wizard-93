
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/routes";
import { Link } from "react-router-dom";
import CaseStudySection from "@/components/CaseStudySection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CaseStudies = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 bg-gradient-to-b from-white to-homywork-lightPurple/20">
          <div className="container-width">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Case Studies</span>
              </h1>
              <p className="text-xl text-homywork-gray mb-8 max-w-3xl mx-auto">
                See how Homywork has transformed e-commerce businesses with real-world examples and measurable results.
              </p>
            </div>
          </div>
        </section>

        <CaseStudySection />
        <ResultsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
