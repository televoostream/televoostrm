import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tv,
  Monitor,
  Smartphone,
  Tablet,
  CheckCircle2,
  Shield,
  Zap,
  Headphones,
  Star,
  Play,
  Trophy,
  Film,
  TvMinimal,
  Baby,
  Newspaper,
  Crown,
} from "lucide-react";
import heroTv from "@/assets/hero-tv.jpg";
import patternBg from "@/assets/pattern-bg.jpg";
import deviceTv from "@/assets/device-tv.jpg";
import deviceMobile from "@/assets/device-mobile.jpg";
import deviceTablet from "@/assets/device-tablet.jpg";
import deviceLaptop from "@/assets/device-laptop.jpg";
import sportsLive from "@/assets/sports-live.jpg";
import moviesCinema from "@/assets/movies-cinema.jpg";
import { NavLink } from "@/components/NavLink";
import ChannelLogos from "@/components/ChannelLogos";
import SetupGuide from "@/components/SetupGuide";
import QualityFeatures from "@/components/QualityFeatures";

const Home = () => {
  const features = [
    {
      icon: TvMinimal,
      title: "Unlimited HD Channels",
      description: "Access thousands of premium channels in crystal-clear HD quality.",
    },
    {
      icon: Monitor,
      title: "Multi-Device Access",
      description: "Watch on TV, smartphone, tablet, or computer - anywhere, anytime.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert customer support team available around the clock for you.",
    },
  ];

  const whyChoose = [
    {
      title: "Watch on Any Device",
      description:
        "Stream seamlessly on Smart TVs, smartphones, tablets, laptops, and more. Your entertainment follows you wherever you go.",
      icon: Monitor,
    },
    {
      title: "Premium Sports & PPV",
      description:
        "Never miss a moment with live sports including UFC, Boxing, NFL, NBA, Cricket, Soccer, and exclusive PPV events.",
      icon: Trophy,
    },
    {
      title: "Zero Buffering Experience",
      description:
        "Enjoy uninterrupted streaming with our secure, high-speed servers and instant account activation.",
      icon: Zap,
    },
  ];

  const pricingPlans = [
    {
      name: "1 Month",
      price: "$19.99",
      period: "/month",
      features: [
        "All HD Channels",
        "Multi-Device Support",
        "24/7 Customer Support",
        "PPV Events Included",
        "No Contract",
      ],
      popular: false,
    },
    {
      name: "3 Months",
      price: "$49.99",
      period: "/3 months",
      savings: "Save 17%",
      features: [
        "All HD Channels",
        "Multi-Device Support",
        "24/7 Priority Support",
        "PPV Events Included",
        "Extended Coverage",
      ],
      popular: true,
    },
    {
      name: "12 Months",
      price: "$149.99",
      period: "/year",
      savings: "Best Value - Save 37%",
      features: [
        "All Premium Channels",
        "Unlimited Devices",
        "VIP Support",
        "All PPV Events Free",
        "Exclusive Content Access",
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: "Michael Johnson",
      rating: 5,
      text: "Best IPTV service I've ever used! The picture quality is amazing and I never experience buffering. Customer support is top-notch!",
    },
    {
      name: "Sarah Williams",
      rating: 5,
      text: "TelevooStream has everything I need - sports, movies, news. The multi-device feature is perfect for my family. Highly recommend!",
    },
    {
      name: "David Martinez",
      rating: 5,
      text: "Incredible value for money. The PPV events alone make it worth it. Setup was instant and streaming is flawless.",
    },
  ];

  const faqs = [
    {
      question: "What is IPTV and how does it work?",
      answer:
        "IPTV (Internet Protocol Television) delivers TV content over the internet instead of traditional cable. Simply connect to our service with your internet connection and start streaming thousands of channels instantly.",
    },
    {
      question: "What devices are compatible with TelevooStream?",
      answer:
        "TelevooStream works on Smart TVs, Android & iOS devices, Amazon Fire Stick, Apple TV, MAG boxes, computers, tablets, and more. One subscription works across all your devices.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a free demo so you can experience our service quality before subscribing. Click the 'Free Demo' button to get started.",
    },
    {
      question: "How quickly can I start watching after subscribing?",
      answer:
        "Your account is activated instantly upon payment. You'll receive your login credentials via email immediately and can start streaming right away.",
    },
    {
      question: "Do you offer refunds if I'm not satisfied?",
      answer:
        "Yes, we offer a satisfaction guarantee. Check our refund policy page for complete details on our refund terms and conditions.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          </video>
          
          {/* Black overlay for content readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          {/* Top text centered */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/30 mb-6">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-bold text-accent">World's Leading IPTV Service</span>
              <Star className="w-4 h-4 text-accent fill-accent" />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-tight mb-6">
              Premium Entertainment
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-glow-pulse">
                Unlimited Streaming
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Stream 5,000+ live channels, movies, and sports in stunning 4K. Watch anywhere, anytime.
            </p>
          </div>

          {/* Image and Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">
            {/* Image Section - Takes center stage (8 columns) */}
            <div className="lg:col-span-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-accent/40 group cursor-pointer">
                {/* Image Element */}
                <img
                  src={heroTv}
                  alt="TelevooStream Preview"
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-24 h-24 rounded-full bg-accent/30 backdrop-blur-md flex items-center justify-center border-2 border-accent shadow-neon-green scale-100 group-hover:scale-110 transition-transform">
                    <Play className="w-12 h-12 text-accent ml-2" fill="currentColor" />
                  </div>
                </div>
                
                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-accent/20 backdrop-blur-md border border-accent/30 group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-accent" fill="currentColor" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">Experience TelevooStream</p>
                        <p className="text-sm text-muted-foreground">Preview our streaming quality</p>
                      </div>
                    </div>
                    <div className="px-4 py-2 rounded-full bg-red-500/20 backdrop-blur-md border border-red-500/30 flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-sm font-bold text-red-500">4K LIVE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Stats & Features (4 columns) */}
            <div className="lg:col-span-4 space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {/* Stats Cards */}
              <Card className="bg-card/50 backdrop-blur-md border-border/50 hover:border-accent/50 transition-all p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-accent/10">
                      <Tv className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <p className="text-3xl font-display font-bold text-accent">5,000+</p>
                      <p className="text-sm text-muted-foreground">Live Channels</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Monitor className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-3xl font-display font-bold text-primary">4K</p>
                      <p className="text-sm text-muted-foreground">Ultra HD Quality</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-md border-border/50 hover:border-accent/50 transition-all p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-accent/10">
                      <Headphones className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <p className="text-3xl font-display font-bold text-accent">24/7</p>
                      <p className="text-sm text-muted-foreground">Live Support</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-3xl font-display font-bold text-primary">99.9%</p>
                      <p className="text-sm text-muted-foreground">Uptime</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTAs and Features */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button variant="neon" size="xl" asChild className="text-lg px-8">
                <NavLink to="/pricing">
                  <Play className="mr-2 h-6 w-6" />
                  Start Watching Now
                </NavLink>
              </Button>
              <Button variant="outline-glow" size="xl" asChild className="text-lg px-8">
                <NavLink to="/contact">
                  <Shield className="mr-2 h-6 w-6" />
                  Get Free Trial
                </NavLink>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="text-sm">Instant Activation</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm">Secure Streaming</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-sm">Zero Buffering</span>
              </div>
              <div className="flex items-center gap-2">
                <Monitor className="w-5 h-5 text-accent" />
                <span className="text-sm">All Devices</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Explore All Products Section */}
      <section className="py-20 bg-[#1a0b2e]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
              Explore all products
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Roku TV */}
            <NavLink to="/products">
              <Card className="group cursor-pointer bg-transparent border-none hover:scale-105 transition-all duration-300 animate-fade-in">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-40 h-40 rounded-2xl bg-[#2a1b3d] flex items-center justify-center group-hover:bg-[#3a2b4d] transition-colors">
                    <img
                      src="https://cigars.roku.com/v1/http%3A%2F%2Fimage.roku.com%2Fw%2Frapid%2Fimages%2Fundefined%2F0d343cb7-585a-43d9-9996-7c470bc76356.png"
                      alt="Roku TV"
                      className="w-28 h-28 object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Roku TV</h3>
                </CardContent>
              </Card>
            </NavLink>

            {/* Smart Home */}
            <NavLink to="/products">
              <Card className="group cursor-pointer bg-transparent border-none hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-40 h-40 rounded-2xl bg-[#2a1b3d] flex items-center justify-center group-hover:bg-[#3a2b4d] transition-colors">
                    <img
                      src="https://cigars.roku.com/v1/http%3A%2F%2Fimage.roku.com%2Fw%2Frapid%2Fimages%2Fundefined%2F200aeaea-59cc-4544-8c2a-598fc30a18df.png"
                      alt="Smart Home"
                      className="w-28 h-28 object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Smart Home</h3>
                </CardContent>
              </Card>
            </NavLink>

            {/* Accessories */}
            <NavLink to="/products">
              <Card className="group cursor-pointer bg-transparent border-none hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-40 h-40 rounded-2xl bg-[#2a1b3d] flex items-center justify-center group-hover:bg-[#3a2b4d] transition-colors">
                    <img
                      src="https://cigars.roku.com/v1/http%3A%2F%2Fimage.roku.com%2Fw%2Frapid%2Fimages%2Fundefined%2F6c14f517-659b-4734-a25d-b183965ea311.png"
                      alt="Accessories"
                      className="w-28 h-28 object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Accessories</h3>
                </CardContent>
              </Card>
            </NavLink>

            {/* Audio */}
            <NavLink to="/products">
              <Card className="group cursor-pointer bg-transparent border-none hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-40 h-40 rounded-2xl bg-[#2a1b3d] flex items-center justify-center group-hover:bg-[#3a2b4d] transition-colors">
                    <img
                      src="https://cigars.roku.com/v1/http%3A%2F%2Fimage.roku.com%2Fw%2Frapid%2Fimages%2Fundefined%2F104d7338-902f-4900-9267-7bacaa526e01.png"
                      alt="Audio"
                      className="w-28 h-28 object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Audio</h3>
                </CardContent>
              </Card>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Device Showcase Section - Unique Layout */}
      <section className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20 space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/30 mb-4">
              <Monitor className="w-4 h-4 text-accent" />
              <span className="text-sm font-bold text-accent">Multi-Device Streaming</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              Watch on{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Any Device
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              One subscription. Unlimited screens. Stream seamlessly across all your devices.
            </p>
          </div>

          {/* Unique Asymmetric Grid Layout */}
          <div className="max-w-7xl mx-auto">
            {/* Top Row - Large TV Display with Side Cards */}
            <div className="grid lg:grid-cols-12 gap-6 mb-6">
              {/* Main TV - Takes 8 columns */}
              <div className="lg:col-span-8 animate-fade-in">
                <Card className="group relative border-2 border-border/50 overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 h-full">
                  <CardContent className="p-0 relative">
                    <img
                      src={deviceTv}
                      alt="Smart TV with TelevooStream"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay Badge */}
                    <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-accent/90 backdrop-blur-md border border-accent/30 flex items-center gap-2">
                      <Tv className="w-4 h-4 text-accent-foreground" />
                      <span className="text-sm font-bold text-accent-foreground">Smart TV</span>
                    </div>
                    {/* Bottom Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-2xl font-display font-bold text-white mb-2">Big Screen Experience</h3>
                      <p className="text-gray-300 text-sm">4K streaming on Smart TVs, Fire Stick, Apple TV, Roku & more</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Side - Stacked Mobile & Tablet */}
              <div className="lg:col-span-4 flex flex-col gap-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                {/* Mobile Card */}
                <Card className="group border-2 border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
                  <CardContent className="p-6 relative">
                    <div className="absolute top-4 right-4 p-2 rounded-lg bg-primary/20 backdrop-blur-md">
                      <Smartphone className="w-5 h-5 text-primary" />
                    </div>
                    <img
                      src={deviceMobile}
                      alt="Mobile streaming"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-display font-semibold mb-2">Mobile Phones</h3>
                    <p className="text-muted-foreground text-sm">
                      Stream anywhere with iOS & Android apps
                    </p>
                  </CardContent>
                </Card>

                {/* Tablet Card */}
                <Card className="group border-2 border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
                  <CardContent className="p-6 relative">
                    <div className="absolute top-4 right-4 p-2 rounded-lg bg-primary/20 backdrop-blur-md">
                      <Tablet className="w-5 h-5 text-primary" />
                    </div>
                    <img
                      src={deviceTablet}
                      alt="Tablet streaming"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-display font-semibold mb-2">Tablets</h3>
                    <p className="text-muted-foreground text-sm">
                      Perfect for iPad & Android tablets
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Bottom Row - Laptop Full Width */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="group border-2 border-border/50 overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:shadow-accent/20">
                <CardContent className="p-0 relative">
                  <div className="grid lg:grid-cols-2 items-center">
                    {/* Image Side */}
                    <div className="relative h-64 lg:h-full overflow-hidden">
                      <img
                        src={deviceLaptop}
                        alt="Laptop streaming"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 lg:to-background/95" />
                    </div>
                    
                    {/* Content Side */}
                    <div className="p-8 lg:p-12 relative">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-4">
                        <Monitor className="w-4 h-4 text-accent" />
                        <span className="text-sm font-bold text-accent">Desktop Streaming</span>
                      </div>
                      <h3 className="text-3xl font-display font-bold mb-4">Laptops & Computers</h3>
                      <p className="text-muted-foreground mb-6">
                        Watch directly in your web browser on any laptop, desktop, or Chromebook. 
                        No downloads required - just login and start streaming instantly.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <div className="px-4 py-2 rounded-lg bg-secondary border border-border">
                          <span className="text-sm font-medium">Windows</span>
                        </div>
                        <div className="px-4 py-2 rounded-lg bg-secondary border border-border">
                          <span className="text-sm font-medium">macOS</span>
                        </div>
                        <div className="px-4 py-2 rounded-lg bg-secondary border border-border">
                          <span className="text-sm font-medium">Linux</span>
                        </div>
                        <div className="px-4 py-2 rounded-lg bg-secondary border border-border">
                          <span className="text-sm font-medium">ChromeOS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-center p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <div className="text-4xl font-bold text-accent mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Devices Supported</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <div className="text-4xl font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Simultaneous Streams</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <div className="text-4xl font-bold text-accent mb-2">HD</div>
              <div className="text-sm text-muted-foreground">All Devices</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <div className="text-4xl font-bold text-primary mb-2">1</div>
              <div className="text-sm text-muted-foreground">Subscription</div>
            </div>
          </div>

          {/* Compatible Devices List */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">Also compatible with:</p>
            <div className="flex flex-wrap justify-center gap-6">
              {['Smart TV', 'Fire Stick', 'Apple TV', 'Android Box', 'MAG Box', 'Chromecast'].map((device, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-card border border-border/50 rounded-full hover:border-accent/50 hover:shadow-neon-purple transition-all duration-300"
                >
                  <span className="text-sm font-medium">{device}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-neon-green hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/10 blur-xl group-hover:bg-accent/20 transition-all rounded-full" />
                    <feature.icon className="relative w-12 h-12 text-accent" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Logos */}
      <ChannelLogos />

      {/* Live Sports & Movies Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Sports */}
            <Card className="relative overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-neon-green group">
              <CardContent className="p-0">
                <div className="relative h-80">
                  <img
                    src={sportsLive}
                    alt="Live Sports"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                    <Trophy className="w-12 h-12 text-accent" />
                    <h3 className="text-3xl font-display font-bold">Live Sports & PPV</h3>
                    <p className="text-muted-foreground">
                      Never miss a game! Watch UFC, Boxing, NFL, NBA, Soccer, and more with instant access to all major sporting events.
                    </p>
                    <Button variant="neon" asChild>
                      <NavLink to="/channels">View Sports Channels</NavLink>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Movies */}
            <Card className="relative overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-neon-purple group">
              <CardContent className="p-0">
                <div className="relative h-80">
                  <img
                    src={moviesCinema}
                    alt="Movies & Entertainment"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                    <Film className="w-12 h-12 text-accent" />
                    <h3 className="text-3xl font-display font-bold">Movies & Shows</h3>
                    <p className="text-muted-foreground">
                      10,000+ movies and TV shows on demand. From blockbusters to classics, enjoy unlimited entertainment.
                    </p>
                    <Button variant="neon" asChild>
                      <NavLink to="/channels">Browse Content</NavLink>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why TelevooStream Cards */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                TelevooStream
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of television streaming
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-neon-purple hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="inline-flex p-4 bg-accent/10 rounded-xl">
                    <item.icon className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-display font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SetupGuide />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Plan
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing options to suit your viewing needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "border-accent shadow-neon-green scale-105"
                    : "border-border/50 hover:border-accent/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-accent to-primary text-accent-foreground px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                {plan.savings && (
                  <div className="bg-accent/10 text-accent text-center py-2 text-sm font-semibold">
                    {plan.savings}
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.popular ? "neon" : "outline-glow"}
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <NavLink to="/pricing">Get Started</NavLink>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Features */}
      <QualityFeatures />

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              What Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Customers Say
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied streamers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-neon-purple animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about TelevooStream
            </p>
          </div>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-left hover:text-accent transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url(${patternBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90" />
        <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Ready to Stream With TelevooStream?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of satisfied customers and experience premium IPTV streaming today
          </p>
          <Button
            variant="neon"
            size="xl"
            className="bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <NavLink to="/pricing">
              <Play className="mr-2 h-5 w-5" />
              Activate Subscription
            </NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
