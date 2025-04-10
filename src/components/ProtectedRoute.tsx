
import { useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useAppSelector } from '@/redux/hooks';
import { toast } from 'sonner';

const ProtectedRoute = () => {
  const { isAuthenticated, loading, token } = useAppSelector(state => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if token exists
    if (!loading) {
      if (!isAuthenticated || !token) {
        toast.error("Authentication required. Please sign in.");
        navigate('/login', { state: { from: location.pathname }, replace: true });
      }
    }
  }, [isAuthenticated, loading, navigate, location.pathname, token]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : null;
};

export default ProtectedRoute;
