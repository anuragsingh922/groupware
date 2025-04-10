import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Code, Lock, Layers, CheckCircle2 } from "lucide-react";

const TechnicalSection = () => {
  const [activeTab, setActiveTab] = useState("architecture");

  return (
    <section className="py-24 bg-tech-pattern bg-tech-lines relative" id="tech">
      <div className="absolute inset-0 bg-background/95 z-0"></div>
      <div className="tech-grid-overlay"></div>
      <div className="lines-animation-container left-oriented">
        <div className="animated-line line-1"></div>
        <div className="animated-line line-2"></div>
        <div className="animated-line line-3"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 bg-primary/10 px-4 py-2 rounded-full">
            <h3 className="text-primary text-sm font-medium">Under The Hood</h3>
          </div>
          <h2 className="text-4xl font-bold mb-6 gradient-heading-purple animate-fade-in">
            Technical Implementation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-100 text-lg">
            Explore the technologies and patterns used to build this application
          </p>
        </div>

        <Tabs
          defaultValue="architecture"
          className="max-w-4xl mx-auto"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full max-w-md">
              <TabsTrigger
                value="architecture"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Architecture
              </TabsTrigger>
              <TabsTrigger
                value="api"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                API Integration
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Security
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="min-h-[450px]">
            <TabsContent value="architecture" className="mt-6 animate-scale-in">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-card/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-lg pb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Layers className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl gradient-heading-blue">
                      Application Architecture
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Component structure and state management
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-8">
                  <p className="text-lg">
                    This application is built with a modern React architecture
                    using functional components and hooks. Key architectural
                    elements include:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Context API for global state management (authentication)",
                      "React Router for navigation and protected routes",
                      "Custom hooks for data fetching and state management",
                      "Component composition for reusable UI elements",
                      "Responsive design with Tailwind CSS",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="api" className="mt-6 animate-scale-in">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-card/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-lg pb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl gradient-heading-blue">
                      API Integration
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Working with the ReqRes API
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-8">
                  <p className="text-lg">
                    The application integrates with the ReqRes API to provide
                    realistic user management functionality:
                  </p>
                  <ul className="space-y-4">
                    {[
                      <span key={1}>
                        Authentication:{" "}
                        <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                          POST /api/login
                        </code>{" "}
                        with credentials
                      </span>,
                      <span key={2}>
                        User Listing:{" "}
                        <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                          GET /api/users?page=N
                        </code>{" "}
                        with pagination
                      </span>,
                      <span key={3}>
                        User Update:{" "}
                        <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                          PUT /api/users/{"{id}"}
                        </code>{" "}
                        for updating user details
                      </span>,
                      <span key={4}>
                        User Deletion:{" "}
                        <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                          DELETE /api/users/{"{id}"}
                        </code>{" "}
                        for removing users
                      </span>,
                      "Error handling and loading states for all API operations",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="mt-6 animate-scale-in">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-card/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-lg pb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Lock className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl gradient-heading-blue">
                      Security Features
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Keeping user data and sessions secure
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-8">
                  <p className="text-lg">
                    Security is a top priority in this application:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "JWT token authentication and persistent sessions",
                      "Protected routes requiring authentication",
                      "Form validation to prevent invalid data submission",
                      "Secure credential handling",
                      "Automatic redirection for unauthenticated users",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>

        <div className="flex justify-center mt-12">
          <a
            href="#developer"
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            <span>Meet the Developer</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;
