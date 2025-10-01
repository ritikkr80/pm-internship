import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const AdminAuth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      toast({
        title: "Admin access granted",
        description: "Welcome to admin portal",
      });
      navigate("/admin/dashboard");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <Card className="p-8 shadow-elevated">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
              <Shield className="w-6 h-6 text-accent-foreground" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6 text-foreground">Admin Portal</h2>

          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="admin-id">Admin ID</Label>
              <Input id="admin-id" type="text" placeholder="Enter admin ID" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full bg-accent" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In as Admin"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AdminAuth;
