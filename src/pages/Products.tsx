
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Image, FileText, Tag, Database, Brain, Upload } from "lucide-react";

const Products = () => {
  const [activeTab, setActiveTab] = useState("studio");

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container-width mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 pt-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Products</span>
            </h1>
            <p className="text-xl text-homywork-gray max-w-3xl mx-auto">
              Powerful AI-driven tools that make listing creation faster and easier than ever before.
            </p>
          </div>

          {/* Product Navigation Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-16">
            <TabsList className="grid w-full grid-cols-3 max-w-xl mx-auto">
              <TabsTrigger value="studio" className="text-base py-3">Studio</TabsTrigger>
              <TabsTrigger value="listing-manager" className="text-base py-3">Listing Manager</TabsTrigger>
              <TabsTrigger value="ai-knowledge" className="text-base py-3">AI Knowledge</TabsTrigger>
            </TabsList>

            {/* Studio Tab Content */}
            <TabsContent value="studio" className="mt-8 animate-fade-in">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Studio</h2>
                <p className="text-lg text-homywork-gray max-w-2xl mx-auto">
                  Create professional-quality listings with our AI-powered tools
                </p>
              </div>

              {/* Studio Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Category Feature */}
                <Card className="border border-homywork-purple/20 hover:border-homywork-purple/50 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="bg-homywork-purple/10 p-3 rounded-md w-12 h-12 flex items-center justify-center mb-4">
                      <FileText className="text-homywork-purple" size={24} />
                    </div>
                    <CardTitle className="text-xl">Category</CardTitle>
                    <CardDescription>
                      Intelligent category identification and optimization
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gray-100 rounded-md overflow-hidden mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                        alt="Category optimization interface" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-homywork-gray">
                      Our AI analyzes your product to suggest the most effective category placement, 
                      increasing visibility and reducing misplacement errors by up to 65%.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full text-sm" variant="outline">
                      Learn More <ArrowRight className="ml-1" size={16} />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Image Feature */}
                <Card className="border border-homywork-purple/20 hover:border-homywork-purple/50 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="bg-homywork-purple/10 p-3 rounded-md w-12 h-12 flex items-center justify-center mb-4">
                      <Image className="text-homywork-purple" size={24} />
                    </div>
                    <CardTitle className="text-xl">Image</CardTitle>
                    <CardDescription>
                      Transform product images for maximum impact
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2 mb-4">
                      <div className="flex-1 aspect-square bg-gray-100 rounded-md overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                          alt="Before image optimization" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 aspect-square bg-gray-100 rounded-md overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                          alt="After image optimization" 
                          className="w-full h-full object-cover brightness-110 contrast-105"
                        />
                      </div>
                    </div>
                    <p className="text-sm text-homywork-gray">
                      Our image enhancement technology removes backgrounds, adjusts lighting, and fixes imperfections, 
                      resulting in 42% higher engagement rates.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full text-sm" variant="outline">
                      Learn More <ArrowRight className="ml-1" size={16} />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Title & Description Feature */}
                <Card className="border border-homywork-purple/20 hover:border-homywork-purple/50 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="bg-homywork-purple/10 p-3 rounded-md w-12 h-12 flex items-center justify-center mb-4">
                      <FileText className="text-homywork-purple" size={24} />
                    </div>
                    <CardTitle className="text-xl">Title & Description</CardTitle>
                    <CardDescription>
                      Compelling copy that converts browsers to buyers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-4 rounded-md mb-4 border border-gray-100">
                      <div className="font-medium mb-2">AI-Generated Title:</div>
                      <div className="text-sm font-medium text-homywork-purple mb-3">
                        "Professional 4K Streaming Webcam with Noise-Cancelling Microphone & Auto Light Correction"
                      </div>
                      <div className="font-medium mb-2">AI-Generated Description:</div>
                      <div className="text-xs text-homywork-gray">
                        Elevate your video calls and streaming sessions with crystal clear 4K resolution and intelligent 
                        noise cancellation technology that filters background sounds...
                      </div>
                    </div>
                    <p className="text-sm text-homywork-gray">
                      Our AI analyzes top-selling listings to create SEO-optimized titles and descriptions that highlight key features
                      and benefits, increasing click-through rates by 37%.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full text-sm" variant="outline">
                      Learn More <ArrowRight className="ml-1" size={16} />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Attributes Feature */}
                <Card className="border border-homywork-purple/20 hover:border-homywork-purple/50 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="bg-homywork-purple/10 p-3 rounded-md w-12 h-12 flex items-center justify-center mb-4">
                      <Tag className="text-homywork-purple" size={24} />
                    </div>
                    <CardTitle className="text-xl">Attributes</CardTitle>
                    <CardDescription>
                      Precise product specifications that matter most
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gray-100 rounded-md overflow-hidden mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                        alt="Attributes interface" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-homywork-gray">
                      Our AI identifies and highlights the most important product attributes for your category, 
                      ensuring your listings meet marketplace requirements and stand out in filtered searches.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full text-sm" variant="outline">
                      Learn More <ArrowRight className="ml-1" size={16} />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Publish Feature */}
                <Card className="border border-homywork-purple/20 hover:border-homywork-purple/50 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="bg-homywork-purple/10 p-3 rounded-md w-12 h-12 flex items-center justify-center mb-4">
                      <Upload className="text-homywork-purple" size={24} />
                    </div>
                    <CardTitle className="text-xl">Publish</CardTitle>
                    <CardDescription>
                      Seamless deployment to multiple marketplaces
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gray-100 rounded-md overflow-hidden mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1483058712412-4245e9b90334" 
                        alt="Publish interface" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-homywork-gray">
                      Optimize your listings for each marketplace with one click, automatically adjusting 
                      formats and requirements for Amazon, eBay, Etsy, and more.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full text-sm" variant="outline">
                      Learn More <ArrowRight className="ml-1" size={16} />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Listing Manager Tab Content */}
            <TabsContent value="listing-manager" className="mt-8 animate-fade-in">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Listing Manager</h2>
                <p className="text-lg text-homywork-gray max-w-2xl mx-auto">
                  Efficiently manage all your product listings across multiple marketplaces
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="bg-homywork-purple/10 p-3 rounded-md w-12 h-12 flex items-center justify-center mb-4">
                    <Database className="text-homywork-purple" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Centralized Control</h3>
                  <p className="text-homywork-gray mb-6">
                    Manage inventory, pricing, and product information across all your sales channels from one 
                    intuitive dashboard. Our AI monitors performance and suggests optimization opportunities in real-time.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="bg-homywork-purple/10 p-1 rounded-full mr-3 mt-1">
                        <ArrowRight className="text-homywork-purple" size={14} />
                      </div>
                      <span className="text-sm">Sync inventory across multiple marketplaces</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-homywork-purple/10 p-1 rounded-full mr-3 mt-1">
                        <ArrowRight className="text-homywork-purple" size={14} />
                      </div>
                      <span className="text-sm">Automated pricing strategies based on market conditions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-homywork-purple/10 p-1 rounded-full mr-3 mt-1">
                        <ArrowRight className="text-homywork-purple" size={14} />
                      </div>
                      <span className="text-sm">Performance analytics and optimization recommendations</span>
                    </li>
                  </ul>
                  <Button className="bg-homywork-purple hover:bg-homywork-purple/90 text-white">
                    Explore Listing Manager <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
                <div className="flex-1">
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                      alt="Listing Manager Dashboard" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* AI Knowledge Tab Content */}
            <TabsContent value="ai-knowledge" className="mt-8 animate-fade-in">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">AI Knowledge</h2>
                <p className="text-lg text-homywork-gray max-w-2xl mx-auto">
                  Leverage market intelligence to optimize your product listings
                </p>
              </div>

              <div className="flex flex-col-reverse lg:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                      alt="AI Knowledge Dashboard" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-homywork-purple/10 p-3 rounded-md w-12 h-12 flex items-center justify-center mb-4">
                    <Brain className="text-homywork-purple" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Market Intelligence</h3>
                  <p className="text-homywork-gray mb-6">
                    Our AI continuously analyzes market trends, competitor strategies, and customer behavior 
                    to provide actionable insights that help you stay ahead of the competition.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="bg-homywork-purple/10 p-1 rounded-full mr-3 mt-1">
                        <ArrowRight className="text-homywork-purple" size={14} />
                      </div>
                      <span className="text-sm">Keyword optimization based on current search trends</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-homywork-purple/10 p-1 rounded-full mr-3 mt-1">
                        <ArrowRight className="text-homywork-purple" size={14} />
                      </div>
                      <span className="text-sm">Competitive analysis with actionable recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-homywork-purple/10 p-1 rounded-full mr-3 mt-1">
                        <ArrowRight className="text-homywork-purple" size={14} />
                      </div>
                      <span className="text-sm">Seasonal trend forecasting to prepare for demand shifts</span>
                    </li>
                  </ul>
                  <Button className="bg-homywork-purple hover:bg-homywork-purple/90 text-white">
                    Discover AI Knowledge <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Call-to-Action Section */}
          <div className="my-20 bg-gradient-to-r from-homywork-purple/10 to-homywork-orange/10 p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Listings?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Start creating optimized listings that drive more sales with our AI-powered tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-homywork-purple hover:bg-homywork-purple/90 text-white px-8 py-6 text-lg">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-homywork-purple text-homywork-purple hover:bg-homywork-purple/10 px-8 py-6 text-lg">
                Book a Demo
              </Button>
            </div>
            <p className="text-xs text-homywork-gray mt-4">
              No credit card required. 14-day free trial with full access to all features.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
