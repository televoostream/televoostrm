import { Card, CardContent } from "@/components/ui/card";
import { 
  Tv, 
  Monitor, 
  Smartphone, 
  Tablet,
  Zap, 
  Shield, 
  Headphones, 
  CheckCircle2,
  Clock,
  Globe,
  Download,
  Lock,
  TrendingUp,
  Users,
  Video,
  Star
} from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: Tv,
      title: "5,000+ Live Channels",
      description: "Access an extensive library of premium channels from around the world, covering sports, movies, news, entertainment, and more.",
      color: "accent"
    },
    {
      icon: Video,
      title: "4K Ultra HD Quality",
      description: "Experience crystal-clear streaming with 4K Ultra HD resolution. Enjoy your favorite content in the highest quality available.",
      color: "primary"
    },
    {
      icon: Zap,
      title: "Zero Buffering",
      description: "Our high-speed servers ensure smooth, uninterrupted streaming. Say goodbye to buffering and loading screens forever.",
      color: "accent"
    },
    {
      icon: Monitor,
      title: "Multi-Device Support",
      description: "Watch on Smart TVs, smartphones, tablets, computers, Fire Stick, Apple TV, and more. One subscription, unlimited devices.",
      color: "primary"
    }
  ];

  const additionalFeatures = [
    {
      icon: Clock,
      title: "Instant Activation",
      description: "Start streaming immediately after signup. No waiting, no delays."
    },
    {
      icon: Shield,
      title: "Secure Streaming",
      description: "Military-grade encryption protects your privacy and viewing activity."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert support team available around the clock to help you."
    },
    {
      icon: Globe,
      title: "Global Content",
      description: "Access channels and content from over 50 countries worldwide."
    },
    {
      icon: Download,
      title: "Cloud DVR",
      description: "Record your favorite shows and watch them anytime, anywhere."
    },
    {
      icon: Lock,
      title: "Parental Controls",
      description: "Keep your family safe with comprehensive parental control features."
    },
    {
      icon: TrendingUp,
      title: "Regular Updates",
      description: "New channels and features added regularly at no extra cost."
    },
    {
      icon: Users,
      title: "Multiple Profiles",
      description: "Create separate profiles for each family member with personalized recommendations."
    },
    {
      icon: Star,
      title: "PPV Events",
      description: "Watch exclusive pay-per-view sports and entertainment events live."
    }
  ];

  const devices = [
    { icon: Tv, name: "Smart TV", description: "Samsung, LG, Sony, and more" },
    { icon: Monitor, name: "Computer", description: "Windows, Mac, Linux" },
    { icon: Smartphone, name: "Mobile", description: "Android & iOS" },
    { icon: Tablet, name: "Tablet", description: "iPad & Android tablets" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-semibold">
              ✨ Premium Features
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Perfect Streaming
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the ultimate IPTV service with cutting-edge features designed for seamless entertainment
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="group border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-neon-green hover:-translate-y-2 animate-fade-in bg-gradient-to-br from-card to-card/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className={`p-4 rounded-2xl bg-${feature.color}/10 w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-10 h-10 text-${feature.color}`} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Plus Many More{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Premium Features
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              All included in every subscription plan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-neon-purple group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-accent/10 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Compatible Devices Section */}
        <div className="bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-3xl p-12 mb-20 border border-border/50">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Watch on{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                All Your Devices
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              One subscription works seamlessly across all platforms
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {devices.map((device, index) => (
              <Card 
                key={index}
                className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-neon-green hover:-translate-y-2 bg-card/50 backdrop-blur-sm group"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <device.icon className="w-12 h-12 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{device.name}</h3>
                  <p className="text-sm text-muted-foreground">{device.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Why{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TelevooStream?
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-border/50 hover:border-accent/50 transition-all p-8 text-center group hover:shadow-neon-green">
              <CardContent className="p-0">
                <div className="text-5xl font-display font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                  99.9%
                </div>
                <p className="text-lg font-semibold mb-2">Uptime Guarantee</p>
                <p className="text-sm text-muted-foreground">Reliable service you can count on</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all p-8 text-center group hover:shadow-neon-purple">
              <CardContent className="p-0">
                <div className="text-5xl font-display font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  #1
                </div>
                <p className="text-lg font-semibold mb-2">Market Leader</p>
                <p className="text-sm text-muted-foreground">Trusted by millions worldwide</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-accent/50 transition-all p-8 text-center group hover:shadow-neon-green">
              <CardContent className="p-0">
                <div className="text-5xl font-display font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                  24/7
                </div>
                <p className="text-lg font-semibold mb-2">Customer Support</p>
                <p className="text-sm text-muted-foreground">Always here to help you</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
