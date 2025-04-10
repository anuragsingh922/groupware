
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogOut, Users, Home } from 'lucide-react';
import { useAppDispatch } from '@/redux/hooks';
import { logoutUser } from '@/redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

/**
 * AppLayout Component
 * 
 * Serves as the main layout wrapper for authenticated pages.
 * Provides consistent header with navigation and logout functionality,
 * renders child components via Outlet, and includes the Footer component.
 */
const AppLayout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  /**
   * Handles user logout by dispatching the logout action
   * which clears authentication state and redirects to login
   */
  const handleLogout = () => {
    dispatch(logoutUser(navigate));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-lg font-semibold text-primary flex items-center gap-2">
              <Users size={24} />
              <span>User Sync</span>
            </Link>
          </div>
          <Button variant="ghost" onClick={handleLogout} className="flex items-center gap-2">
            <LogOut size={16} />
            <span>Logout</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
