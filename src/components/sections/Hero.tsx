import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Stethoscope, Brain, Star } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  const stats = [
    { number: "50K+", label: "Students" },
    { number: "1,200+", label: "Teachers" },
    { number: "800+", label: "Doctors" },
    { number: "99%", label: "Success Rate" },
  ];

  const floatingIcons = [
    { Icon: BookOpen, position: "top-20 left-10", delay: "0s" },
    { Icon: Stethoscope, position: "top-32 right-16", delay: "0.5s" },
    { Icon: Brain, position: "bottom-32 left-16", delay: "1s" },
    { Icon: Star, position: "bottom-20 right-10", delay: "1.5s" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Floating Background Icons */}
      {floatingIcons.map(({ Icon, position, delay }, index) => (
        <div
          key={index}
          className={`absolute ${position} opacity-10 animate-pulse hidden lg:block`}
          style={{ animationDelay: delay }}
        >
          <Icon className="w-24 h-24 text-primary" />
        </div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="text-sm font-medium text-primary">🚀 AI-Powered Global Education Platform</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="text-gradient-hero">Learn, Heal & Grow</span>
            <br />
            <span className="text-foreground">with AI Excellence</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            The world's most comprehensive education platform combining 
            <span className="text-primary font-medium"> AI tutoring</span>, 
            <span className="text-secondary font-medium"> expert courses</span>, 
            <span className="text-accent font-medium"> medical consultations</span>, and 
            <span className="text-primary font-medium"> Islamic education</span> in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              onClick={onGetStarted}
              className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-medium text-lg px-8 py-4 h-auto group"
            >
              Start Learning Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 h-auto border-2 hover:bg-gradient-primary hover:text-primary-foreground hover:border-transparent transition-smooth"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;