
import { Lock, Users, PenTool, Trash2, List, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Lock,
    title: "Secure Authentication",
    description: "Login securely using credentials with proper validation and error handling. All authenticated sessions are secured and persisted using local storage.",
    delay: "delay-100"
  },
  {
    icon: Users,
    title: "User Management",
    description: "View a comprehensive list of users with paginated results. Each user is displayed with their avatar, first name, and last name in a clear, easy-to-read format.",
    delay: "delay-200"
  },
  {
    icon: PenTool,
    title: "Edit User Details",
    description: "Modify user information with a pre-filled form containing the current user details. Supports updating first name, last name, and email with proper validation.",
    delay: "delay-300"
  },
  {
    icon: Trash2,
    title: "Delete Users",
    description: "Remove users from the system with a simple click. Confirmation dialog ensures you don't accidentally delete important user records.",
    delay: "delay-100"
  },
  {
    icon: List,
    title: "Pagination",
    description: "Navigate through multiple pages of users with intuitive pagination controls. Easily move between pages to view all available user records.",
    delay: "delay-200"
  },
  {
    icon: Search,
    title: "Responsive Design",
    description: "Enjoy a seamless experience across all devices. The application is fully responsive and provides optimal viewing on desktops, tablets, and mobile phones.",
    delay: "delay-300"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background relative" id="features">
      <div className="absolute inset-0 bg-grid-primary opacity-20 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]" />
      <div className="lines-animation-container right-oriented">
        <div className="animated-line line-1"></div>
        <div className="animated-line line-2"></div>
        <div className="animated-line line-3"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-heading-blue animate-fade-in">
            Application Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-100">
            Explore the powerful features available in the User Sync application
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`border-none shadow-md hover:shadow-lg transition-shadow duration-300 user-card animate-slide-in-left ${feature.delay}`}>
              <CardHeader className="pb-2">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="text-primary h-6 w-6" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
