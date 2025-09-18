import { useState } from "react";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Modules from "../components/sections/Modules";
import Testimonials from "../components/sections/Testimonials";
import Footer from "../components/layout/Footer";
import AuthModal from "../components/auth/AuthModal";

const Index = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const handleAuthOpen = (mode: "login" | "register") => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header onAuthOpen={handleAuthOpen} />
      
      <main>
        <Hero onGetStarted={() => handleAuthOpen("register")} />
        <Features />
        <Modules />
        <Testimonials />
      </main>

      <Footer />

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </div>
  );
};

export default Index;