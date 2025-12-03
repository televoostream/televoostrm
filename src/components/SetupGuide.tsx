import { Card, CardContent } from "@/components/ui/card";
import { Check, Download, Tv, PlayCircle } from "lucide-react";

const SetupGuide = () => {
  const steps = [
    {
      icon: Check,
      title: "Subscribe",
      description: "Choose your plan and complete the secure checkout process",
      color: "from-primary to-primary/50",
    },
    {
      icon: Download,
      title: "Get Credentials",
      description: "Receive your login details instantly via email",
      color: "from-accent to-accent/50",
    },
    {
      icon: Tv,
      title: "Install App",
      description: "Download our app on your preferred device",
      color: "from-primary to-accent",
    },
    {
      icon: PlayCircle,
      title: "Start Watching",
      description: "Login and enjoy unlimited streaming immediately",
      color: "from-accent to-primary",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Get Started in{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              4 Easy Steps
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Set up your TelevooStream subscription in minutes and start watching instantly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-neon-purple hover:-translate-y-2 animate-slide-up overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-bl-3xl flex items-center justify-center">
                <span className="text-2xl font-display font-bold text-accent">{index + 1}</span>
              </div>

              <CardContent className="p-8 space-y-6">
                <div className={`inline-flex p-4 bg-gradient-to-br ${step.color} rounded-xl shadow-neon-purple`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>

              {/* Connecting Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
              )}
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center space-y-4">
          <Card className="max-w-3xl mx-auto border-accent/50 bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-accent/10 rounded-full">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-semibold text-lg mb-2">
                    Instant Activation Guaranteed
                  </h4>
                  <p className="text-muted-foreground">
                    Your account is activated immediately upon payment. No waiting, no technical setup required. Start streaming within minutes of subscription.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SetupGuide;
