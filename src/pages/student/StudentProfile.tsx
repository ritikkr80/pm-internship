import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Upload, X, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { GovBranding } from "@/components/GovBranding";
import { ThemeToggle } from "@/components/ThemeToggle";

const StudentProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [skills, setSkills] = useState<string[]>(["Python", "Data Analysis"]);
  const [newSkill, setNewSkill] = useState("");

  const steps = [
    { number: 1, title: "Academic", icon: "🎓" },
    { number: 2, title: "Skills", icon: "⚡" },
    { number: 3, title: "Preferences", icon: "🎯" },
  ];

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
      title: "Profile saved successfully! ✨",
      description: "Your profile is now ready for matching",
    });
    navigate("/student/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <GovBranding />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

        {/* Stepper */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all ${
                    currentStep >= step.number
                      ? 'bg-primary text-primary-foreground shadow-lg scale-110'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {currentStep > step.number ? <CheckCircle2 className="w-6 h-6" /> : step.icon}
                  </div>
                  <span className={`text-sm font-medium mt-2 ${
                    currentStep >= step.number ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {step.title}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div className={`h-1 flex-1 mx-4 rounded transition-all ${
                    currentStep > step.number ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="p-8 shadow-lg animate-fade-in">
          <h1 className="text-3xl font-bold mb-6 text-foreground">
            Complete Your Profile
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Resume & Academic */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Upload Resume (PDF)</Label>
                  <div className="border-2 border-dashed border-primary/30 rounded-2xl p-8 text-center hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group">
                    <Upload className="w-10 h-10 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                    <p className="font-medium text-foreground mb-1">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-sm text-muted-foreground">
                      PDF (max 5MB) • Skills will be auto-extracted using AI
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="degree">Degree Program</Label>
                    <Input id="degree" placeholder="B.Tech in Computer Science" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Current Year</Label>
                    <Input id="year" placeholder="3rd Year" className="h-11" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="institution">Institution Name</Label>
                    <Input id="institution" placeholder="Your college/university" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cgpa">CGPA</Label>
                    <Input id="cgpa" type="number" step="0.01" placeholder="8.5" className="h-11" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Skills */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Your Skills</Label>
                  <div className="flex gap-2">
                    <Input
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="Add a skill (e.g., Python, React, Design)"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                      className="h-11"
                    />
                    <Button type="button" onClick={addSkill} className="px-6 bg-primary">
                      Add
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 min-h-[100px] p-4 rounded-xl bg-muted/50 border-2 border-border">
                    {skills.length === 0 ? (
                      <p className="text-muted-foreground text-sm">No skills added yet. Start adding your skills!</p>
                    ) : (
                      skills.map((skill) => (
                        <Badge key={skill} className="px-4 py-2 text-sm bg-primary hover:bg-primary/90">
                          {skill}
                          <X
                            className="w-4 h-4 ml-2 cursor-pointer hover:scale-110 transition-transform"
                            onClick={() => removeSkill(skill)}
                          />
                        </Badge>
                      ))
                    )}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="flex gap-2 mb-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <p className="font-semibold text-foreground">Auto-detected Skills</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    After uploading your resume, AI will suggest additional skills
                  </p>
                </div>
              </div>
            )}

            {/* Step 3: Preferences */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-3">
                  <Label htmlFor="domains" className="text-base font-semibold">Preferred Domains</Label>
                  <Input 
                    id="domains" 
                    placeholder="e.g., Software Development, Data Science, Design" 
                    className="h-11"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Preferred Locations</Label>
                    <Input id="location" placeholder="e.g., Bangalore, Remote" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration (months)</Label>
                    <Input id="duration" type="number" placeholder="3-6 months" className="h-11" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workmode" className="text-base font-semibold">Work Mode Preference</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Remote', 'In-Person', 'Hybrid'].map((mode) => (
                      <label key={mode} className="flex items-center gap-2 p-4 rounded-xl border-2 border-border hover:border-primary cursor-pointer transition-all">
                        <input type="radio" name="workmode" value={mode} className="w-4 h-4 text-primary" />
                        <span className="font-medium text-foreground">{mode}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additional" className="text-base font-semibold">Additional Notes</Label>
                  <Textarea
                    id="additional"
                    placeholder="Any specific preferences or requirements..."
                    rows={4}
                    className="resize-none"
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-4">
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="flex-1 h-12"
                >
                  Previous
                </Button>
              )}
              
              {currentStep < 3 ? (
                <Button
                  type="button"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="flex-1 h-12 bg-primary hover:bg-primary/90"
                >
                  Next Step
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button 
                  type="submit" 
                  className="flex-1 h-12 bg-gradient-to-r from-success to-success/90 hover:from-success/90 hover:to-success shadow-lg"
                >
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Complete Profile
                </Button>
              )}
            </div>

            <Button
              type="button"
              variant="ghost"
              onClick={() => navigate("/student/dashboard")}
              className="w-full"
            >
              Skip for Now
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default StudentProfile;
