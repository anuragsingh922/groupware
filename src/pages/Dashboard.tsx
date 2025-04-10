
import { useState } from 'react';
import { useUsers, User } from '@/hooks/useUsers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Pencil, Trash2, ChevronLeft, ChevronRight, Search, Loader2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import UserForm from '@/components/UserForm';

const Dashboard = () => {
  const {
    users,
    loading,
    page,
    totalPages,
    totalUsers,
    setPage,
    updateUser,
    deleteUser,
    searchTerm,
    setSearchTerm,
    isUpdating,
    isDeleting,
  } = useUsers();

  const [deleteUserId, setDeleteUserId] = useState<number | null>(null);
  const [editUser, setEditUser] = useState<User | null>(null);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const openEditModal = (user: User) => {
    setEditUser(user);
  };

  const closeEditModal = () => {
    setEditUser(null);
  };

  const handleUpdateUser = async (userData: Partial<User>) => {
    if (editUser) {
      const success = await updateUser(editUser.id, userData);
      if (success) {
        closeEditModal();
      }
    }
  };

  const openDeleteDialog = (userId: number) => {
    setDeleteUserId(userId);
  };

  const closeDeleteDialog = () => {
    setDeleteUserId(null);
  };

  const handleDeleteUser = async () => {
    if (deleteUserId) {
      const success = await deleteUser(deleteUserId);
      if (success) {
        closeDeleteDialog();
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground">
            Manage your users and their information
          </p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <Card key={user.id} className="user-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-background">
                      <img
                        src={user.avatar}
                        alt={`${user.first_name} ${user.last_name}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-medium">{`${user.first_name} ${user.last_name}`}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{user.email}</p>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEditModal(user)}
                        className="flex items-center gap-1"
                        disabled={isUpdating === user.id || isDeleting === user.id}
                      >
                        {isUpdating === user.id ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Updating...
                          </>
                        ) : (
                          <>
                            <Pencil className="h-4 w-4" />
                            Edit
                          </>
                        )}
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => openDeleteDialog(user.id)}
                        className="flex items-center gap-1"
                        disabled={isUpdating === user.id || isDeleting === user.id}
                      >
                        {isDeleting === user.id ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Deleting...
                          </>
                        ) : (
                          <>
                            <Trash2 className="h-4 w-4" />
                            Delete
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {users.length === 0 && !loading && (
            <div className="text-center py-12 border rounded-lg bg-muted/20">
              <p className="text-muted-foreground">No users found. Try adjusting your search.</p>
            </div>
          )}

          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-muted-foreground">
              Showing page {page} of {totalPages} ({totalUsers} total users)
            </p>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrevPage}
                disabled={page <= 1}
                className="flex items-center gap-1"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleNextPage}
                disabled={page >= totalPages}
                className="flex items-center gap-1"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </>
      )}

      {/* Edit User Dialog */}
      <Dialog open={!!editUser} onOpenChange={(open) => !open && closeEditModal()}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>Make changes to the user information below.</DialogDescription>
          </DialogHeader>
          {editUser && (
            <UserForm
              user={editUser}
              onSubmit={handleUpdateUser}
              onCancel={closeEditModal}
              isLoading={isUpdating === editUser.id}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Delete User Confirmation */}
      <AlertDialog open={!!deleteUserId} onOpenChange={(open) => !open && closeDeleteDialog()}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the user and remove their data from the server.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting !== null}>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDeleteUser} 
              className="bg-destructive text-destructive-foreground"
              disabled={isDeleting !== null}
            >
              {isDeleting !== null ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                'Delete'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Dashboard;
