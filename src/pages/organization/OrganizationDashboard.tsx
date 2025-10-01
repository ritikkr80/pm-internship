import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { Plus, Users, LogOut, Star } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const OrganizationDashboard = () => {
  const navigate = useNavigate();
  const [showPostDialog, setShowPostDialog] = useState(false);

  // Mock data
  const matchedInterns = [
    {
      id: 1,
      name: "Priya Sharma",
      institution: "IIT Delhi",
      skills: ["Python", "Data Analysis", "ML"],
      matchScore: 92,
    },
    {
      id: 2,
      name: "Rahul Verma",
      institution: "NIT Trichy",
      skills: ["Java", "Spring Boot", "MySQL"],
      matchScore: 88,
    },
  ];

  const postedInternships = [
    {
      id: 1,
      title: "Data Analysis Internship",
      capacity: 2,
      matched: 1,
      status: "Active",
    },
    {
      id: 2,
      title: "Backend Development",
      capacity: 3,
      matched: 2,
      status: "Active",
    },
  ];

  const handlePostInternship = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPostDialog(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Organization Dashboard</h1>
            <p className="text-muted-foreground">Tech For Good NGO</p>
          </div>
          <div className="flex gap-2">
            <Dialog open={showPostDialog} onOpenChange={setShowPostDialog}>
              <DialogTrigger asChild>
                <Button className="bg-secondary">
                  <Plus className="w-4 h-4 mr-2" />
                  Post Internship
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Post New Internship</DialogTitle>
                </DialogHeader>
                <form onSubmit={handlePostInternship} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" placeholder="e.g., Data Analysis Internship" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe the role, responsibilities..."
                      rows={4}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" placeholder="Remote / City" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration (months)</Label>
                      <Input id="duration" type="number" placeholder="3" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="skills">Required Skills</Label>
                    <Input id="skills" placeholder="Python, Data Analysis, etc." required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="capacity">Number of Interns</Label>
                    <Input id="capacity" type="number" placeholder="2" required />
                  </div>
                  <Button type="submit" className="w-full bg-secondary">
                    Post Internship
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Button variant="ghost" onClick={() => navigate("/")}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Matched Interns */}
            <Card className="p-6 shadow-elevated">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-secondary" />
                <h2 className="text-xl font-bold text-foreground">Matched Interns</h2>
              </div>
              <div className="space-y-4">
                {matchedInterns.map((intern) => (
                  <Card key={intern.id} className="p-4 bg-muted/50">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-foreground">{intern.name}</h3>
                        <p className="text-sm text-muted-foreground">{intern.institution}</p>
                      </div>
                      <Badge variant="secondary">Match: {intern.matchScore}%</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {intern.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-primary">View Profile</Button>
                      <Button size="sm" variant="outline">Contact</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Posted Internships */}
            <Card className="p-6 shadow-elevated">
              <h2 className="text-xl font-bold mb-4 text-foreground">Your Internships</h2>
              <div className="space-y-3">
                {postedInternships.map((internship) => (
                  <Card key={internship.id} className="p-4 bg-muted/50">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-foreground">{internship.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {internship.matched} / {internship.capacity} positions matched
                        </p>
                      </div>
                      <Badge className="bg-success text-success-foreground">
                        {internship.status}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <Card className="p-6 shadow-elevated">
              <h3 className="text-lg font-bold mb-4 text-foreground">Overview</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Active Internships</span>
                  <span className="font-bold text-foreground">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Matches</span>
                  <span className="font-bold text-foreground">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Positions Open</span>
                  <span className="font-bold text-foreground">2</span>
                </div>
              </div>
            </Card>

            {/* Rating Form */}
            <Card className="p-6 shadow-elevated">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold text-foreground">Rate an Intern</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Provide feedback on completed internships
              </p>
              <Button variant="outline" className="w-full">
                Submit Feedback
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationDashboard;
