import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Lock, 
  User, 
  Phone, 
  GraduationCap, 
  Stethoscope, 
  BookOpen, 
  Users,
  Chrome,
  Facebook,
  Apple
} from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "login" | "register";
  onModeChange: (mode: "login" | "register") => void;
}

const AuthModal = ({ isOpen, onClose, mode, onModeChange }: AuthModalProps) => {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const roles = [
    {
      id: "student",
      name: "Student/Parent",
      icon: GraduationCap,
      description: "Access courses, AI tutoring, and track progress",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: "teacher",
      name: "Teacher/Professor",
      icon: BookOpen,
      description: "Create courses, manage classes, earn revenue",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      id: "doctor",
      name: "Doctor/Professional",
      icon: Stethoscope,
      description: "Manage appointments, consultations, patients",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      id: "admin",
      name: "Admin/Organization",
      icon: Users,
      description: "Manage platform, users, and analytics",
      color: "text-warning",
      bgColor: "bg-warning/10"
    }
  ];

  const socialLogins = [
    { name: "Google", icon: Chrome, color: "hover:bg-red-50 hover:border-red-200" },
    { name: "Facebook", icon: Facebook, color: "hover:bg-blue-50 hover:border-blue-200" },
    { name: "Apple", icon: Apple, color: "hover:bg-gray-50 hover:border-gray-200" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log("Auth data:", { mode, role: selectedRole, ...formData });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            {mode === "login" ? "Welcome Back!" : "Join EduGlobal AI"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Social Login */}
          <div className="space-y-3">
            {socialLogins.map((social) => {
              const Icon = social.icon;
              return (
                <Button
                  key={social.name}
                  variant="outline"
                  className={`w-full ${social.color} transition-colors`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  Continue with {social.name}
                </Button>
              );
            })}
          </div>

          <div className="relative">
            <Separator className="my-4" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-background px-2 text-sm text-muted-foreground">
                or continue with email
              </span>
            </div>
          </div>

          {/* Role Selection for Registration */}
          {mode === "register" && (
            <div className="space-y-3">
              <Label className="text-sm font-medium">Choose your role</Label>
              <div className="grid grid-cols-2 gap-3">
                {roles.map((role) => {
                  const Icon = role.icon;
                  return (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => setSelectedRole(role.id)}
                      className={`p-3 rounded-lg border-2 transition-all text-left ${
                        selectedRole === role.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/30'
                      }`}
                    >
                      <div className={`w-8 h-8 ${role.bgColor} rounded-lg flex items-center justify-center mb-2`}>
                        <Icon className={`w-4 h-4 ${role.color}`} />
                      </div>
                      <div className="text-sm font-medium text-foreground mb-1">
                        {role.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {role.description}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "register" && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="pl-10"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
            </div>

            {mode === "register" && (
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="pl-10"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="pl-10"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                />
              </div>
            </div>

            {mode === "register" && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    className="pl-10"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  />
                </div>
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full bg-gradient-primary hover:opacity-90 transition-smooth"
            >
              {mode === "login" ? "Sign In" : "Create Account"}
            </Button>
          </form>

          {/* Footer */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              {mode === "login" ? "Don't have an account?" : "Already have an account?"}
            </p>
            <Button
              variant="ghost"
              onClick={() => onModeChange(mode === "login" ? "register" : "login")}
              className="text-primary hover:text-primary/80"
            >
              {mode === "login" ? "Sign up now" : "Sign in instead"}
            </Button>
          </div>

          {mode === "login" && (
            <div className="text-center">
              <Button variant="ghost" className="text-sm text-muted-foreground hover:text-primary">
                Forgot your password?
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;