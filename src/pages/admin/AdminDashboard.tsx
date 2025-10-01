import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  LogOut, Users, Building2, TrendingUp, MapPin, Download,
  BarChart3, PieChart, Target, Award, Filter
} from "lucide-react";
import { GovBranding } from "@/components/GovBranding";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Progress } from "@/components/ui/progress";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = {
    totalStudents: 1247,
    totalOrganizations: 89,
    activeMatches: 324,
    satisfactionScore: 4.6,
  };

  const diversityMetrics = [
    { category: "Tier-2/3 Colleges", percentage: 68, count: 847, color: "bg-primary" },
    { category: "Rural Regions", percentage: 42, count: 524, color: "bg-success" },
    { category: "Gender Balance (F)", percentage: 51, count: 636, color: "bg-accent" },
    { category: "First Generation", percentage: 34, count: 424, color: "bg-warning" },
  ];

  const recentAllocations = [
    {
      student: "Priya Sharma",
      institution: "NIT Trichy",
      organization: "Tech For Good NGO",
      domain: "Data Analysis",
      matchScore: 92,
      date: "2025-04-15",
    },
    {
      student: "Rahul Verma",
      institution: "IIT Roorkee",
      organization: "Green Earth Foundation",
      domain: "Backend Dev",
      matchScore: 88,
      date: "2025-04-14",
    },
    {
      student: "Anjali Patel",
      institution: "IIIT Bangalore",
      organization: "StartupXYZ",
      domain: "UI/UX Design",
      matchScore: 85,
      date: "2025-04-14",
    },
  ];

  const regionDistribution = [
    { region: "North", students: 312, percentage: 25 },
    { region: "South", students: 428, percentage: 34 },
    { region: "East", students: 267, percentage: 21 },
    { region: "West", students: 240, percentage: 20 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <GovBranding />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-foreground mb-1">System Administration</h1>
            <p className="text-muted-foreground">Real-time analytics & monitoring</p>
          </div>
          <div className="flex gap-2">
            <ThemeToggle />
            <Button variant="outline" className="hover-lift">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <Button variant="outline" className="hover-lift">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
            <Button variant="ghost" onClick={() => navigate("/")} className="hover-lift">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6 hover-lift bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Students</p>
                <p className="text-2xl font-bold text-foreground">{stats.totalStudents}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-success">
              <TrendingUp className="w-3 h-3" />
              <span>+12% this month</span>
            </div>
          </Card>

          <Card className="p-6 hover-lift bg-gradient-to-br from-success/5 to-success/10 border-success/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Organizations</p>
                <p className="text-2xl font-bold text-foreground">{stats.totalOrganizations}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-success">
              <TrendingUp className="w-3 h-3" />
              <span>+8% this month</span>
            </div>
          </Card>

          <Card className="p-6 hover-lift bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Matches</p>
                <p className="text-2xl font-bold text-foreground">{stats.activeMatches}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-success">
              <TrendingUp className="w-3 h-3" />
              <span>+23% this month</span>
            </div>
          </Card>

          <Card className="p-6 hover-lift bg-gradient-to-br from-warning/5 to-warning/10 border-warning/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
                <p className="text-2xl font-bold text-foreground">{stats.satisfactionScore}/5</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Based on 412 reviews</span>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Diversity Metrics */}
            <Card className="p-6 shadow-lg animate-slide-up">
              <div className="flex items-center gap-2 mb-6">
                <BarChart3 className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Diversity & Inclusion Metrics</h2>
              </div>
              
              <div className="space-y-5">
                {diversityMetrics.map((metric) => (
                  <div key={metric.category}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-foreground">{metric.category}</span>
                      <span className="text-sm text-muted-foreground">
                        {metric.count} students ({metric.percentage}%)
                      </span>
                    </div>
                    <div className="relative">
                      <Progress value={metric.percentage} className="h-3" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 via-success/10 to-accent/10 border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="font-bold text-foreground">Fairness Score</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold bg-gradient-to-r from-primary via-success to-accent bg-clip-text text-transparent">
                    8.7
                  </span>
                  <span className="text-muted-foreground">/10</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  System is ensuring equitable allocation across all demographics
                </p>
              </div>
            </Card>

            {/* Recent Allocations */}
            <Card className="p-6 shadow-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">Recent Allocations</h2>
                <Button variant="outline" size="sm" className="hover-lift">
                  View All
                </Button>
              </div>
              
              <div className="space-y-3">
                {recentAllocations.map((allocation, idx) => (
                  <Card key={idx} className="p-4 bg-muted/50 hover-lift">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <p className="font-bold text-foreground">{allocation.student}</p>
                        <p className="text-sm text-muted-foreground">{allocation.institution}</p>
                      </div>
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        {allocation.matchScore}% Match
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building2 className="w-3 h-3" />
                        <span>{allocation.organization}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {allocation.domain}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Regional Distribution */}
            <Card className="p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold text-foreground">Regional Distribution</h3>
              </div>
              
              <div className="space-y-4">
                {regionDistribution.map((region) => (
                  <div key={region.region}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">{region.region}</span>
                      <span className="font-bold text-foreground">{region.students}</span>
                    </div>
                    <Progress value={region.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>

            {/* System Health */}
            <Card className="p-6 shadow-lg bg-gradient-to-br from-success/10 to-primary/10">
              <div className="flex items-center gap-2 mb-4">
                <PieChart className="w-5 h-5 text-success" />
                <h3 className="text-lg font-bold text-foreground">System Health</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Match Quality</span>
                  <Badge className="bg-success text-success-foreground">Excellent</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Database Status</span>
                  <Badge className="bg-success text-success-foreground">Healthy</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">API Response</span>
                  <Badge className="bg-success text-success-foreground">Fast</Badge>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-4 text-foreground">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start hover-lift">
                  <Download className="w-4 h-4 mr-2" />
                  Export Full Report
                </Button>
                <Button variant="outline" className="w-full justify-start hover-lift">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Users
                </Button>
                <Button variant="outline" className="w-full justify-start hover-lift">
                  <Building2 className="w-4 h-4 mr-2" />
                  Review Organizations
                </Button>
                <Button variant="outline" className="w-full justify-start hover-lift">
                  <Target className="w-4 h-4 mr-2" />
                  Adjust Algorithms
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
