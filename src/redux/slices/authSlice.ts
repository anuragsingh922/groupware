
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'sonner';
import { NavigateFunction } from 'react-router-dom';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem('token'),
  token: localStorage.getItem('token'),
  loading: false,
};

// Async thunk for login
export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ 
    email, 
    password, 
    navigate 
  }: { 
    email: string; 
    password: string; 
    navigate: NavigateFunction;
  }, { rejectWithValue }) => {
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      localStorage.setItem('token', data.token);
      toast.success('Successfully logged in!');
      navigate('/dashboard');
      
      return data.token;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to login';
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

// Logout thunk
export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (navigate: NavigateFunction) => {
    localStorage.removeItem('token');
    toast.info('You have been logged out');
    navigate('/login');
    return null;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Use if needed for direct state changes
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<string>) => {
        state.isAuthenticated = true;
        state.token = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isAuthenticated = false;
        state.loading = false;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.token = null;
      });
  },
});

export const handleApiError = (error: any, dispatch: any, navigate: NavigateFunction) => {
  console.error("API Error:", error);
  
  if (
    error?.status === 401 || 
    error?.message?.includes("unauthorized") || 
    error?.message?.includes("token") || 
    error?.message?.includes("expired")
  ) {
    toast.error("Your session has expired. Please log in again.");
    dispatch(logoutUser(navigate));
  } else {
    const errorMessage = error instanceof Error ? error.message : 'An error occurred';
    toast.error(errorMessage);
  }
};

export default authSlice.reducer;
