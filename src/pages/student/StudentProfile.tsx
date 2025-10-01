import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StudentProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [skills, setSkills] = useState<string[]>(["Python", "Data Analysis"]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile saved",
      description: "Your profile has been updated successfully",
    });
    navigate("/student/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Card className="p-8 shadow-elevated">
          <h1 className="text-3xl font-bold mb-6 text-foreground">Complete Your Profile</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Resume Upload */}
            <div className="space-y-2">
              <Label>Upload Resume (PDF)</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  PDF (max 5MB) - Skills will be auto-extracted
                </p>
              </div>
            </div>

            {/* Academic Details */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="degree">Degree</Label>
                <Input id="degree" placeholder="B.Tech in Computer Science" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Input id="year" placeholder="3rd Year" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="institution">Institution</Label>
                <Input id="institution" placeholder="Your college name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cgpa">CGPA</Label>
                <Input id="cgpa" type="number" step="0.01" placeholder="8.5" />
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <Label>Skills</Label>
              <div className="flex gap-2 mb-2">
                <Input
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Add a skill"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                />
                <Button type="button" onClick={addSkill} variant="outline">
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                    <X
                      className="w-3 h-3 ml-2 cursor-pointer"
                      onClick={() => removeSkill(skill)}
                    />
                  </Badge>
                ))}
              </div>
            </div>

            {/* Preferences */}
            <div className="space-y-2">
              <Label htmlFor="preferences">Internship Preferences</Label>
              <Textarea
                id="preferences"
                placeholder="Preferred domains, locations, remote/in-person, duration..."
                rows={4}
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1 bg-primary">
                Save Profile
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/student/dashboard")}
              >
                Skip for Now
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default StudentProfile;
