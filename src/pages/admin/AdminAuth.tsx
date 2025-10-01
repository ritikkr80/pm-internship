import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, ArrowLeft, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { GovBranding } from "@/components/GovBranding";
import { ThemeToggle } from "@/components/ThemeToggle";

const AdminAuth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      toast({
        title: "Admin access granted 🔐",
        description: "Welcome to the control center",
      });
      navigate("/admin/dashboard");
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

          <Card className="p-8 shadow-lg animate-fade-in border-2 border-accent/20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-center mb-2 text-foreground">Admin Portal</h2>
            <p className="text-center text-muted-foreground mb-6">
              Secure access for administrators only
            </p>

            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-id">Admin ID</Label>
                <Input 
                  id="admin-id" 
                  type="text" 
                  placeholder="Enter admin ID" 
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
                className="w-full h-11 bg-accent hover:bg-accent/90 shadow-md" 
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : "Sign In as Admin"}
              </Button>
            </form>

            <div className="mt-6 p-4 rounded-xl bg-accent/10 border border-accent/20 flex items-start gap-3">
              <Lock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                This portal is restricted to authorized personnel only. All access attempts are logged and monitored.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminAuth;
