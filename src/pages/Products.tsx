import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Tv, MonitorPlay, Home, Headphones, Radio } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Products = () => {
  const productCategories = [
    {
      id: "roku-tv",
      name: "Roku TV",
      icon: MonitorPlay,
      description: "Smart TVs with built-in Roku streaming",
      image: "https://cigars.roku.com/v1/http%3A%2F%2Fimage.roku.com%2Fw%2Frapid%2Fimages%2Fundefined%2F0d343cb7-585a-43d9-9996-7c470bc76356.png",
      features: ["4K Ultra HD", "HDR10+", "Roku OS Built-in", "Thousands of Channels"],
    },
    {
      id: "smart-home",
      name: "Smart Home",
      icon: Home,
      description: "Connected devices for your smart home ecosystem",
      image: "https://cigars.roku.com/v1/http%3A%2F%2Fimage.roku.com%2Fw%2Frapid%2Fimages%2Fundefined%2F200aeaea-59cc-4544-8c2a-598fc30a18df.png",
      features: ["Voice Assistant", "WiFi Camera", "Smart Doorbell", "Home Automation"],
    },
    {
      id: "accessories",
      name: "Accessories",
      icon: Radio,
      description: "Premium accessories to enhance your experience",
      image: "https://cigars.roku.com/v1/http%3A%2F%2Fimage.roku.com%2Fw%2Frapid%2Fimages%2Fundefined%2F6c14f517-659b-4734-a25d-b183965ea311.png",
      features: ["Universal Remotes", "HDMI Cables", "Wall Mounts", "Streaming Sticks"],
    },
    {
      id: "audio",
      name: "Audio",
      icon: Headphones,
      description: "Premium sound systems and audio equipment",
      image: "https://cigars.roku.com/v1/http%3A%2F%2Fimage.roku.com%2Fw%2Frapid%2Fimages%2Fundefined%2F104d7338-902f-4900-9267-7bacaa526e01.png",
      features: ["Soundbars", "Wireless Speakers", "Home Theater", "Dolby Atmos"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Black Overlay */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1600&auto=format&fit=crop"
            alt="Products Background"
            className="w-full h-full object-cover"
          />
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
              Discover Our
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Premium Products
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Cutting-edge streaming devices and accessories designed for the ultimate entertainment experience
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Explore All Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our carefully curated selection of streaming devices and accessories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {productCategories.map((category, index) => (
              <Card 
                key={category.id}
                className="group overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4 p-3 rounded-xl bg-accent/20 backdrop-blur-md border border-accent/30 group-hover:scale-110 transition-transform">
                    <category.icon className="w-6 h-6 text-accent" />
                  </div>

                  {/* Category Name Overlay */}
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                  >
                    View {category.name}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Product Sections */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          {/* Players Section - Unique Layout 1 */}
          <div className="mb-32 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
                  <Tv className="w-4 h-4 text-accent" />
                  <span className="text-sm font-bold text-accent">IPTV Players</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold">
                  Stream Without Limits
                </h2>
                <p className="text-lg text-muted-foreground">
                  Experience the ultimate streaming with our high-performance IPTV players. Engineered for 4K HDR content, 
                  dual-band WiFi, and ultra-low latency for buffer-free entertainment.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {["4K HDR10+ Support", "Dolby Atmos Audio", "AI Upscaling", "Game Mode"].map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <NavLink to="/contact">
                  <Button size="lg" className="mt-6">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </NavLink>
              </div>
              <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-accent/30">
                  <img
                    src="https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&auto=format&fit=crop"
                    alt="IPTV Player"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent" />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-accent text-accent-foreground shadow-neon-green">
                  <div className="text-3xl font-bold">4K</div>
                  <div className="text-xs">Ultra HD</div>
                </div>
              </div>
            </div>
          </div>

          {/* Roku TV Section - Unique Layout 2 (Reversed) */}
          <div className="mb-32 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-1 animate-fade-in">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/30">
                  <img
                    src="https://cigars.roku.com/v1/http%3A%2F%2Fimage.roku.com%2Fw%2Frapid%2Fimages%2Fundefined%2F0d343cb7-585a-43d9-9996-7c470bc76356.png"
                    alt="Roku TV"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 to-transparent" />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-primary text-primary-foreground shadow-neon-blue">
                  <div className="text-3xl font-bold">Smart</div>
                  <div className="text-xs">Roku OS</div>
                </div>
              </div>
              <div className="space-y-6 lg:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                  <MonitorPlay className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold text-primary">Smart TV</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold">
                  Roku TV Excellence
                </h2>
                <p className="text-lg text-muted-foreground">
                  Discover smart TVs powered by Roku OS. Access thousands of streaming channels, 
                  voice control, and stunning 4K HDR picture quality all in one sleek package.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {["Roku OS Built-in", "Voice Remote", "HDR10+", "Free Live TV"].map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <NavLink to="/contact">
                  <Button size="lg" variant="outline" className="mt-6">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>

          {/* Smart Home Section - Unique Layout 3 (Full Width Banner) */}
          <div className="mb-32 max-w-7xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-accent/30">
              <img
                src="https://cigars.roku.com/v1/http%3A%2F%2Fimage.roku.com%2Fw%2Frapid%2Fimages%2Fundefined%2F200aeaea-59cc-4544-8c2a-598fc30a18df.png"
                alt="Smart Home"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
              
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-12 max-w-2xl animate-fade-in">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-md border border-accent/30 mb-6">
                    <Home className="w-4 h-4 text-accent" />
                    <span className="text-sm font-bold text-accent">Smart Home</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                    Your Connected Home Ecosystem
                  </h2>
                  <p className="text-lg text-gray-200 mb-8">
                    Transform your home with smart cameras, doorbells, and automation devices. 
                    Control everything from your smartphone or voice assistant.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <NavLink to="/contact">
                      <Button size="lg">
                        Explore Smart Home
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </NavLink>
                    <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white/30 hover:bg-white/20">
                      View Products
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Audio & Accessories - Unique Layout 4 (Side by Side Cards) */}
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Complete Your Setup
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Premium audio equipment and essential accessories for the perfect streaming experience
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Audio Card */}
              <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src="https://cigars.roku.com/v1/http%3A%2F%2Fimage.roku.com%2Fw%2Frapid%2Fimages%2Fundefined%2F104d7338-902f-4900-9267-7bacaa526e01.png"
                    alt="Audio"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  <div className="absolute top-6 left-6 p-4 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30">
                    <Headphones className="w-8 h-8 text-primary" />
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white mb-2">Premium Audio</h3>
                    <p className="text-gray-200 mb-4">
                      Immersive sound systems with Dolby Atmos, wireless connectivity, and crystal-clear audio.
                    </p>
                    <Button variant="outline" className="bg-white/10 backdrop-blur-md border-white/30 hover:bg-white/20">
                      Explore Audio
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Accessories Card */}
              <Card className="group overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src="https://cigars.roku.com/v1/http%3A%2F%2Fimage.roku.com%2Fw%2Frapid%2Fimages%2Fundefined%2F6c14f517-659b-4734-a25d-b183965ea311.png"
                    alt="Accessories"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  <div className="absolute top-6 left-6 p-4 rounded-xl bg-accent/20 backdrop-blur-md border border-accent/30">
                    <Radio className="w-8 h-8 text-accent" />
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white mb-2">Accessories</h3>
                    <p className="text-gray-200 mb-4">
                      Universal remotes, HDMI cables, wall mounts, and everything you need for the perfect setup.
                    </p>
                    <Button variant="outline" className="bg-white/10 backdrop-blur-md border-white/30 hover:bg-white/20">
                      View Accessories
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Upgrade Your Entertainment?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get in touch with our team to find the perfect products for your streaming setup
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <NavLink to="/contact">
                <Button size="lg">
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </NavLink>
              <NavLink to="/pricing">
                <Button size="lg" variant="outline">
                  View Pricing
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
