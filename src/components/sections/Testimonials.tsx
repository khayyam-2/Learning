import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Medical Student",
      avatar: "/placeholder.svg",
      rating: 5,
      content: "The AI tutor helped me understand complex medical concepts I struggled with for months. The personalized learning path is incredible!",
      badge: "Student",
      country: "🇵🇰 Pakistan"
    },
    {
      name: "Dr. Mohammad Khan",
      role: "Cardiologist",
      avatar: "/placeholder.svg",
      rating: 5,
      content: "As a doctor on this platform, I love how easy it is to manage appointments and reach patients globally. The integration with calendars is seamless.",
      badge: "Doctor",
      country: "🇸🇦 Saudi Arabia"
    },
    {
      name: "Ahmed Hassan",
      role: "Quran Teacher",
      avatar: "/placeholder.svg",
      rating: 5,
      content: "The Islamic education module is phenomenal. The AI Quran tutor helps students with pronunciation and tajweed in ways I never imagined possible.",
      badge: "Teacher",
      country: "🇪🇬 Egypt"
    },
    {
      name: "Fatima Ali",
      role: "Software Engineer",
      avatar: "/placeholder.svg",
      rating: 5,
      content: "I completed 3 programming courses here while working full-time. The flexible schedule and AI-powered quizzes made learning so much easier.",
      badge: "Professional",
      country: "🇦🇪 UAE"
    },
    {
      name: "Prof. James Wilson",
      role: "Physics Professor",
      avatar: "/placeholder.svg",
      rating: 5,
      content: "Teaching on this platform revolutionized my career. The analytics show exactly how students are progressing, and the revenue tracking is transparent.",
      badge: "Educator",
      country: "🇺🇸 USA"
    },
    {
      name: "Aisha Rahman",
      role: "Mother of 2",
      avatar: "/placeholder.svg",
      rating: 5,
      content: "My children love the Islamic learning section. The AI tutor is patient and the gamification keeps them engaged while learning the Quran.",
      badge: "Parent",
      country: "🇧🇩 Bangladesh"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient-hero">Loved by Learners</span>
            <br />
            <span className="text-foreground">Around the World</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join thousands of students, teachers, doctors, and parents who trust our platform 
            for their learning and professional needs.
          </p>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground ml-2">4.9</span>
            <span className="text-muted-foreground">(2,847 reviews)</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-0 shadow-soft">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`w-4 h-4 ${star <= testimonial.rating ? 'fill-accent text-accent' : 'text-muted-foreground/30'}`} 
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/80 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.badge}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.country}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gradient-primary mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gradient-primary mb-2">1,200+</div>
            <div className="text-sm text-muted-foreground">Expert Teachers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gradient-primary mb-2">800+</div>
            <div className="text-sm text-muted-foreground">Verified Doctors</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gradient-primary mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;