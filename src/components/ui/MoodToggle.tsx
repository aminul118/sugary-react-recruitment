import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useTheme } from "@/providers/ThemeProvider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      className="w-full flex items-center gap-2 justify-center"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <>
          <Moon className="h-4 w-4" />
          Dark Mode
        </>
      ) : (
        <>
          <Sun className="h-4 w-4" />
          Light Mode
        </>
      )}
    </Button>
  );
}
