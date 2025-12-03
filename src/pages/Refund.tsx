import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { RefreshCw, CheckCircle2, XCircle, AlertCircle } from "lucide-react";

const Refund = () => {
  const eligibilityCriteria = [
    "Request made within 7 days of initial subscription purchase",
    "Service experiencing persistent technical issues that we cannot resolve",
    "Duplicate charges or billing errors",
    "Service not as described or advertised",
  ];

  const nonRefundable = [
    "Requests made after the 7-day guarantee period",
    "Change of mind without technical or service issues",
    "Subscription renewals (only initial purchases qualify)",
    "Partial month refunds on active subscriptions",
    "Services already consumed or heavily used",
  ];

  const howToRequest = [
    {
      step: "1",
      title: "Contact Support",
      description:
        "Email us at support@televoostream.com with your account details and reason for refund request.",
    },
    {
      step: "2",
      title: "Provide Information",
      description:
        "Include your subscription details, order number, and a clear explanation of the issue.",
    },
    {
      step: "3",
      title: "Review Process",
      description:
        "Our team will review your request within 24-48 hours and may contact you for additional information.",
    },
    {
      step: "4",
      title: "Refund Processing",
      description:
        "If approved, refunds are processed within 5-7 business days to your original payment method.",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4">
            <RefreshCw className="w-12 h-12 text-accent" />
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold">
            Refund{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Last Updated: December 2, 2025
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-12 border-border/50">
          <CardContent className="p-8 space-y-4">
            <h2 className="text-2xl font-display font-bold">7-Day Money-Back Guarantee</h2>
            <p className="text-muted-foreground leading-relaxed">
              At TelevooStream, we are confident in the quality of our service. We offer a 7-day
              money-back guarantee on initial subscription purchases to ensure your complete satisfaction.
              If you're not happy with our service within the first 7 days, we'll refund your purchase,
              no questions asked.
            </p>
          </CardContent>
        </Card>

        {/* Eligibility Criteria */}
        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold mb-6">
            Refund{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Eligibility
            </span>
          </h2>
          <Card className="border-border/50">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6">
                You may be eligible for a full refund if any of the following conditions apply:
              </p>
              <ul className="space-y-4">
                {eligibilityCriteria.map((criteria, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{criteria}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Non-Refundable */}
        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold mb-6">
            Non-Refundable{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Situations
            </span>
          </h2>
          <Card className="border-border/50">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6">
                Please note that refunds will not be issued in the following circumstances:
              </p>
              <ul className="space-y-4">
                {nonRefundable.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* How to Request */}
        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold mb-6 text-center">
            How to Request a{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Refund
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {howToRequest.map((item, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-neon-purple animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <span className="text-xl font-display font-bold text-accent">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-lg">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <Card className="mb-12 border-accent/50 bg-gradient-to-r from-primary/10 to-accent/10">
          <CardContent className="p-8 space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-display font-bold">Important Notes</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>• Refunds are processed to the original payment method used for purchase</li>
              <li>• Processing time may vary depending on your bank or payment provider</li>
              <li>• Once a refund is approved, your account access will be terminated</li>
              <li>• Fraudulent refund requests may result in permanent account suspension</li>
              <li>• We reserve the right to refuse refunds that violate our terms of service</li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="border-accent/50 bg-gradient-to-r from-primary/10 to-accent/10">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl font-display font-bold">Need Help?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              If you have questions about our refund policy or need to request a refund, our support
              team is here to assist you 24/7.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="neon" size="lg" asChild>
                <NavLink to="/contact">Contact Support</NavLink>
              </Button>
              <Button variant="outline-glow" size="lg" asChild>
                <NavLink to="/faq">View FAQ</NavLink>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Refund;
