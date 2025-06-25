import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if there's a saved theme in localStorage
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      return savedTheme;
    }
    // Otherwise, check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem("theme", theme);

    // Apply theme CSS custom properties to document
    const root = document.documentElement;
    if (theme === "dark") {
      root.style.setProperty("--bg-primary", "#0f172a"); // slate-900
      root.style.setProperty("--bg-secondary", "#1e293b"); // slate-800
      root.style.setProperty("--bg-tertiary", "#334155"); // slate-700
      root.style.setProperty("--text-primary", "#ffffff");
      root.style.setProperty("--text-secondary", "#cbd5e1"); // slate-300
      root.style.setProperty("--text-tertiary", "#94a3b8"); // slate-400
      root.style.setProperty("--border-color", "#475569"); // slate-600
      root.style.setProperty("--accent-color", "#6366f1"); // indigo-500
    } else {
      root.style.setProperty("--bg-primary", "#f8fafc"); // slate-50
      root.style.setProperty("--bg-secondary", "#ffffff");
      root.style.setProperty("--bg-tertiary", "#f1f5f9"); // slate-100
      root.style.setProperty("--text-primary", "#0f172a"); // slate-900
      root.style.setProperty("--text-secondary", "#334155"); // slate-700
      root.style.setProperty("--text-tertiary", "#64748b"); // slate-500
      root.style.setProperty("--border-color", "#e2e8f0"); // slate-200
      root.style.setProperty("--accent-color", "#4f46e5"); // indigo-600
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
