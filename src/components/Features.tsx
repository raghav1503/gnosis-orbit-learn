import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Upload, 
  Brain, 
  BarChart3, 
  Trophy, 
  Users, 
  Shield, 
  Smartphone, 
  FileText,
  ArrowRight 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Upload,
      title: "Smart OCR Technology",
      description: "Upload handwritten or printed notes and extract text with 99%+ accuracy using advanced OCR.",
      color: "primary",
    },
    {
      icon: Brain,
      title: "AI Quiz Generation",
      description: "Generate interactive MCQs, fill-in-the-blanks, and short-answer questions automatically from your content.",
      color: "secondary",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get detailed insights on performance, learning patterns, and progress tracking with visual dashboards.",
      color: "accent",
    },
    {
      icon: Trophy,
      title: "Gamification & Leaderboards",
      description: "Compete with peers, earn badges, and climb rankings to make learning engaging and motivating.",
      color: "primary",
    },
    {
      icon: Users,
      title: "Role-Based Access",
      description: "Separate dashboards for students, teachers, and administrators with customized features.",
      color: "secondary",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Enterprise-grade security with JWT authentication and encrypted data storage.",
      color: "accent",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Fully responsive platform that works seamlessly across all devices and screen sizes.",
      color: "primary",
    },
    {
      icon: FileText,
      title: "Export & Share",
      description: "Export quizzes and results to PDF/Word format and share with teachers or study groups.",
      color: "secondary",
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Brain className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Powerful Features</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Smart Learning
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge AI technology with intuitive design 
            to revolutionize how you learn, practice, and track your progress.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = {
              primary: "bg-primary/10 text-primary",
              secondary: "bg-secondary/10 text-secondary",
              accent: "bg-accent/10 text-accent",
            };

            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${colorClasses[feature.color as keyof typeof colorClasses]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-slide-up" style={{ animationDelay: "0.8s" }}>
          <div className="bg-gradient-hero rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Learning?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of students and educators already using Gnonsis Orbit to accelerate their learning journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;