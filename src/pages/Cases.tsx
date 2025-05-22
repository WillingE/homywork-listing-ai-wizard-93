
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudySection from "@/components/CaseStudySection";
import ResultsSection from "@/components/ResultsSection";

const Cases = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="pt-20">
        <div className="container-width mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-xl text-homywork-gray max-w-3xl mx-auto">
              See how businesses like yours have achieved remarkable results with Homywork.
            </p>
          </div>
        </div>
        <CaseStudySection />
        <ResultsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Cases;
