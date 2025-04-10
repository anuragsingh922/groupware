import { Users, ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  isVisible: boolean;
}

const HeroSection = ({ isVisible }: HeroSectionProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-16 pb-20">
      <div className="absolute inset-0 bg-grid-primary [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      <div className="lines-animation-container">
        <div className="animated-line line-1"></div>
        <div className="animated-line line-2"></div>
        <div className="animated-line line-3"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <div
            className={`p-3 bg-primary/10 rounded-full inline-flex items-center justify-center mb-2 animate-scale-in ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Users className="h-8 w-8 text-primary animate-pulse-slow" />
          </div>
          <h1
            className={`text-4xl md:text-6xl font-bold tracking-tight gradient-heading animate-fade-in ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            User Sync
          </h1>
          <p
            className={`text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            A comprehensive React application for user management with
            authentication, pagination, and CRUD operations using the ReqRes
            API.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button asChild size="lg" className="gap-2">
              <Link to={isAuthenticated ? "/dashboard" : "/login"}>
                {isAuthenticated ? "Dashboard" : "Get Started"}{" "}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a
                href="https://github.com/anuragsingh922/groupware"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" /> GitHub Repo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
