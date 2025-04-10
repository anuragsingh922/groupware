
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, User, Lock, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { loginUser } from '@/redux/slices/authSlice';
import Footer from '@/components/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const { loading } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      dispatch(loginUser({ email, password, navigate }));
    }
  };

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-background flex flex-col">
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md mb-8">
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <Card className="w-full shadow-lg animate-fade-in border-0 shadow-primary/10">
              <CardHeader className="space-y-1">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/30 flex items-center justify-center">
                    <User className="text-primary h-8 w-8" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
                <CardDescription className="text-center">
                  Enter your credentials to sign in to your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        placeholder="eve.holt@reqres.in"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`pl-10 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      />
                      <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type="password"
                        placeholder="cityslicka"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`pl-10 ${errors.password ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      />
                      <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-sm flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.password}
                      </p>
                    )}
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin mr-2">⊚</span>
                        Signing in...
                      </>
                    ) : (
                      'Sign in'
                    )}
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    <span>For demo, use: </span>
                    <code className="bg-muted px-1 py-0.5 rounded text-xs">eve.holt@reqres.in</code>
                    <span> / </span>
                    <code className="bg-muted px-1 py-0.5 rounded text-xs">cityslicka</code>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Login;
