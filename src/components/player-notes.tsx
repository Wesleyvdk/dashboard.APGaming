"use client";

import { useState } from "react";
import type { Player, PlayerNote } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface PlayerNotesProps {
  player: Player;
}

export function PlayerNotes({ player }: PlayerNotesProps) {
  const [notes, setNotes] = useState<PlayerNote[]>(player.notes);
  const [newNote, setNewNote] = useState("");
  const { toast } = useToast();

  const addNote = async () => {
    if (!newNote.trim()) return;

    try {
      const response = await fetch(`/api/players/${player.id}/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: newNote, isPrivate: true }),
      });

      if (!response.ok) {
        throw new Error("Failed to add note");
      }

      const addedNote = await response.json();
      setNotes([addedNote, ...notes]);
      setNewNote("");
      toast({
        title: "Note added",
        description: "Your note has been added successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add note. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Player Notes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Textarea
              placeholder="Add a new note..."
              value={newNote}
              onChange={(e: any) => setNewNote(e.target.value)}
            />
            <Button onClick={addNote} className="mt-2">
              Add Note
            </Button>
          </div>
          <div className="space-y-4">
            {notes.map((note) => (
              <div key={note.id} className="border-b pb-4">
                <p>{note.content}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  By {note.author.username} on{" "}
                  {new Date(note.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
