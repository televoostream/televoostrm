import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { HelpCircle, MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What is IPTV and how does TelevooStream work?",
          answer:
            "IPTV (Internet Protocol Television) delivers television content over the internet rather than through traditional cable or satellite. TelevooStream uses advanced streaming technology to bring you thousands of live channels and on-demand content directly to your devices. Simply connect to the internet, log in with your credentials, and start watching instantly.",
        },
        {
          question: "How do I sign up for TelevooStream?",
          answer:
            "Signing up is easy! Choose your preferred subscription plan on our pricing page, complete the payment process, and you'll receive your login credentials via email immediately. Your account is activated instantly, allowing you to start streaming right away.",
        },
        {
          question: "Is there a free trial available?",
          answer:
            "Yes! We offer a free demo so you can experience the quality of our service before committing to a subscription. Contact us through our contact page to request your free demo access.",
        },
      ],
    },
    {
      category: "Device Compatibility",
      questions: [
        {
          question: "What devices are compatible with TelevooStream?",
          answer:
            "TelevooStream works on a wide range of devices including Smart TVs (Samsung, LG, Sony), Android TV boxes, Amazon Fire Stick/Fire TV, Apple TV, MAG boxes, Android smartphones and tablets, iOS devices (iPhone/iPad), Windows and Mac computers, and more. One subscription works across all your devices.",
        },
        {
          question: "How many devices can I use simultaneously?",
          answer:
            "The number of simultaneous connections depends on your subscription plan. Our 1-month plan supports 3 devices, 3-month plan supports 5 devices, and our annual plan offers unlimited device connections. You can always upgrade your plan if you need more connections.",
        },
        {
          question: "Can I watch on multiple devices at the same time?",
          answer:
            "Yes! Depending on your subscription plan, you can stream on multiple devices simultaneously. This allows different family members to watch their favorite content at the same time on different devices.",
        },
      ],
    },
    {
      category: "Service & Quality",
      questions: [
        {
          question: "What is the streaming quality?",
          answer:
            "TelevooStream offers high-quality streaming with HD (1080p) available on all plans. Our premium annual plan also includes 4K Ultra HD content where available. The actual quality will depend on your internet speed and device capabilities.",
        },
        {
          question: "Will I experience buffering?",
          answer:
            "We use high-performance servers and advanced streaming technology to minimize buffering. With a stable internet connection of at least 10 Mbps for HD content, you should experience smooth, uninterrupted streaming. We recommend 25+ Mbps for 4K content.",
        },
        {
          question: "Does TelevooStream work internationally?",
          answer:
            "Yes! TelevooStream works anywhere in the world as long as you have a stable internet connection. This makes it perfect for travelers or expats who want to stay connected to their favorite content.",
        },
      ],
    },
    {
      category: "Content & Channels",
      questions: [
        {
          question: "What channels and content are included?",
          answer:
            "TelevooStream includes over 5,000 live channels covering sports (including PPV events), movies, entertainment, news, kids content, international channels, and more. We also offer 10,000+ on-demand movies and TV shows. Check our Channels page for a detailed list.",
        },
        {
          question: "Are PPV events included in the subscription?",
          answer:
            "Yes! All major PPV events including UFC fights, boxing matches, and WWE premium live events are included with your subscription at no extra cost. This is one of the best value features of TelevooStream.",
        },
        {
          question: "How often is content updated?",
          answer:
            "Our content library is constantly updated with new channels and on-demand content. Live channels stream 24/7, and we add new movies and shows regularly to keep our library fresh and exciting.",
        },
      ],
    },
    {
      category: "Billing & Support",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept various payment methods including major credit cards, debit cards, and popular online payment platforms. All transactions are processed securely to protect your financial information.",
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer:
            "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. For information about refunds, please check our refund policy page.",
        },
        {
          question: "How do I contact customer support?",
          answer:
            "Our 24/7 customer support team is always ready to help! You can reach us through our contact page, via email at support@televoostream.com, or through live chat. Premium and annual subscribers get priority support for faster response times.",
        },
        {
          question: "What if I have technical issues?",
          answer:
            "If you experience any technical difficulties, our support team is available 24/7 to assist you. We provide troubleshooting guides and personalized support to ensure you have the best streaming experience possible.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4">
            <HelpCircle className="w-12 h-12 text-accent" />
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about TelevooStream. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-12">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-6 animate-fade-in" style={{ animationDelay: `${catIndex * 0.1}s` }}>
              <h2 className="text-3xl font-display font-bold">{category.category}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, qIndex) => (
                  <AccordionItem
                    key={qIndex}
                    value={`item-${catIndex}-${qIndex}`}
                    className="border border-border/50 rounded-lg px-6 hover:border-accent/50 transition-colors"
                  >
                    <AccordionTrigger className="text-left hover:text-accent transition-colors py-6 hover:no-underline">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact Support Card */}
        <Card className="max-w-4xl mx-auto mt-20 border-accent/50 bg-gradient-to-r from-primary/10 to-accent/10">
          <CardContent className="p-8 md:p-12 text-center space-y-6">
            <div className="inline-flex p-4 bg-accent/10 rounded-full">
              <MessageCircle className="w-12 h-12 text-accent" />
            </div>
            <h2 className="text-3xl font-display font-bold">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our friendly support team is available 24/7 to help you with any questions or concerns. Get in touch and we'll respond as soon as possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="neon" size="lg" asChild>
                <NavLink to="/contact">Contact Support</NavLink>
              </Button>
              <Button variant="outline-glow" size="lg" asChild>
                <NavLink to="/pricing">View Plans</NavLink>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
