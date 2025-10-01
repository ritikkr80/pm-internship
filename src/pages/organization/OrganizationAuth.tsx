import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, ArrowLeft, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { GovBranding } from "@/components/GovBranding";
import { ThemeToggle } from "@/components/ThemeToggle";

const OrganizationAuth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      toast({
        title: "Welcome back! 🎉",
        description: "Successfully signed in",
      });
      navigate("/organization/dashboard");
      setIsLoading(false);
    }, 1000);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      toast({
        title: "Organization registered! ✨",
        description: "You can now post internships",
      });
      navigate("/organization/dashboard");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <GovBranding />
      
      <div className="flex items-center justify-center p-4 min-h-[calc(100vh-56px)]">
        <div className="w-full max-w-md">
          <div className="absolute top-4 right-4">
            <ThemeToggle />
          </div>

          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 hover-lift"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <Card className="p-8 shadow-lg animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-success to-success/80 flex items-center justify-center shadow-lg">
                <Building2 className="w-8 h-8 text-success-foreground" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-center mb-2 text-foreground">Organization Portal</h2>
            <p className="text-center text-muted-foreground mb-6">
              Connect with talented interns
            </p>

            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Register</TabsTrigger>
              </TabsList>

              <TabsContent value="signin">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="org-email">Organization Email</Label>
                    <Input 
                      id="org-email" 
                      type="email" 
                      placeholder="org@example.com" 
                      required 
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      required 
                      className="h-11"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-11 bg-success hover:bg-success/90 shadow-md" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="org-name">Organization Name</Label>
                    <Input 
                      id="org-name" 
                      type="text" 
                      placeholder="Your organization" 
                      required 
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="org-type">Organization Type</Label>
                    <Input 
                      id="org-type" 
                      type="text" 
                      placeholder="Company / NGO / Government" 
                      required 
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input 
                      id="signup-email" 
                      type="email" 
                      placeholder="contact@org.com" 
                      required 
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input 
                      id="signup-password" 
                      type="password" 
                      required 
                      className="h-11"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-11 bg-success hover:bg-success/90 shadow-md" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Registering..." : "Register Organization"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 p-4 rounded-xl bg-muted/50 flex items-start gap-3">
              <Shield className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                Partner with PM Internship Scheme to find diverse talent and contribute to nation building.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrganizationAuth;
