import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  Globe,
  Linkedin,
  Github,
  Code,
  Code2,
  ChevronRight,
  Rocket,
  Briefcase,
  GraduationCap,
  Award,
  Terminal,
  Laptop,
  Check,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const DeveloperSection = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <section className="py-24 relative z-10" id="developer">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 bg-accent/10 px-4 py-2 rounded-full">
            <h3 className="text-accent text-sm font-medium">The Creator</h3>
          </div>
          <h2 className="text-4xl font-bold mb-6 gradient-heading animate-fade-in">
            About the Developer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-100 text-lg">
            Meet the developer behind User Sync
          </p>
        </div>

        <div className="max-w-6xl mx-auto backdrop-blur-sm bg-card/50 p-6 rounded-2xl border border-muted/20 shadow-xl">
          <Tabs
            defaultValue="profile"
            className="w-full"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <div className="flex justify-center mb-8 overflow-x-auto pb-10 scrollbar-none">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <TabsTrigger
                  value="profile"
                  onClick={() => setActiveTab("profile")}
                  className="min-w-24 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Profile
                </TabsTrigger>
                <TabsTrigger
                  value="experience"
                  onClick={() => setActiveTab("experience")}
                  className="min-w-28 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Experience
                </TabsTrigger>
                <TabsTrigger
                  value="projects"
                  onClick={() => setActiveTab("projects")}
                  className="min-w-24 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Projects
                </TabsTrigger>
                <TabsTrigger
                  value="skills"
                  onClick={() => setActiveTab("skills")}
                  className="min-w-20 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Skills
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="profile" className="mt-6 animate-scale-in">
              <Card className="border-none shadow-lg bg-card/80">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center gap-10">
                    <div className="relative mx-auto md:mx-0">
                      <div className="rounded-full w-32 h-32 flex items-center justify-center overflow-hidden relative border border-gray-200">
                        <img
                          src="/developer.jpg"
                          alt="Anurag Singh"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <CardTitle className="text-3xl md:text-4xl gradient-heading-purple">
                        Anurag Singh
                      </CardTitle>
                      <div className="inline-flex items-center bg-primary/10 px-3 py-1.5 rounded-full my-3">
                        <CardDescription className="text-base text-primary font-medium">
                          Full-Stack Developer
                        </CardDescription>
                      </div>
                      <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                        <div className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                          <Phone className="h-4 w-4 mr-2" />
                          +91 98964 24841
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                          <Mail className="h-4 w-4 mr-2" />
                          anuragjadu922@gmail.com
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                          <Globe className="h-4 w-4 mr-2" />
                          <a
                            href="https://anuragsingh922.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            Portfolio
                          </a>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-5 justify-center md:justify-start">
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="gap-2 rounded-full"
                        >
                          <a
                            href="https://linkedin.com/in/anuragsingh922"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin className="h-4 w-4" /> LinkedIn
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="gap-2 rounded-full"
                        >
                          <a
                            href="https://github.com/anuragsingh922"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" /> GitHub
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-10 mt-4">
                    <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                      <h4 className="flex items-center gap-2 font-semibold text-xl mb-4 gradient-heading-blue">
                        <Terminal className="h-5 w-5" /> Summary
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Innovative Full-Stack Developer with expertise in the
                        MERN stack, cloud platforms, and AI integration. Proven
                        ability to design efficient, testable, and robust
                        applications, including AI-driven solutions.
                        Demonstrates strong problem-solving skills through
                        diverse internships and impactful personal projects,
                        delivering scalable and reliable software solutions.
                        Passionate about leveraging cutting-edge technologies to
                        create meaningful and user-centric applications.
                      </p>
                    </div>

                    <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                      <h4 className="flex items-center gap-2 font-semibold text-xl mb-4 gradient-heading-blue">
                        <GraduationCap className="h-5 w-5" /> Education
                      </h4>
                      <div className="bg-card p-6 rounded-xl border shadow-sm">
                        <div className="flex flex-col md:flex-row justify-between">
                          <div className="mb-4 md:mb-0">
                            <h5 className="font-medium text-lg">
                              Indian Institute of Information Technology Sonepat
                            </h5>
                            <p className="text-muted-foreground">
                              Bachelor of Computer Science and Engineering
                            </p>
                          </div>
                          <div className="text-left md:text-right">
                            <p className="font-medium text-primary">
                              2021 - 2025
                            </p>
                            <p className="text-muted-foreground">CGPA: 8.0</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                      <h4 className="flex items-center gap-2 font-semibold text-xl mb-4 gradient-heading-blue">
                        <Award className="h-5 w-5" /> Achievements
                      </h4>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                          <div className="mt-1 bg-primary/10 p-2 rounded-full">
                            <Code className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">LeetCode:</p>
                            <p className="text-muted-foreground">
                              Solved 450+ DSA questions —
                              <a
                                href="https://leetcode.com/u/anuragsingh922/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline ml-1"
                              >
                                Profile
                              </a>
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-4">
                          <div className="mt-1 bg-primary/10 p-2 rounded-full">
                            <Globe className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">
                              AWS Academy Cloud Foundations:
                            </p>
                            <p className="text-muted-foreground">
                              AWS Academy Graduate —
                              <a
                                href="https://www.credly.com/badges/4fdce481-99d6-41d1-9160-3c051c55f1a7/linked_in_profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline ml-1"
                              >
                                Badge
                              </a>
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-4">
                          <div className="mt-1 bg-primary/10 p-2 rounded-full">
                            <Code2 className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">
                              ProductathonAI Competition Finalist:
                            </p>
                            <p className="text-muted-foreground">
                              Organized by IIT Roorkee for innovative AI
                              solutions —
                              <a
                                href="https://drive.google.com/file/d/19I5lqpYybRnFFHKBtLhJNR6g08iYfzuQ/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline ml-1"
                              >
                                Certificate
                              </a>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experience" className="mt-6 animate-scale-in">
              <Card className="border-none shadow-lg bg-card/80">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-accent/20 p-2 rounded-full">
                      <Briefcase className="h-5 w-5 text-accent" />
                    </div>
                    <CardTitle className="gradient-heading-purple">
                      Work Experience
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Professional experience in software development
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-12">
                    {/* Experience 1 */}
                    <div className="relative pl-8 md:pl-10 border-l-2 border-primary pb-8">
                      <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-primary shadow-lg shadow-primary/20"></div>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                        <div>
                          <h4 className="font-semibold text-xl gradient-heading-blue">
                            Full Stack Developer Intern
                          </h4>
                          <div className="inline-flex items-center bg-primary/10 px-3 py-1 rounded-full my-2">
                            <p className="text-primary text-sm font-medium">
                              IVY
                            </p>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground md:text-right bg-muted/50 px-3 py-1 rounded-full inline-flex items-center">
                          May 2024 - August 2024
                          <span className="mx-2">•</span>
                          Mumbai, India
                        </div>
                      </div>
                      <ul className="mt-5 space-y-3 text-muted-foreground">
                        <li className="flex gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>
                            Built an AI Calling platform leveraging Node.js,
                            Express, React, and MongoDB, enabling real-time
                            interactions with customers.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>
                            Designed and implemented a Retrieval-Augmented
                            Generation (RAG) system to dynamically retrieve and
                            synthesize relevant customer data.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>
                            Integrated AI agents with RAG systems to provide
                            accurate, context-aware responses, improving
                            satisfaction with personalized interactions.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>
                            Developed seamless communication using Vonage APIs,
                            optimizing call handling and resolution with a 1.8 -
                            2.5 seconds response time.
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* Experience 2 */}
                    <div className="relative pl-8 md:pl-10 border-l-2 border-primary">
                      <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-primary shadow-lg shadow-primary/20"></div>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                        <div>
                          <h4 className="font-semibold text-xl gradient-heading-blue">
                            Full Stack Developer Intern
                          </h4>
                          <div className="inline-flex items-center bg-primary/10 px-3 py-1 rounded-full my-2">
                            <p className="text-primary text-sm font-medium">
                              Accintia
                            </p>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground md:text-right bg-muted/50 px-3 py-1 rounded-full inline-flex items-center">
                          June 2023 - August 2024
                          <span className="mx-2">•</span>
                          Mumbai, India
                        </div>
                      </div>
                      <ul className="mt-5 space-y-3 text-muted-foreground">
                        <li className="flex gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>
                            Developed core applications for Accintia's primary
                            products, enhancing functionality and user
                            experience.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>
                            Integrated third-party SDKs to extend application
                            capabilities and improve performance.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>
                            Gained extensive hands-on experience with React.js,
                            Node.js, Express.js, and MongoDB.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>
                            Acquired practical knowledge of Google Cloud
                            Platform (GCP) services and DevOps practices.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="projects" className="mt-6 animate-scale-in">
              <Card className="border-none shadow-lg bg-card/80">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-accent/20 p-2 rounded-full">
                      <Laptop className="h-5 w-5 text-accent" />
                    </div>
                    <CardTitle className="gradient-heading-purple">
                      Featured Projects
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Highlights from my portfolio of work
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-10">
                    {/* Project 1 - VocRT */}
                    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl border border-primary/10">
                      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-1"></div>
                      <div className="p-6">
                        <div className="flex flex-col gap-6">
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <div className="bg-primary/10 p-2 rounded-full">
                                <Rocket className="h-5 w-5 text-primary" />
                              </div>
                              <h4 className="font-semibold text-xl gradient-heading-blue">
                                VocRT: The Real-Time Voice Chatbot
                              </h4>
                            </div>

                            <Collapsible className="w-full">
                              <div>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                  A next-gen voice chatbot that enables
                                  seamless, real-time AI conversations. Speak
                                  directly to the chatbot, and it responds
                                  instantly—bringing AI-powered voice
                                  interactions directly to your browser!
                                </p>

                                <CollapsibleContent>
                                  <div className="space-y-4 mt-6 mb-4">
                                    <h5 className="font-medium text-lg">
                                      Key Features
                                    </h5>
                                    <ul className="space-y-2 text-muted-foreground">
                                      <li className="flex items-start gap-2">
                                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>
                                          Real-Time Voice Interaction – Speak
                                          and receive instant AI responses.
                                        </span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>
                                          High-Quality Predefined Voices –
                                          Designed for clarity and natural
                                          understanding.
                                        </span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>
                                          Seamless Interruption Handling – The
                                          chatbot adjusts smoothly when
                                          interrupted.
                                        </span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>
                                          Effortless Web Integration –
                                          React-based UI enables smooth,
                                          real-time interactions.
                                        </span>
                                      </li>
                                    </ul>

                                    <h5 className="font-medium text-lg mt-6">
                                      Tech Stack
                                    </h5>
                                    <div className="flex flex-wrap gap-2">
                                      {[
                                        "Python",
                                        "Node.js",
                                        "React",
                                        "Express.js",
                                        "PyTorch",
                                        "Transformers",
                                        "eSpeak",
                                        "Deepgram",
                                        "OpenAI",
                                      ].map((tech) => (
                                        <div
                                          key={tech}
                                          className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm"
                                        >
                                          {tech}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </CollapsibleContent>
                              </div>

                              <div className="flex flex-wrap gap-3 items-center mt-4">
                                <Button
                                  asChild
                                  variant="outline"
                                  size="sm"
                                  className="gap-2 rounded-full"
                                >
                                  <a
                                    href="https://lnkd.in/e3Qhcem9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <Globe className="h-4 w-4" /> Hugging Face
                                  </a>
                                </Button>
                                <Button
                                  asChild
                                  variant="outline"
                                  size="sm"
                                  className="gap-2 rounded-full"
                                >
                                  <a
                                    href="https://lnkd.in/e-Fd8SxP"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <Code className="h-4 w-4" /> Docker Hub
                                  </a>
                                </Button>
                                <CollapsibleTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="ml-auto"
                                  >
                                    View Details
                                    <ChevronRight className="h-4 w-4 ml-1" />
                                  </Button>
                                </CollapsibleTrigger>
                              </div>
                            </Collapsible>
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* Project 2 - Trekigo */}
                    <Card className="bg-card rounded-lg border p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex flex-col gap-6">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="bg-primary/10 p-2 rounded-full">
                              <Globe className="h-5 w-5 text-primary" />
                            </div>
                            <h4 className="font-semibold text-xl gradient-heading-blue">
                              Trekigo — MERN-Based Travel Booking Platform
                            </h4>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            A scalable travel booking web app showcasing trek
                            details, itineraries, travel guides, and photo
                            galleries.
                          </p>

                          <h5 className="font-medium text-base mb-2">
                            Key Features
                          </h5>
                          <ul className="space-y-1 text-muted-foreground mb-4">
                            <li className="flex items-start gap-2">
                              <div className="mt-1">✅</div>
                              <span>
                                Built a high-performance Express.js backend,
                                optimizing APIs to reduce page load times by 30%
                                and storage costs by 40%.
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="mt-1">✅</div>
                              <span>
                                Integrated Redux for state management to ensure
                                smooth and efficient performance.
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="mt-1">✅</div>
                              <span>
                                Designed an interactive UI with animations and a
                                fully responsive dark mode.
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="mt-1">✅</div>
                              <span>
                                Enabled Google authentication for secure
                                login/signup.
                              </span>
                            </li>
                          </ul>

                          <div className="flex flex-wrap gap-3">
                            <Button
                              asChild
                              variant="outline"
                              size="sm"
                              className="gap-2"
                            >
                              <a
                                href="https://trekigo.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Globe className="h-4 w-4" /> Live Site
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* Project 3 - Ludo Game */}
                    <Card className="bg-card rounded-lg border p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex flex-col gap-6">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="bg-primary/10 p-2 rounded-full">
                              <Code2 className="h-5 w-5 text-primary" />
                            </div>
                            <h4 className="font-semibold text-xl gradient-heading-blue">
                              Ludo Game — Built using React Native CLI
                            </h4>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            A React Native-based Ludo game with smooth and
                            interactive gameplay.
                          </p>

                          <h5 className="font-medium text-base mb-2">
                            Key Features
                          </h5>
                          <ul className="space-y-1 text-muted-foreground mb-4">
                            <li className="flex items-start gap-2">
                              <div className="mt-1">✅</div>
                              <span>
                                Implemented randomized dice rolls, standard Ludo
                                rules, and safe zones for strategic gameplay.
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="mt-1">✅</div>
                              <span>
                                Added smooth animations using React Native
                                Reanimated.
                              </span>
                            </li>
                          </ul>

                          <div className="flex flex-wrap gap-3">
                            <Button
                              asChild
                              variant="outline"
                              size="sm"
                              className="gap-2"
                            >
                              <a
                                href="https://github.com/anuragsingh922/ludo"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="h-4 w-4" /> GitHub
                              </a>
                            </Button>
                            <Button
                              asChild
                              variant="outline"
                              size="sm"
                              className="gap-2"
                            >
                              <a
                                href="https://drive.google.com/file/d/14cp5mz9kKZPTAJkXw_iKA_-5gnLmWU9D/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Code className="h-4 w-4" /> APK
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="skills" className="mt-6 animate-scale-in">
              <Card className="border-none shadow-lg bg-card/80">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-accent/20 p-2 rounded-full">
                      <Code className="h-5 w-5 text-accent" />
                    </div>
                    <CardTitle className="gradient-heading-purple">
                      Technical Skills
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Technologies and tools I work with
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Languages */}
                    <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                      <h4 className="font-semibold text-lg mb-4 gradient-heading-blue">
                        Languages
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {["C++", "Python", "JavaScript", "TypeScript"].map(
                          (skill) => (
                            <div
                              key={skill}
                              className="bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium"
                            >
                              {skill}
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Frontend */}
                    <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                      <h4 className="font-semibold text-lg mb-4 gradient-heading-blue">
                        Frontend
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "React.js",
                          "React Native",
                          "HTML",
                          "CSS",
                          "Tailwind CSS",
                        ].map((skill) => (
                          <div
                            key={skill}
                            className="bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Backend */}
                    <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                      <h4 className="font-semibold text-lg mb-4 gradient-heading-blue">
                        Backend
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Node.js",
                          "Express.js",
                          "MongoDB",
                          "Mongoose",
                          "Firebase",
                        ].map((skill) => (
                          <div
                            key={skill}
                            className="bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools & Technologies */}
                    <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                      <h4 className="font-semibold text-lg mb-4 gradient-heading-blue">
                        Tools & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Git",
                          "GitHub",
                          "VS Code",
                          "Docker",
                          "AWS",
                          "GCP",
                          "Redux",
                          "Jest",
                        ].map((skill) => (
                          <div
                            key={skill}
                            className="bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
