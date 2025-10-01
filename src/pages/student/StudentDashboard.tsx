import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { 
  Sparkles, TrendingUp, BookOpen, LogOut, Award, MapPin, Calendar,
  Clock, Info, CheckCircle2, Circle, Target, Trophy, Building2
} from "lucide-react";
import { GovBranding } from "@/components/GovBranding";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const allocation = {
    title: "Data Analysis Internship",
    organization: "Tech For Good NGO",
    location: "Remote",
    duration: "3 months",
    startDate: "July 2025",
    matchScore: 92,
  };

  const matchReasons = [
    { 
      reason: "Your Python and Data Analysis skills align perfectly (95% match)",
      icon: CheckCircle2,
      color: "text-success"
    },
    { 
      reason: "Academic background in Computer Science matches technical requirements",
      icon: CheckCircle2,
      color: "text-success"
    },
    { 
      reason: "Organization prioritizes diverse institution representation",
      icon: CheckCircle2,
      color: "text-primary"
    },
  ];

  const skillGaps = [
    { skill: "Machine Learning", current: 60, target: 85, course: "NPTEL ML Fundamentals", url: "#" },
    { skill: "SQL", current: 40, target: 75, course: "SWAYAM Database Systems", url: "#" },
    { skill: "Data Visualization", current: 70, target: 90, course: "Tableau for Beginners", url: "#" },
  ];

  const badges = [
    { name: "Top Skill Match", icon: Trophy, color: "bg-warning text-warning-foreground", earned: true },
    { name: "Rural Champion", icon: Award, color: "bg-success text-success-foreground", earned: true },
    { name: "Fast Learner", icon: Target, color: "bg-primary text-primary-foreground", earned: false },
  ];

  const progressSteps = [
    { label: "Profile Complete", completed: true, icon: CheckCircle2 },
    { label: "Skills Verified", completed: true, icon: CheckCircle2 },
    { label: "Matched", completed: true, icon: CheckCircle2 },
    { label: "Pending Acceptance", completed: false, icon: Circle },
  ];

  return (
    <div className="min-h-screen bg-background">
      <GovBranding />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-foreground mb-1">Welcome back, Priya! 👋</h1>
            <p className="text-muted-foreground">Here's your internship journey</p>
          </div>
          <div className="flex gap-2">
            <ThemeToggle />
            <Button variant="outline" onClick={() => navigate("/student/profile")} className="hover-lift">
              Edit Profile
            </Button>
            <Button variant="ghost" onClick={() => navigate("/")} className="hover-lift">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Gamified Progress Tracker */}
        <Card className="p-6 mb-8 shadow-lg border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-success/5 animate-slide-up">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Your Journey Progress</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {progressSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={idx} className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                  step.completed 
                    ? 'bg-success/10 border-2 border-success/30' 
                    : 'bg-muted/50 border-2 border-border'
                }`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                    step.completed ? 'bg-success text-success-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                    <StepIcon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-semibold text-center text-foreground">{step.label}</span>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <Progress value={75} className="flex-1 h-3" />
            <span className="text-sm font-bold text-foreground whitespace-nowrap">75% Complete</span>
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Matched Internship */}
            <Card className="p-6 shadow-lg hover-lift border-2 border-success/30 animate-slide-up">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-2xl font-bold text-foreground">{allocation.title}</h2>
                    <Badge className="bg-success text-success-foreground badge-pulse">
                      Matched!
                    </Badge>
                  </div>
                  <p className="text-lg text-muted-foreground flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    {allocation.organization}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
                    {allocation.matchScore}%
                  </div>
                  <p className="text-xs text-muted-foreground">Match Score</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/50 rounded-xl">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">{allocation.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Duration</p>
                    <p className="font-semibold text-foreground">{allocation.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Start</p>
                    <p className="font-semibold text-foreground">{allocation.startDate}</p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-success to-success/90 hover:from-success/90 hover:to-success shadow-lg hover-lift">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Accept Internship Offer
              </Button>
            </Card>

            {/* Explainable AI Section */}
            <Card className="p-6 shadow-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Why You Got This Match</h3>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="w-4 h-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>Our AI analyzes your skills, background, and preferences to find perfect matches while ensuring fairness</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              
              <div className="space-y-3">
                {matchReasons.map((item, idx) => {
                  const ReasonIcon = item.icon;
                  return (
                    <div key={idx} className="flex gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                      <ReasonIcon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${item.color}`} />
                      <span className="text-foreground">{item.reason}</span>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Skill Gap Analysis */}
            <Card className="p-6 shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Skill Development Path</h3>
              </div>
              
              <div className="space-y-5">
                {skillGaps.map((item) => (
                  <div key={item.skill} className="p-4 rounded-xl bg-muted/50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-foreground">{item.skill}</span>
                      <span className="text-sm text-muted-foreground">
                        {item.current}% → <span className="text-primary font-bold">{item.target}%</span>
                      </span>
                    </div>
                    <Progress value={item.current} className="mb-3 h-2" />
                    <a 
                      href={item.url}
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group"
                    >
                      <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{item.course}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10">Recommended</span>
                    </a>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Gamified Badges */}
            <Card className="p-6 shadow-lg animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-lg font-bold mb-4 text-foreground flex items-center gap-2">
                <Award className="w-5 h-5 text-warning" />
                Your Achievements
              </h3>
              <div className="space-y-3">
                {badges.map((badge) => {
                  const BadgeIcon = badge.icon;
                  return (
                    <div 
                      key={badge.name} 
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                        badge.earned 
                          ? `${badge.color} shadow-md` 
                          : 'bg-muted/50 grayscale opacity-60'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        badge.earned ? 'bg-white/20' : 'bg-muted'
                      }`}>
                        <BadgeIcon className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-sm">{badge.name}</span>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Stats */}
            <Card className="p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-4 text-foreground">Your Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-primary/5">
                  <span className="text-muted-foreground">Profile Score</span>
                  <span className="font-bold text-primary text-lg">85%</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-success/5">
                  <span className="text-muted-foreground">Skills Listed</span>
                  <span className="font-bold text-success text-lg">12</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-accent/5">
                  <span className="text-muted-foreground">Courses Completed</span>
                  <span className="font-bold text-accent text-lg">3</span>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-4 text-foreground">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start hover-lift">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Meeting
                </Button>
                <Button variant="outline" className="w-full justify-start hover-lift">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Browse Courses
                </Button>
                <Button variant="outline" className="w-full justify-start hover-lift">
                  <Target className="w-4 h-4 mr-2" />
                  Update Preferences
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
