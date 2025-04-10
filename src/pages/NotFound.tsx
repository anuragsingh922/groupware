
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex items-center justify-center">
        <div className="container max-w-md py-12 px-4 text-center">
          <h1 className="text-6xl font-bold mb-6 gradient-heading">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="gap-2">
            <Link to="/">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
