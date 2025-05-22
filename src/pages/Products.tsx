
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Box, Briefcase, Brain, Layers, Image, FileText, ListOrdered, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

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

          <Tabs defaultValue="studio" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="studio" className="flex items-center gap-2">
                <Layers size={18} />
                Studio
              </TabsTrigger>
              <TabsTrigger value="listing-manager" className="flex items-center gap-2">
                <Briefcase size={18} />
                Listing Manager
              </TabsTrigger>
              <TabsTrigger value="ai-knowledge" className="flex items-center gap-2">
                <Brain size={18} />
                AI Knowledge
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="studio">
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-homywork-purple/10 to-homywork-purple/5 p-6 md:p-10 rounded-xl">
                  <h2 className="text-3xl font-bold mb-4 text-homywork-darkPurple">Studio</h2>
                  <p className="text-lg mb-6">
                    Our comprehensive creative environment where you can effortlessly build and optimize 
                    your product listings with specialized agents for different aspects of your content.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2">
                          <ListOrdered className="text-homywork-purple" size={20} />
                          Category Agent
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-homywork-gray">
                          Automatically analyze and suggest optimal category placement for your products,
                          improving discoverability and reaching the right audience.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2">
                          <Image className="text-homywork-purple" size={20} />
                          Image Agent
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-homywork-gray">
                          Process and optimize product images with AI-powered enhancement, background removal,
                          and automated sizing to match marketplace requirements.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2">
                          <FileText className="text-homywork-purple" size={20} />
                          Title & Description Agent
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-homywork-gray">
                          Generate compelling, SEO-optimized titles and descriptions that highlight key product
                          features and benefits to drive conversion rates.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2">
                          <Tag className="text-homywork-purple" size={20} />
                          Attributes Agent
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-homywork-gray">
                          Intelligently identify and suggest optimal product attributes and specifications
                          to improve searchability and match buyer expectations.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="listing-manager">
              <div className="bg-gradient-to-r from-homywork-purple/10 to-homywork-purple/5 p-6 md:p-10 rounded-xl">
                <h2 className="text-3xl font-bold mb-4 text-homywork-darkPurple">Listing Manager</h2>
                <p className="text-lg mb-6">
                  Centralize and streamline your listing workflow with our powerful management system that
                  handles the complete lifecycle of your product listings.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="flex gap-4">
                    <Box className="text-homywork-purple mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Cross-Platform Integration</h3>
                      <p className="text-homywork-gray">
                        Seamlessly manage listings across multiple marketplaces from a single dashboard,
                        with automatic syncing of inventory, prices and product data.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Box className="text-homywork-purple mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Bulk Operations</h3>
                      <p className="text-homywork-gray">
                        Save time with powerful bulk editing, upload, and optimization tools that let you
                        update hundreds of listings in just a few clicks.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button className="mt-8 bg-homywork-purple hover:bg-homywork-purple/90">
                  Learn More
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="ai-knowledge">
              <div className="bg-gradient-to-r from-homywork-purple/10 to-homywork-purple/5 p-6 md:p-10 rounded-xl">
                <h2 className="text-3xl font-bold mb-4 text-homywork-darkPurple">AI Knowledge</h2>
                <p className="text-lg mb-6">
                  Our advanced AI system continually learns from marketplace trends and your performance
                  data to provide actionable insights and optimization recommendations.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="flex gap-4">
                    <Brain className="text-homywork-purple mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Trend Analysis</h3>
                      <p className="text-homywork-gray">
                        Stay ahead of the market with AI-powered trend detection that identifies emerging 
                        opportunities and optimizes your listings accordingly.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Brain className="text-homywork-purple mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
                      <p className="text-homywork-gray">
                        Get personalized recommendations to improve conversion rates, visibility, and 
                        overall marketplace performance based on data-driven insights.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button className="mt-8 bg-homywork-purple hover:bg-homywork-purple/90">
                  Explore AI Features
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
