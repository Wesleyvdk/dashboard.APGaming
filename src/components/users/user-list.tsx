"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MultiSelect } from "@/components/ui/multi-select";
import { useToast } from "@/hooks/use-toast";
import { Role } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Mail, UserX, RefreshCw } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface User {
  id: string;
  email: string;
  username: string;
  roles: Role[];
  status: "ACTIVE" | "PENDING" | "DISABLED";
}

export function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const pageSize = 10;

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/users?page=${page}&pageSize=${pageSize}`
      );
      if (response.ok) {
        const data = await response.json();
        setUsers(data.users);
        setTotalPages(Math.ceil(data.total / pageSize));
      } else {
        throw new Error("Failed to fetch users");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load users. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRolesChange = async (userId: string, newRoles: Role[]) => {
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roles: newRoles }),
      });

      if (response.ok) {
        setUsers(
          users.map((user) =>
            user.id === userId ? { ...user, roles: newRoles } : user
          )
        );
        toast({
          title: "Success",
          description: "User roles updated successfully.",
        });
      } else {
        throw new Error("Failed to update user roles");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update user roles. Please try again.",
        variant: "destructive",
      });
    }
  };

  const resendInvitation = async (userId: string) => {
    try {
      const response = await fetch(`/api/users/${userId}/resend-invitation`, {
        method: "POST",
      });

      if (response.ok) {
        const { invitationLink } = await response.json();
        navigator.clipboard.writeText(invitationLink);
        toast({
          title: "Invitation Resent",
          description: "Invitation link copied to clipboard.",
        });
      } else {
        throw new Error("Failed to resend invitation");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to resend invitation. Please try again.",
        variant: "destructive",
      });
    }
  };

  const toggleUserStatus = async (userId: string, currentStatus: string) => {
    const newStatus = currentStatus === "DISABLED" ? "ACTIVE" : "DISABLED";

    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        setUsers(
          users.map((user) =>
            user.id === userId ? { ...user, status: newStatus as any } : user
          )
        );
        toast({
          title: "Success",
          description: `User ${
            newStatus === "DISABLED" ? "disabled" : "activated"
          } successfully.`,
        });
      } else {
        throw new Error(
          `Failed to ${newStatus === "DISABLED" ? "disable" : "activate"} user`
        );
      }
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to update user status. Please try again.`,
        variant: "destructive",
      });
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ACTIVE":
        return <Badge variant="success">Active</Badge>;
      case "PENDING":
        return <Badge variant="warning">Pending</Badge>;
      case "DISABLED":
        return <Badge variant="destructive">Disabled</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Username</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Roles</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                Loading...
              </TableCell>
            </TableRow>
          ) : users.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                No users found
              </TableCell>
            </TableRow>
          ) : (
            users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <MultiSelect
                    options={Object.values(Role).map((role) => ({
                      label: role,
                      value: role,
                    }))}
                    selected={user.roles}
                    onChange={(roles) =>
                      handleRolesChange(user.id, roles as Role[])
                    }
                    disabled={user.status !== "ACTIVE"}
                  />
                </TableCell>
                <TableCell>{getStatusBadge(user.status)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {user.status === "PENDING" && (
                        <DropdownMenuItem
                          onClick={() => resendInvitation(user.id)}
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          Resend Invitation
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem
                        onClick={() => toggleUserStatus(user.id, user.status)}
                      >
                        {user.status === "DISABLED" ? (
                          <>
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Activate User
                          </>
                        ) : (
                          <>
                            <UserX className="mr-2 h-4 w-4" />
                            Disable User
                          </>
                        )}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {totalPages > 1 && (
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                isActive={page === 1 || isLoading}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <PaginationItem key={p}>
                <PaginationLink
                  isActive={page === p}
                  onClick={() => setPage(p)}
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                isActive={page === totalPages || isLoading}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
