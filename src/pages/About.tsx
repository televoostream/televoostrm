import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Tv, Target, Users, Award, Shield, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide accessible, high-quality entertainment streaming to viewers worldwide, breaking down geographical and financial barriers.",
    },
    {
      icon: Users,
      title: "Customer First",
      description:
        "Every decision we make puts our customers at the center. Your satisfaction and viewing experience are our top priorities.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in streaming quality, channel selection, and customer service to ensure premium experiences.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "Your privacy and security are paramount. We use advanced encryption and secure systems to protect your data and viewing habits.",
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "5,000+", label: "Live Channels" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4">
            <Tv className="w-12 h-12 text-accent" />
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TelevooStream
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionizing the way you experience television streaming with premium content and exceptional service.
          </p>
        </div>

        {/* Story Section */}
        <Card className="mb-20 border-border/50 animate-fade-in">
          <CardContent className="p-8 md:p-12 space-y-6">
            <h2 className="text-3xl font-display font-bold">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                TelevooStream was founded with a simple yet powerful vision: to make premium television
                content accessible to everyone, everywhere. We recognized that traditional cable and
                satellite services were expensive, inflexible, and often failed to meet the needs of
                modern viewers who wanted content on their terms.
              </p>
              <p>
                Starting as a small team of technology enthusiasts and entertainment lovers, we've grown
                into a leading IPTV service provider trusted by over 50,000 customers worldwide. Our
                commitment to quality, reliability, and customer satisfaction has been the foundation of
                our success.
              </p>
              <p>
                Today, TelevooStream delivers thousands of channels and on-demand content to viewers
                across the globe. We continuously invest in our infrastructure, expand our content
                library, and improve our service to ensure we remain at the forefront of streaming
                technology. Our journey is driven by one simple goal: your satisfaction.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Core Values
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-neon-purple hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="inline-flex p-4 bg-accent/10 rounded-xl">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <Card className="border-accent/50 bg-gradient-to-r from-primary/10 to-accent/10 mb-20">
          <CardContent className="p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <p className="text-4xl md:text-5xl font-display font-bold text-accent">
                    {stat.number}
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TelevooStream
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-neon-green">
              <CardContent className="p-8 space-y-4 text-center">
                <div className="inline-flex p-4 bg-accent/10 rounded-full">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  High-performance servers ensure smooth, buffer-free streaming across all devices.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-neon-green">
              <CardContent className="p-8 space-y-4 text-center">
                <div className="inline-flex p-4 bg-accent/10 rounded-full">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold">Secure & Private</h3>
                <p className="text-muted-foreground">
                  Military-grade encryption protects your data and viewing activities at all times.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-neon-green">
              <CardContent className="p-8 space-y-4 text-center">
                <div className="inline-flex p-4 bg-accent/10 rounded-full">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold">Expert Support</h3>
                <p className="text-muted-foreground">
                  24/7 customer support team ready to assist with any questions or technical issues.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="border-accent/50 bg-gradient-to-r from-primary/10 to-accent/10">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl font-display font-bold">
              Ready to Experience Premium Streaming?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers and discover why TelevooStream is the preferred
              choice for IPTV streaming.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="neon" size="lg" asChild>
                <NavLink to="/pricing">View Plans</NavLink>
              </Button>
              <Button variant="outline-glow" size="lg" asChild>
                <NavLink to="/contact">Contact Us</NavLink>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
