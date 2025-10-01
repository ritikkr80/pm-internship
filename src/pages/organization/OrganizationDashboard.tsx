import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { 
  Plus, Users, LogOut, Star, MapPin, Clock, Briefcase,
  TrendingUp, Target, Award
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { GovBranding } from "@/components/GovBranding";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Progress } from "@/components/ui/progress";

const OrganizationDashboard = () => {
  const navigate = useNavigate();
  const [showPostDialog, setShowPostDialog] = useState(false);

  const matchedInterns = [
    {
      id: 1,
      name: "Priya Sharma",
      institution: "IIT Delhi",
      location: "New Delhi",
      skills: ["Python", "Data Analysis", "ML", "Tableau"],
      matchScore: 92,
      cgpa: 8.5,
    },
    {
      id: 2,
      name: "Rahul Verma",
      institution: "NIT Trichy",
      location: "Tamil Nadu",
      skills: ["Java", "Spring Boot", "MySQL", "AWS"],
      matchScore: 88,
      cgpa: 8.2,
    },
  ];

  const postedInternships = [
    {
      id: 1,
      title: "Data Analysis Internship",
      capacity: 2,
      matched: 1,
      applicants: 15,
      status: "Active",
    },
    {
      id: 2,
      title: "Backend Development",
      capacity: 3,
      matched: 2,
      applicants: 24,
      status: "Active",
    },
  ];

  const handlePostInternship = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPostDialog(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <GovBranding />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-foreground mb-1">Tech For Good NGO 🚀</h1>
            <p className="text-muted-foreground">Organization Dashboard</p>
          </div>
          <div className="flex gap-2">
            <ThemeToggle />
            <Dialog open={showPostDialog} onOpenChange={setShowPostDialog}>
              <DialogTrigger asChild>
                <Button className="bg-success hover:bg-success/90 shadow-md hover-lift">
                  <Plus className="w-4 h-4 mr-2" />
                  Post Internship
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Post New Internship Opportunity</DialogTitle>
                </DialogHeader>
                <form onSubmit={handlePostInternship} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" placeholder="e.g., Data Analysis Internship" required className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe the role, responsibilities, and learning opportunities..."
                      rows={4}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" placeholder="Remote / City" required className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration (months)</Label>
                      <Input id="duration" type="number" placeholder="3" required className="h-11" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="skills">Required Skills (comma separated)</Label>
                    <Input id="skills" placeholder="Python, Data Analysis, SQL" required className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="capacity">Number of Interns</Label>
                    <Input id="capacity" type="number" placeholder="2" required className="h-11" />
                  </div>
                  <Button type="submit" className="w-full h-11 bg-success hover:bg-success/90 shadow-md">
                    Post Internship
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Button variant="ghost" onClick={() => navigate("/")} className="hover-lift">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6 hover-lift">
            <div className="flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-success" />
              <div>
                <p className="text-sm text-muted-foreground">Active Posts</p>
                <p className="text-2xl font-bold text-foreground">2</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 hover-lift">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Total Matches</p>
                <p className="text-2xl font-bold text-foreground">3</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover-lift">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Applicants</p>
                <p className="text-2xl font-bold text-foreground">39</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover-lift">
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 text-warning" />
              <div>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
                <p className="text-2xl font-bold text-foreground">4.8</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Matched Interns */}
            <Card className="p-6 shadow-lg animate-slide-up">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-6 h-6 text-success" />
                <h2 className="text-xl font-bold text-foreground">AI-Matched Interns</h2>
                <Badge className="ml-auto bg-success/20 text-success border-success/30">
                  {matchedInterns.length} New Matches
                </Badge>
              </div>
              
              <div className="space-y-4">
                {matchedInterns.map((intern) => (
                  <Card key={intern.id} className="p-5 bg-gradient-to-br from-muted/30 to-muted/50 hover-lift border-2 hover:border-success/30 transition-all">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-lg text-foreground">{intern.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <MapPin className="w-3 h-3" />
                          <span>{intern.institution}</span>
                          <span>•</span>
                          <span>CGPA: {intern.cgpa}</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
                          {intern.matchScore}%
                        </div>
                        <p className="text-xs text-muted-foreground">Match</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {intern.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs border-success/30 text-foreground">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-success hover:bg-success/90">
                        View Full Profile
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Schedule Interview
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Posted Internships */}
            <Card className="p-6 shadow-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Your Internship Postings
              </h2>
              
              <div className="space-y-3">
                {postedInternships.map((internship) => (
                  <Card key={internship.id} className="p-5 bg-muted/50 hover-lift">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-1">{internship.title}</h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {internship.applicants} applicants
                          </span>
                          <span>•</span>
                          <span>{internship.matched}/{internship.capacity} matched</span>
                        </div>
                      </div>
                      <Badge className="bg-success text-success-foreground">
                        {internship.status}
                      </Badge>
                    </div>
                    
                    <Progress 
                      value={(internship.matched / internship.capacity) * 100} 
                      className="mb-3 h-2"
                    />
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        Edit Posting
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        View Analytics
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Overview */}
            <Card className="p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-4 text-foreground">Quick Overview</h3>
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-success/10">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Positions Filled</span>
                    <span className="text-sm font-bold text-foreground">3/5</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                
                <div className="p-3 rounded-xl bg-primary/10">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Response Rate</span>
                    <span className="text-sm font-bold text-foreground">87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
              </div>
            </Card>

            {/* Rating System */}
            <Card className="p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-warning" />
                <h3 className="text-lg font-bold text-foreground">Feedback</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Rate your experience with completed internships
              </p>
              <Button variant="outline" className="w-full hover-lift">
                <Award className="w-4 h-4 mr-2" />
                Submit Feedback
              </Button>
            </Card>

            {/* Diversity Impact */}
            <Card className="p-6 shadow-lg bg-gradient-to-br from-accent/10 to-success/10">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold text-foreground">Diversity Impact</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tier-2/3 Colleges</span>
                  <span className="font-bold text-foreground">67%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rural Regions</span>
                  <span className="font-bold text-foreground">33%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationDashboard;
