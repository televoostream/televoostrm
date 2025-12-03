import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

const Terms = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using TelevooStream's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.",
    },
    {
      title: "2. Service Description",
      content:
        "TelevooStream provides IPTV streaming services that deliver television content, movies, sports, and other entertainment via internet protocol. Our service includes access to live channels, on-demand content, and pay-per-view events as described in your chosen subscription plan.",
    },
    {
      title: "3. User Accounts",
      content:
        "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. TelevooStream reserves the right to suspend or terminate accounts that violate these terms.",
    },
    {
      title: "4. Subscription and Payment",
      content:
        "Subscription fees are billed in advance on a monthly, quarterly, or annual basis depending on your chosen plan. All fees are non-refundable except as required by law or as specified in our refund policy. Prices are subject to change with 30 days' notice to subscribers.",
    },
    {
      title: "5. Acceptable Use Policy",
      content:
        "You agree not to use our services for any unlawful purpose or in any way that could damage, disable, overburden, or impair our servers or networks. You may not attempt to gain unauthorized access to any portion of our service, other accounts, computer systems, or networks connected to our service.",
    },
    {
      title: "6. Content and Copyright",
      content:
        "All content provided through TelevooStream, including but not limited to television programs, movies, images, and text, is protected by copyright and other intellectual property rights. You may not copy, reproduce, distribute, or create derivative works from our content without express written permission.",
    },
    {
      title: "7. Device Limitations",
      content:
        "The number of simultaneous device connections is limited based on your subscription plan. Sharing account credentials with unauthorized users is strictly prohibited and may result in immediate account termination without refund.",
    },
    {
      title: "8. Service Availability",
      content:
        "While we strive to provide uninterrupted service, TelevooStream does not guarantee that our services will be available at all times. We reserve the right to modify, suspend, or discontinue any aspect of our service at any time, with or without notice.",
    },
    {
      title: "9. Geographic Restrictions",
      content:
        "Certain content may be subject to geographic restrictions based on licensing agreements. While our service is accessible globally, some channels or programs may not be available in all regions.",
    },
    {
      title: "10. Privacy and Data Protection",
      content:
        "Your use of TelevooStream is also governed by our Privacy Policy. We collect, use, and protect your personal information in accordance with applicable data protection laws. Please review our Privacy Policy for detailed information.",
    },
    {
      title: "11. Disclaimer of Warranties",
      content:
        'TelevooStream services are provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that our services will meet your requirements or that they will be uninterrupted, secure, or error-free.',
    },
    {
      title: "12. Limitation of Liability",
      content:
        "TelevooStream shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services. Our total liability to you for all claims shall not exceed the amount you paid for our services in the 12 months preceding the claim.",
    },
    {
      title: "13. Indemnification",
      content:
        "You agree to indemnify and hold TelevooStream, its officers, directors, employees, and agents harmless from any claims, damages, losses, liabilities, and expenses (including attorney's fees) arising out of your use of our services or violation of these terms.",
    },
    {
      title: "14. Termination",
      content:
        "We reserve the right to terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including breach of these Terms of Use. Upon termination, your right to use our services will cease immediately.",
    },
    {
      title: "15. Changes to Terms",
      content:
        "TelevooStream reserves the right to modify these Terms of Use at any time. We will notify users of any material changes via email or through our service. Your continued use of our services after such modifications constitutes your acceptance of the updated terms.",
    },
    {
      title: "16. Governing Law and Jurisdiction",
      content:
        "These Terms of Use shall be governed by and construed in accordance with the laws of India, without regard to conflict of law provisions. The courts of [City], India shall have exclusive jurisdiction over any disputes arising from these terms or your use of our services. TRIMURTI HOSIERY MILLS PRIVATE LIMITED is a company registered under the Companies Act, 2013 in India.",
    },
    {
      title: "17. Company Information and Contact",
      content:
        "TRIMURTI HOSIERY MILLS PRIVATE LIMITED is the legal owner and operator of TelevooStream. If you have any questions about these Terms of Use, please contact us at support@televoostream.com. For legal matters, you may write to us at our registered office address. We are committed to addressing your concerns and ensuring a positive experience with our service.",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4">
            <FileText className="w-12 h-12 text-accent" />
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold">
            Terms of{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Use
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Last Updated: December 3, 2025
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            TRIMURTI HOSIERY MILLS PRIVATE LIMITED
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8 border-border/50">
          <CardContent className="p-8">
            <p className="text-muted-foreground leading-relaxed">
              Welcome to TelevooStream, owned and operated by TRIMURTI HOSIERY MILLS PRIVATE LIMITED ("Company", "we", "us", or "our"). These Terms of Use ("Terms") constitute a legally binding agreement between you and the Company governing your access to and use of our IPTV streaming services. Please read these terms carefully before using our services. By accessing or using TelevooStream, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
            </p>
          </CardContent>
        </Card>

        {/* Terms Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-accent/50 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl font-display font-bold">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <Card className="mt-12 border-accent/50 bg-gradient-to-r from-primary/10 to-accent/10">
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">
              By using TelevooStream, you acknowledge that you have read and understood these Terms of
              Use and agree to be bound by them. If you have any questions, please contact us at{" "}
              <a href="mailto:support@televoostream.com" className="text-accent hover:underline">
                support@televoostream.com
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;
