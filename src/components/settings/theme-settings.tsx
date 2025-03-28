"use client";

import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, Laptop } from "lucide-react";

export function ThemeSettings() {
  const { theme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme]);

  const handleThemeChange = (value: string) => {
    setSelectedTheme(value as "light" | "dark" | "system");
    setTheme(value as "light" | "dark" | "system");
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Theme Preference</h3>
        <p className="text-sm text-muted-foreground">
          Choose your preferred theme for the application.
        </p>
      </div>

      <RadioGroup
        value={selectedTheme}
        onValueChange={handleThemeChange}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-accent">
          <RadioGroupItem value="light" id="light" />
          <Label htmlFor="light" className="flex items-center cursor-pointer">
            <Sun className="mr-2 h-5 w-5" />
            Light
          </Label>
        </div>

        <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-accent">
          <RadioGroupItem value="dark" id="dark" />
          <Label htmlFor="dark" className="flex items-center cursor-pointer">
            <Moon className="mr-2 h-5 w-5" />
            Dark
          </Label>
        </div>

        <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-accent">
          <RadioGroupItem value="system" id="system" />
          <Label htmlFor="system" className="flex items-center cursor-pointer">
            <Laptop className="mr-2 h-5 w-5" />
            System
          </Label>
        </div>
      </RadioGroup>

      <div className="p-4 rounded-lg border bg-muted/50">
        <p className="text-sm">
          <strong>Note:</strong> The system theme will automatically switch
          between light and dark mode based on your device settings.
        </p>
      </div>
    </div>
  );
}
