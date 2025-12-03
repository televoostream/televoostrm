import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "We collect information that you provide directly to us when creating an account, including your name, email address, payment information, and contact details. We also automatically collect certain information about your device and how you interact with our services, including IP address, browser type, viewing preferences, and usage patterns.",
    },
    {
      title: "2. How We Use Your Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services; process your transactions and send you related information; send you technical notices, updates, security alerts, and support messages; respond to your comments, questions, and customer service requests; communicate with you about products, services, offers, and events; and monitor and analyze trends, usage, and activities in connection with our services.",
    },
    {
      title: "3. Information Sharing and Disclosure",
      content:
        "We do not sell or rent your personal information to third parties. We may share your information with service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, and hosting services. These providers are bound by contractual obligations to keep your information confidential and use it only for the purposes for which we disclose it to them.",
    },
    {
      title: "4. Data Security",
      content:
        "We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. We use industry-standard encryption technologies when transferring and receiving consumer data. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
    },
    {
      title: "5. Data Retention",
      content:
        "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.",
    },
    {
      title: "6. Cookies and Tracking Technologies",
      content:
        "We use cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
    },
    {
      title: "7. Your Rights and Choices",
      content:
        "You have the right to access, update, or delete your personal information at any time. You may also object to processing of your personal information, ask us to restrict processing, or request portability of your information. You can exercise these rights by contacting us at the information provided below.",
    },
    {
      title: "8. Children's Privacy",
      content:
        "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.",
    },
    {
      title: "9. International Data Transfers",
      content:
        "Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. We will take appropriate steps to ensure that your personal information receives an adequate level of protection.",
    },
    {
      title: "10. Third-Party Links",
      content:
        "Our service may contain links to third-party websites or services that are not owned or controlled by TelevooStream. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.",
    },
    {
      title: "11. Changes to This Privacy Policy",
      content:
        "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date. You are advised to review this Privacy Policy periodically for any changes.",
    },
    {
      title: "12. California Privacy Rights",
      content:
        "If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA). This includes the right to know what personal information we collect, the right to delete your information, and the right to opt-out of the sale of your information (which we do not engage in).",
    },
    {
      title: "13. European Privacy Rights",
      content:
        "If you are located in the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR). This includes the right to access, correct, or delete your personal data, and the right to object to or restrict certain processing of your data.",
    },
    {
      title: "14. Contact Us",
      content:
        "If you have any questions about this Privacy Policy or our privacy practices, please contact us at support@televoostream.com. We are committed to resolving any privacy concerns you may have and ensuring your information is protected.",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4">
            <Shield className="w-12 h-12 text-accent" />
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold">
            Privacy{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Policy
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
              This Privacy Policy is established by TRIMURTI HOSIERY MILLS PRIVATE LIMITED (hereinafter referred to as "Company", "we", "us", or "our"), the owner and operator of TelevooStream.
              At TelevooStream, we are committed to protecting your privacy and ensuring the security of
              your personal information. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our IPTV streaming services. Please read this policy
              carefully to understand our practices regarding your personal data.
            </p>
          </CardContent>
        </Card>

        {/* Privacy Sections */}
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
          <CardContent className="p-8 text-center space-y-4">
            <h3 className="text-2xl font-display font-bold">Your Privacy Matters</h3>
            <p className="text-muted-foreground">
              We are dedicated to protecting your privacy and maintaining your trust. If you have any
              questions or concerns about this Privacy Policy or our data practices, please don't hesitate
              to contact us at{" "}
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

export default Privacy;
