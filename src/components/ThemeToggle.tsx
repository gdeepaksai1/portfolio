
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true); // Default to dark theme

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const shouldBeDark = theme === "light" ? false : true; // Default to dark
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full transition-all duration-300 hover:bg-cyan-500/20 hover:scale-110 hover:text-cyan-400"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-400 transition-all duration-300" />
      ) : (
        <Moon className="h-5 w-5 text-slate-300 transition-all duration-300" />
      )}
    </Button>
  );
};
