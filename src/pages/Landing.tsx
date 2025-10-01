import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Building2, Shield } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                PM Internship Smart Allocation Engine
              </h1>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            AI-powered platform connecting students with meaningful internship opportunities
            through intelligent matching and equitable allocation
          </p>
        </div>

        {/* Portal Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Student Portal</h2>
              <p className="text-muted-foreground">
                Create your profile, showcase skills, and get matched with perfect internship opportunities
              </p>
              <Button 
                onClick={() => navigate("/student")} 
                className="w-full bg-primary hover:bg-primary/90"
              >
                Student Login
              </Button>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Organization Portal</h2>
              <p className="text-muted-foreground">
                Post internships, connect with talented interns, and build your future team
              </p>
              <Button 
                onClick={() => navigate("/organization")} 
                className="w-full bg-secondary hover:bg-secondary/90"
              >
                Organization Login
              </Button>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                <Shield className="w-8 h-8 text-accent-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Admin Portal</h2>
              <p className="text-muted-foreground">
                Monitor allocations, track diversity metrics, and ensure fair opportunities for all
              </p>
              <Button 
                onClick={() => navigate("/admin")} 
                className="w-full bg-accent hover:bg-accent/90"
              >
                Admin Login
              </Button>
            </div>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Powered by AI & Fairness
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-muted/50">
              <h4 className="font-semibold text-lg mb-2 text-foreground">Smart Matching</h4>
              <p className="text-muted-foreground">
                NLP-based skill extraction and content-based recommendation
              </p>
            </div>
            <div className="p-6 rounded-lg bg-muted/50">
              <h4 className="font-semibold text-lg mb-2 text-foreground">Explainable AI</h4>
              <p className="text-muted-foreground">
                Understand why you were matched with transparent allocation reasons
              </p>
            </div>
            <div className="p-6 rounded-lg bg-muted/50">
              <h4 className="font-semibold text-lg mb-2 text-foreground">Equity First</h4>
              <p className="text-muted-foreground">
                Ensuring representation across institutions, regions, and demographics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
