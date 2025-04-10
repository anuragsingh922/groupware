
import { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { handleApiError, logoutUser } from '@/redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface UserListResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isUpdating, setIsUpdating] = useState<number | null>(null); // Track which user is being updated
  const [isDeleting, setIsDeleting] = useState<number | null>(null); // Track which user is being deleted
  const { token } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://reqres.in/api/users?page=${page}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      
      const result: UserListResponse = await response.json();
      setUsers(result.data);
      setTotalPages(result.total_pages);
      setTotalUsers(result.total);
    } catch (error) {
      console.error('Error fetching users:', error);
      handleApiError(error, dispatch, navigate);
    } finally {
      setLoading(false);
    }
  }, [page, dispatch, navigate]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const updateUser = async (id: number, data: Partial<User>): Promise<boolean> => {
    setIsUpdating(id);
    try {
      const response = await fetch(`https://reqres.in/api/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to update user');
      }

      // Update the user in the local state
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === id ? { ...user, ...data } : user))
      );

      toast.success('User updated successfully');
      return true;
    } catch (error) {
      handleApiError(error, dispatch, navigate);
      return false;
    } finally {
      setIsUpdating(null);
    }
  };

  const deleteUser = async (id: number): Promise<boolean> => {
    setIsDeleting(id);
    try {
      const response = await fetch(`https://reqres.in/api/users/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok && response.status !== 204) {
        throw new Error('Failed to delete user');
      }

      // Remove the user from the local state
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      toast.success('User deleted successfully');
      return true;
    } catch (error) {
      handleApiError(error, dispatch, navigate);
      return false;
    } finally {
      setIsDeleting(null);
    }
  };

  const filteredUsers = searchTerm
    ? users.filter(
        (user) =>
          user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : users;

  return {
    users: filteredUsers,
    loading,
    page,
    totalPages,
    totalUsers,
    setPage,
    fetchUsers,
    updateUser,
    deleteUser,
    searchTerm,
    setSearchTerm,
    isUpdating,
    isDeleting,
  };
};
