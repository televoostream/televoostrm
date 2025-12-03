import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Shield, Zap, Clock, Award, Wifi } from "lucide-react";

const QualityFeatures = () => {
  const features = [
    {
      icon: Zap,
      title: "Buffer-Free Streaming",
      description: "High-performance servers ensure smooth playback without interruptions",
      highlight: "99.9% Uptime",
    },
    {
      icon: Award,
      title: "HD & 4K Quality",
      description: "Crystal-clear picture quality up to 4K Ultra HD resolution",
      highlight: "Premium Quality",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Military-grade encryption protects your viewing and personal data",
      highlight: "SSL Encrypted",
    },
    {
      icon: Clock,
      title: "Instant Activation",
      description: "Start watching immediately after subscription with zero waiting",
      highlight: "0 Setup Time",
    },
    {
      icon: Wifi,
      title: "Adaptive Streaming",
      description: "Automatically adjusts quality based on your internet speed",
      highlight: "Smart Delivery",
    },
    {
      icon: CheckCircle2,
      title: "No Contracts",
      description: "Cancel anytime with no long-term commitments or hidden fees",
      highlight: "Full Flexibility",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Premium{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Quality Guaranteed
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-leading technology and infrastructure for the best streaming experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-neon-green hover:-translate-y-2 animate-fade-in overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Highlight Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-accent/10 rounded-full">
                <span className="text-xs font-semibold text-accent">{feature.highlight}</span>
              </div>

              <CardContent className="p-8 space-y-4">
                <div className="inline-flex p-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl shadow-neon-green">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-display font-bold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>

              {/* Decorative Element */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto border-accent/50 bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="p-12">
              <div className="space-y-6">
                <div className="flex justify-center gap-8">
                  <div className="text-center">
                    <p className="text-4xl font-display font-bold text-accent mb-2">5,000+</p>
                    <p className="text-sm text-muted-foreground">Live Channels</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-display font-bold text-accent mb-2">10,000+</p>
                    <p className="text-sm text-muted-foreground">Movies & Shows</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-display font-bold text-accent mb-2">50K+</p>
                    <p className="text-sm text-muted-foreground">Happy Customers</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground">
                  Join thousands of satisfied streamers experiencing the future of television
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QualityFeatures;
