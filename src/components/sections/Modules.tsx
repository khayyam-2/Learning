import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Stethoscope, 
  Star, 
  Brain,
  Users,
  Calendar,
  TrendingUp,
  CheckCircle
} from "lucide-react";

const Modules = () => {
  const modules = [
    {
      id: "academy",
      title: "AI Academy",
      icon: Brain,
      description: "Personalized learning with AI tutors, smart quizzes, and adaptive content.",
      features: ["AI Chatbot Tutor", "Auto-Generated Quizzes", "Smart Flashcards", "Progress Analytics"],
      gradient: "bg-gradient-primary",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      badge: "Popular"
    },
    {
      id: "courses",
      title: "Course Marketplace",
      icon: GraduationCap,
      description: "Thousands of expert-led courses with certificates and practical projects.",
      features: ["Expert Instructors", "Live Classes", "Certificates", "Project-Based Learning"],
      gradient: "bg-gradient-secondary",
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary",
      badge: "Bestseller"
    },
    {
      id: "medical",
      title: "Medical Hub",
      icon: Stethoscope,
      description: "Connect with verified doctors for consultations and health monitoring.",
      features: ["Verified Doctors", "Online/Offline Visits", "Health Records", "Appointment Scheduling"],
      gradient: "bg-gradient-hero",
      iconBg: "bg-accent/10",
      iconColor: "text-accent",
      badge: "Trusted"
    },
    {
      id: "islamic",
      title: "Islamic Learning",
      icon: Star,
      description: "Comprehensive Quran and Islamic education with AI-powered features.",
      features: ["AI Quran Tutor", "Tajweed Correction", "Multi-language", "Hadith Database"],
      gradient: "bg-gradient-islamic",
      iconBg: "bg-warning/10",
      iconColor: "text-warning",
      badge: "Sacred"
    }
  ];

  return (
    <section id="modules" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient-hero">Powerful Modules</span>
            <br />
            <span className="text-foreground">For Every Learning Need</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover our specialized learning modules designed to provide comprehensive 
            education and professional services.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <Card key={module.id} className="group overflow-hidden border-0 shadow-medium hover:shadow-strong transition-all duration-300">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className={`${module.gradient} p-6 text-primary-foreground relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 right-4">
                        <Icon className="w-32 h-32 opacity-20" />
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 ${module.iconBg} bg-white/20 rounded-xl flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          {module.badge}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2">{module.title}</h3>
                      <p className="text-primary-foreground/90 leading-relaxed">
                        {module.description}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="space-y-3 mb-6">
                      {module.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className={`w-4 h-4 ${module.iconColor}`} />
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        className={`${module.gradient} hover:opacity-90 transition-smooth flex-1`}
                      >
                        Explore Module
                      </Button>
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Users className="w-4 h-4" />
            <span>Join 50,000+ learners worldwide</span>
          </div>
          <Button size="lg" className="bg-gradient-hero hover:opacity-90 transition-smooth">
            Start Your Learning Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Modules;