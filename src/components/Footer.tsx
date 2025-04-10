import { Link } from "react-router-dom";
import {
  Instagram,
  Linkedin,
  Mail,
  Globe,
  PhoneCall,
  ExternalLink,
  Users,
  Github,
} from "lucide-react";

/**
 * Footer Component
 *
 * Renders a responsive footer with company information, quick links, resources, and contact details.
 * Used across all pages of the application to maintain consistent UI/UX.
 */
const Footer = () => {
  // Dynamic current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company information */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold gradient-heading-blue">
                User Sync
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              A comprehensive user management system with intuitive interfaces
              for managing user data efficiently.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/anuragsingh922/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com/in/anuragsingh922"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/anuragsingh922"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick links section */}
          <div>
            <h3 className="font-medium text-base mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Globe size={14} />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Users size={14} />
                  Dashboard
                </Link>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ExternalLink size={14} />
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#tech"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ExternalLink size={14} />
                  Technology
                </a>
              </li>
            </ul>
          </div>

          {/* Resources section */}
          <div>
            <h3 className="font-medium text-base mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://reqres.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ExternalLink size={14} />
                  ReqRes API
                </a>
              </li>
              <li>
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ExternalLink size={14} />
                  React Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ExternalLink size={14} />
                  Tailwind CSS
                </a>
              </li>
              <li>
                <a
                  href="https://ui.shadcn.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ExternalLink size={14} />
                  Shadcn UI
                </a>
              </li>
            </ul>
          </div>

          {/* Contact section */}
          <div>
            <h3 className="font-medium text-base mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:anuragjadu922@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail size={14} />
                  anuragjadu922@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919896424841"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <PhoneCall size={14} />
                  +91 98964 24841
                </a>
              </li>
              <li>
                <a
                  href="https://anuragsingh922.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Globe size={14} />
                  Portfolio Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and policies section */}
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} User Sync. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
