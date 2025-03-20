"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, X, UserCheck } from "lucide-react";
import { useDebounce } from "@/hooks/use-debounce";

interface UserSearchProps {
  onSelect: (user: any) => void;
  selectedUserId?: string;
}

export function UserSearch({ onSelect, selectedUserId }: UserSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const debouncedSearch = useDebounce(searchQuery, 300);

  // Fetch the selected user on mount if selectedUserId is provided
  useEffect(() => {
    if (selectedUserId) {
      fetchUserById(selectedUserId);
    }
  }, [selectedUserId]);

  // Search for users when the debounced search query changes
  useEffect(() => {
    if (debouncedSearch.length >= 3) {
      searchUsers(debouncedSearch);
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearch]);

  const fetchUserById = async (userId: string) => {
    try {
      const response = await fetch(`/api/users/${userId}`);
      if (response.ok) {
        const user = await response.json();
        setSelectedUser(user);
        onSelect(user);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const searchUsers = async (query: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/users/search?q=${encodeURIComponent(query)}`
      );
      if (response.ok) {
        const users = await response.json();
        setSearchResults(users);
        setShowResults(true);
      }
    } catch (error) {
      console.error("Error searching users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUserSelect = (user: any) => {
    setSelectedUser(user);
    setSearchQuery("");
    setSearchResults([]);
    setShowResults(false);
    onSelect(user);
  };

  const clearSelection = () => {
    setSelectedUser(null);
    setSearchQuery("");
    onSelect(null);
  };

  return (
    <div className="space-y-2">
      {selectedUser ? (
        <div className="flex items-center justify-between p-2 border rounded-md">
          <div className="flex items-center">
            <UserCheck className="h-5 w-5 mr-2 text-green-500" />
            <div>
              <p className="font-medium">
                {selectedUser.username || selectedUser.email}
              </p>
              <p className="text-sm text-muted-foreground">
                {selectedUser.email}
              </p>
            </div>
            {selectedUser.status === "DISABLED" && (
              <Badge variant="outline" className="ml-2">
                Disabled (will be reactivated)
              </Badge>
            )}
          </div>
          <Button variant="ghost" size="sm" onClick={clearSelection}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="relative">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search users by email or username..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => {
                if (searchResults.length > 0) {
                  setShowResults(true);
                }
              }}
            />
          </div>

          {showResults && searchResults.length > 0 && (
            <Card className="absolute z-10 w-full mt-1 max-h-60 overflow-auto">
              <CardContent className="p-0">
                <ul className="divide-y">
                  {searchResults.map((user) => (
                    <li
                      key={user.id}
                      className="p-2 hover:bg-accent cursor-pointer"
                      onClick={() => handleUserSelect(user)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">
                            {user.username || user.email}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {user.email}
                          </p>
                        </div>
                        <Badge>{user.role}</Badge>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
