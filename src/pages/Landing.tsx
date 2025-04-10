
import { useState, useEffect } from 'react';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import TechnicalSection from '@/components/landing/TechnicalSection';
import DeveloperSection from '@/components/landing/DeveloperSection';
import Footer from '@/components/Footer';

/**
 * Landing Page Component
 * 
 * The main landing page of the application displaying key sections:
 * - Hero section with call-to-action
 * - Features showcase
 * - Technical information
 * - Developer information
 * - Footer
 * 
 * Includes animation effects for visual appeal.
 */
const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Set visibility after initial render for animations
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      {/* Visual elements for background */}
      <div className="floating-lines-container">
        <div className="floating-line"></div>
        <div className="floating-line"></div>
        <div className="floating-line"></div>
        <div className="floating-line"></div>
        <div className="floating-line"></div>
      </div>
      <div className="flex-1">
        <HeroSection isVisible={isVisible} />
        <FeaturesSection />
        <TechnicalSection />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0"></div>
          <div className="absolute inset-0 bg-grid-primary opacity-20 [mask-image:linear-gradient(to_top,transparent,white,transparent)] z-0"></div>
          <div className="diagonal-lines opacity-40 z-0"></div>
          <DeveloperSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
