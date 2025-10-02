import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { GovBranding } from "../components/GovBranding";
import { ThemeToggle } from "../components/ThemeToggle";

import { useNavigate } from "react-router-dom";
import { GraduationCap, Building2, Shield, Sparkles, Target, Users } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <GovBranding />
      
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Powered by AI & Fairness</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-success to-accent bg-clip-text text-transparent">
              PM Internship Smart
            </span>
            <br />
            <span className="text-foreground">Allocation Engine</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Connecting talented students with meaningful internship opportunities through 
            intelligent matching and equitable allocation
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50">
              <Target className="w-5 h-5 text-primary" />
              <span className="font-medium">Smart Matching</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50">
              <Sparkles className="w-5 h-5 text-success" />
              <span className="font-medium">Explainable AI</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50">
              <Users className="w-5 h-5 text-accent" />
              <span className="font-medium">Equity First</span>
            </div>
          </div>
        </div>

        {/* Portal Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <Card className="group p-8 hover-lift cursor-pointer border-2 hover:border-primary transition-all duration-300 animate-slide-up"
                onClick={() => navigate("/student")}
                style={{ animationDelay: '0.1s' }}>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <GraduationCap className="w-10 h-10 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Student Portal</h2>
              <p className="text-muted-foreground leading-relaxed">
                Build your profile, showcase skills, and discover perfect internship matches with AI-powered recommendations
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90 shadow-md">
                Enter as Student
              </Button>
            </div>
          </Card>

          <Card className="group p-8 hover-lift cursor-pointer border-2 hover:border-success transition-all duration-300 animate-slide-up"
                onClick={() => navigate("/organization")}
                style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-success to-success/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Building2 className="w-10 h-10 text-success-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Organization Portal</h2>
              <p className="text-muted-foreground leading-relaxed">
                Post internships, find talented candidates, and build diverse teams with intelligent matching
              </p>
              <Button className="w-full bg-success hover:bg-success/90 shadow-md">
                Enter as Organization
              </Button>
            </div>
          </Card>

          <Card className="group p-8 hover-lift cursor-pointer border-2 hover:border-accent transition-all duration-300 animate-slide-up"
                onClick={() => navigate("/admin")}
                style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Shield className="w-10 h-10 text-accent-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Admin Portal</h2>
              <p className="text-muted-foreground leading-relaxed">
                Monitor allocations, track diversity metrics, and ensure fairness across all opportunities
              </p>
              <Button className="w-full bg-accent hover:bg-accent/90 shadow-md">
                Enter as Admin
              </Button>
            </div>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-24 max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            How It Works
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 animate-slide-up">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-lg mb-3 text-foreground">Smart Matching</h4>
              <p className="text-muted-foreground leading-relaxed">
                Advanced NLP extracts skills from resumes and matches them with internship requirements using AI
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-success/5 to-success/10 border border-success/20 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-success" />
              </div>
              <h4 className="font-bold text-lg mb-3 text-foreground">Explainable AI</h4>
              <p className="text-muted-foreground leading-relaxed">
                Clear explanations for every match, helping you understand allocation decisions
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-bold text-lg mb-3 text-foreground">Fairness & Equity</h4>
              <p className="text-muted-foreground leading-relaxed">
                Ensures representation across Tier-2/3 colleges, rural regions, and diverse demographics
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-2xl bg-muted/50">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent mb-2">
              1000+
            </div>
            <div className="text-sm text-muted-foreground">Students Matched</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-muted/50">
            <div className="text-4xl font-bold bg-gradient-to-r from-success to-accent bg-clip-text text-transparent mb-2">
              85+
            </div>
            <div className="text-sm text-muted-foreground">Organizations</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-muted/50">
            <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
              95%
            </div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-muted/50">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              68%
            </div>
            <div className="text-sm text-muted-foreground">From Tier-2/3</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Government of India | PM Internship Scheme</p>
          <p className="mt-2">Building an inclusive future through equitable opportunities</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
