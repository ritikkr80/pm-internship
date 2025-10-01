import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { Sparkles, TrendingUp, BookOpen, LogOut } from "lucide-react";

const StudentDashboard = () => {
  const navigate = useNavigate();

  // Mock data
  const allocation = {
    title: "Data Analysis Internship",
    organization: "Tech For Good NGO",
    location: "Remote",
    duration: "3 months",
    startDate: "July 2025",
  };

  const matchReason = [
    "Your Python and Data Analysis skills align perfectly with the project requirements",
    "Your academic background in Computer Science matches the technical needs",
    "The organization prioritizes students from diverse institutions",
  ];

  const skillGaps = [
    { skill: "Machine Learning", progress: 60, recommended: "NPTEL ML Course" },
    { skill: "SQL", progress: 40, recommended: "SWAYAM Database Course" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Student Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Student!</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => navigate("/student/profile")}>
              Edit Profile
            </Button>
            <Button variant="ghost" onClick={() => navigate("/")}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Allocation Card */}
            <Card className="p-6 shadow-elevated">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {allocation.title}
                  </h2>
                  <p className="text-lg text-muted-foreground">{allocation.organization}</p>
                </div>
                <Badge className="bg-success text-success-foreground">Matched</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold text-foreground">{allocation.location}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold text-foreground">{allocation.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Start Date</p>
                  <p className="font-semibold text-foreground">{allocation.startDate}</p>
                </div>
              </div>

              <Button className="w-full bg-primary">Accept Internship</Button>
            </Card>

            {/* Why This Match */}
            <Card className="p-6 shadow-elevated">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Why You Got This Match</h3>
              </div>
              <ul className="space-y-3">
                {matchReason.map((reason, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-foreground">{reason}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Skill Gap Analysis */}
            <Card className="p-6 shadow-elevated">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-secondary" />
                <h3 className="text-xl font-bold text-foreground">Skill Development</h3>
              </div>
              <div className="space-y-4">
                {skillGaps.map((item) => (
                  <div key={item.skill}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-foreground">{item.skill}</span>
                      <span className="text-sm text-muted-foreground">{item.progress}%</span>
                    </div>
                    <Progress value={item.progress} className="mb-2" />
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-muted-foreground" />
                      <a href="#" className="text-sm text-primary hover:underline">
                        {item.recommended}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Tracker */}
            <Card className="p-6 shadow-elevated">
              <h3 className="text-lg font-bold mb-4 text-foreground">Application Progress</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center text-success-foreground font-bold">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Profile Complete</p>
                    <p className="text-xs text-muted-foreground">Resume & skills added</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center text-success-foreground font-bold">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Matched</p>
                    <p className="text-xs text-muted-foreground">1 opportunity found</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-muted-foreground">Pending Acceptance</p>
                    <p className="text-xs text-muted-foreground">Accept your match</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Stats */}
            <Card className="p-6 shadow-elevated">
              <h3 className="text-lg font-bold mb-4 text-foreground">Your Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Profile Score</span>
                  <span className="font-bold text-foreground">85%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Skills Listed</span>
                  <span className="font-bold text-foreground">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Matches Found</span>
                  <span className="font-bold text-foreground">1</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
