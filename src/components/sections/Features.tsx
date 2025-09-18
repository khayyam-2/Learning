import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  Stethoscope, 
  Brain, 
  Star,
  Users, 
  Award,
  MessageCircle,
  CreditCard,
  Shield,
  Zap
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Course Marketplace",
      description: "Access thousands of courses from expert teachers worldwide with AI-powered recommendations.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Stethoscope,
      title: "Doctor Consultations",
      description: "Book physical or online appointments with verified medical professionals and specialists.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Brain,
      title: "AI Learning Tools",
      description: "Smart chatbots, auto-generated quizzes, flashcards, and plagiarism detection powered by AI.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Star,
      title: "Islamic Education",
      description: "Complete Quran learning with AI tutor, tajweed correction, translations, and hadith search.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Users,
      title: "Live Classes",
      description: "Interactive live sessions with Zoom, Google Meet, and Microsoft Teams integration.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Earn verified certificates with QR codes upon course completion and skill assessment.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: MessageCircle,
      title: "Smart Notifications",
      description: "WhatsApp and email reminders for classes, appointments, and important updates.",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      icon: CreditCard,
      title: "Global Payments",
      description: "Secure payments with Stripe, PayPal, JazzCash, Easypaisa, and bank transfers.",
      color: "text-warning",
      bgColor: "bg-warning/10",
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Enterprise-grade security with encrypted data and GDPR compliance for user protection.",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
    {
      icon: Zap,
      title: "AI Analytics",
      description: "Detailed progress tracking and performance analytics for students, teachers, and admins.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient-hero">Everything You Need</span>
            <br />
            <span className="text-foreground">In One Platform</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our comprehensive platform combines the best of online education, healthcare, 
            and AI technology to provide an unmatched learning experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-0 shadow-soft"
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;