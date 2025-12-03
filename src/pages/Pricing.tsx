import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Tv, Shield, Zap, Headphones } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "1 Month",
      price: "$19.99",
      period: "/month",
      features: [
        "5,000+ Live HD Channels",
        "10,000+ Movies & Shows",
        "Multi-Device Support (3 devices)",
        "24/7 Customer Support",
        "PPV Events Included",
        "No Contract Required",
        "HD Quality Streaming",
        "Instant Activation",
      ],
      popular: false,
    },
    {
      name: "3 Months",
      price: "$49.99",
      period: "/3 months",
      savings: "Save 17%",
      originalPrice: "$59.97",
      features: [
        "5,000+ Live HD Channels",
        "10,000+ Movies & Shows",
        "Multi-Device Support (5 devices)",
        "24/7 Priority Support",
        "All PPV Events Included",
        "Extended Coverage",
        "Full HD & 4K Quality",
        "Instant Activation",
      ],
      popular: true,
    },
    {
      name: "12 Months",
      price: "$149.99",
      period: "/year",
      savings: "Best Value - Save 37%",
      originalPrice: "$239.88",
      features: [
        "All Premium Channels",
        "Unlimited Movies & Shows",
        "Unlimited Devices",
        "VIP Support Line",
        "All PPV Events Free",
        "Exclusive Content Access",
        "4K Ultra HD Quality",
        "Instant Activation",
      ],
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: Tv,
      title: "Premium Content",
      description: "Access to thousands of channels and on-demand content",
    },
    {
      icon: Shield,
      title: "Secure Streaming",
      description: "Military-grade encryption for your privacy and security",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "High-speed servers for buffer-free streaming experience",
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "24/7 customer support team ready to assist you",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-display font-bold">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible subscription options to match your streaming needs. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 animate-fade-in ${
                plan.popular
                  ? "border-accent shadow-neon-green scale-105"
                  : "border-border/50 hover:border-accent/50 hover:shadow-neon-purple"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-accent to-primary text-accent-foreground px-6 py-2 text-sm font-bold">
                  Most Popular
                </div>
              )}
              {plan.savings && (
                <div className="bg-accent/10 text-accent text-center py-3 text-sm font-semibold">
                  {plan.savings}
                </div>
              )}
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                  {plan.originalPrice && (
                    <p className="text-muted-foreground line-through text-sm">
                      {plan.originalPrice}
                    </p>
                  )}
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
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
                  <NavLink to="/contact">Subscribe Now</NavLink>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            What's Included in{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Every Plan
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-neon-green hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="inline-flex p-4 bg-accent/10 rounded-xl">
                    <benefit.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <Card className="max-w-4xl mx-auto mt-20 border-accent/50 bg-gradient-to-r from-primary/10 to-accent/10">
          <CardContent className="p-8 md:p-12 text-center space-y-6">
            <div className="inline-flex p-4 bg-accent/10 rounded-full">
              <Shield className="w-12 h-12 text-accent" />
            </div>
            <h2 className="text-3xl font-display font-bold">
              Satisfaction Guaranteed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're confident you'll love TelevooStream. If you're not completely satisfied, check our refund policy for details on our satisfaction guarantee.
            </p>
            <Button variant="outline-glow" size="lg" asChild>
              <NavLink to="/refund">View Refund Policy</NavLink>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
