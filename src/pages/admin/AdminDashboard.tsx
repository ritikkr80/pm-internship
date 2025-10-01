import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { LogOut, Users, Building2, TrendingUp, MapPin } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Mock analytics data
  const stats = {
    totalStudents: 1247,
    totalOrganizations: 89,
    activeMatches: 324,
    satisfactionScore: 4.6,
  };

  const diversityMetrics = [
    { category: "Tier-2/3 Colleges", percentage: 68, count: 847 },
    { category: "Rural Regions", percentage: 42, count: 524 },
    { category: "Gender Balance", percentage: 51, count: 636 },
  ];

  const recentAllocations = [
    {
      student: "Priya Sharma",
      organization: "Tech For Good NGO",
      domain: "Data Analysis",
      date: "2025-04-15",
    },
    {
      student: "Rahul Verma",
      organization: "Green Earth Foundation",
      domain: "Backend Dev",
      date: "2025-04-14",
    },
    {
      student: "Anjali Patel",
      organization: "StartupXYZ",
      domain: "UI/UX Design",
      date: "2025-04-14",
    },
  ];

  const regionDistribution = [
    { region: "North", students: 312 },
    { region: "South", students: 428 },
    { region: "East", students: 267 },
    { region: "West", students: 240 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">System Overview & Analytics</p>
          </div>
          <Button variant="ghost" onClick={() => navigate("/")}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6 shadow-elevated">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Total Students</p>
                <p className="text-2xl font-bold text-foreground">{stats.totalStudents}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-elevated">
            <div className="flex items-center gap-3">
              <Building2 className="w-8 h-8 text-secondary" />
              <div>
                <p className="text-sm text-muted-foreground">Organizations</p>
                <p className="text-2xl font-bold text-foreground">{stats.totalOrganizations}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-elevated">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-success" />
              <div>
                <p className="text-sm text-muted-foreground">Active Matches</p>
                <p className="text-2xl font-bold text-foreground">{stats.activeMatches}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-elevated">
            <div className="flex items-center gap-3">
              <span className="text-3xl">⭐</span>
              <div>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
                <p className="text-2xl font-bold text-foreground">{stats.satisfactionScore}/5</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Diversity Metrics */}
            <Card className="p-6 shadow-elevated">
              <h2 className="text-xl font-bold mb-4 text-foreground">Diversity & Inclusion Metrics</h2>
              <div className="space-y-4">
                {diversityMetrics.map((metric) => (
                  <div key={metric.category}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-foreground">{metric.category}</span>
                      <span className="text-sm text-muted-foreground">
                        {metric.count} students ({metric.percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all"
                        style={{ width: `${metric.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Allocations */}
            <Card className="p-6 shadow-elevated">
              <h2 className="text-xl font-bold mb-4 text-foreground">Recent Allocations</h2>
              <div className="space-y-3">
                {recentAllocations.map((allocation, idx) => (
                  <Card key={idx} className="p-4 bg-muted/50">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-foreground">{allocation.student}</p>
                        <p className="text-sm text-muted-foreground">{allocation.organization}</p>
                        <Badge variant="outline" className="mt-1">
                          {allocation.domain}
                        </Badge>
                      </div>
                      <span className="text-xs text-muted-foreground">{allocation.date}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Regional Distribution */}
            <Card className="p-6 shadow-elevated">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold text-foreground">Regional Distribution</h3>
              </div>
              <div className="space-y-3">
                {regionDistribution.map((region) => (
                  <div key={region.region} className="flex justify-between">
                    <span className="text-foreground">{region.region}</span>
                    <span className="font-bold text-foreground">{region.students}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Fairness Score */}
            <Card className="p-6 shadow-elevated bg-gradient-to-br from-primary/10 to-secondary/10">
              <h3 className="text-lg font-bold mb-2 text-foreground">Fairness Score</h3>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                8.7/10
              </div>
              <p className="text-sm text-muted-foreground">
                System is ensuring equitable allocation across demographics
              </p>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 shadow-elevated">
              <h3 className="text-lg font-bold mb-4 text-foreground">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  Export Analytics Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  View All Allocations
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Manage Organizations
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
