import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  GraduationCap, 
  Shield, 
  Upload, 
  Brain, 
  BarChart3, 
  Trophy,
  Calendar,
  Clock,
  Target,
  TrendingUp,
  Award
} from "lucide-react";

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
            <BarChart3 className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-accent">Smart Dashboards</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Tailored Experience for
            <span className="bg-gradient-accent bg-clip-text text-transparent block">
              Every User Type
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a student, teacher, or administrator, our platform provides 
            role-specific dashboards with the tools and insights you need.
          </p>
        </div>

        {/* Role-Based Dashboards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Student Dashboard */}
          <Card className="bg-gradient-card border-0 shadow-card animate-slide-up">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Student Dashboard</CardTitle>
                  <CardDescription>Learning & Progress Tracking</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Upload Section */}
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Upload className="w-5 h-5 text-primary" />
                  <span className="font-medium">Quick Upload</span>
                </div>
                <p className="text-sm text-muted-foreground">Upload notes and generate quizzes</p>
              </div>

              {/* Progress */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Weekly Progress</span>
                  <span className="text-sm text-muted-foreground">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>

              {/* Recent Activity */}
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Recent Quizzes</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-muted/30 rounded">
                    <span className="text-sm">Biology Chapter 5</span>
                    <span className="text-sm text-secondary">92%</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted/30 rounded">
                    <span className="text-sm">Math Algebra</span>
                    <span className="text-sm text-accent">85%</span>
                  </div>
                </div>
              </div>

              <Button variant="hero" size="sm" className="w-full">
                <Brain className="w-4 h-4" />
                Generate New Quiz
              </Button>
            </CardContent>
          </Card>

          {/* Teacher Dashboard */}
          <Card className="bg-gradient-card border-0 shadow-card animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Teacher Dashboard</CardTitle>
                  <CardDescription>Class Management & Analytics</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Class Overview */}
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <span className="font-medium">Class Overview</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">156</div>
                    <div className="text-xs text-muted-foreground">Active Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">23</div>
                    <div className="text-xs text-muted-foreground">Assignments</div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Class Performance</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Average Score</span>
                    <span className="text-sm font-medium">87.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Completion Rate</span>
                    <span className="text-sm font-medium">94%</span>
                  </div>
                </div>
              </div>

              <Button variant="secondary" size="sm" className="w-full">
                <Target className="w-4 h-4" />
                Create Assignment
              </Button>
            </CardContent>
          </Card>

          {/* Admin Dashboard */}
          <Card className="bg-gradient-card border-0 shadow-card animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-lg">Admin Dashboard</CardTitle>
                  <CardDescription>System Management & Insights</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* System Stats */}
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <span className="font-medium">System Overview</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">2.4K</div>
                    <div className="text-xs text-muted-foreground">Total Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">845</div>
                    <div className="text-xs text-muted-foreground">Quizzes Created</div>
                  </div>
                </div>
              </div>

              {/* Usage Analytics */}
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Platform Usage</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Daily Active Users</span>
                    <span className="text-sm font-medium text-secondary">+12%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">System Uptime</span>
                    <span className="text-sm font-medium text-accent">99.9%</span>
                  </div>
                </div>
              </div>

              <Button variant="accent" size="sm" className="w-full">
                <BarChart3 className="w-4 h-4" />
                View Full Analytics
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Leaderboard Section */}
        <div className="bg-gradient-hero rounded-2xl p-8 text-white animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-8 h-8 text-accent-light" />
                <h3 className="text-2xl font-bold">Competitive Learning</h3>
              </div>
              <p className="text-white/90 mb-6">
                Gamification features including leaderboards, badges, and achievements 
                to motivate students and make learning engaging.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent-light" />
                  <span>Achievement Badges</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-secondary-light" />
                  <span>Real-time Rankings</span>
                </div>
              </div>
            </div>
            
            {/* Mini Leaderboard */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-accent-light" />
                Top Performers This Week
              </h4>
              <div className="space-y-3">
                {[
                  { name: "Alice Johnson", score: 2847, rank: 1 },
                  { name: "Bob Chen", score: 2756, rank: 2 },
                  { name: "Charlie Davis", score: 2684, rank: 3 },
                ].map((user) => (
                  <div key={user.rank} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        user.rank === 1 ? "bg-accent-light text-white" : 
                        user.rank === 2 ? "bg-secondary-light text-white" : 
                        "bg-white/20 text-white"
                      }`}>
                        {user.rank}
                      </div>
                      <span className="font-medium">{user.name}</span>
                    </div>
                    <span className="text-accent-light font-bold">{user.score.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;