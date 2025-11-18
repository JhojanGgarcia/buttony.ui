"use client";

import { useState, useEffect } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("system");
  const [resolvedTheme, setResolvedTheme] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "system";
    setTheme(saved);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateResolved = () => {
      if (theme === "system") {
        setResolvedTheme(mediaQuery.matches ? "dark" : "light");
      } else {
        setResolvedTheme(theme);
      }
    };
    updateResolved();
    if (theme === "system") {
      mediaQuery.addEventListener("change", updateResolved);
      return () => mediaQuery.removeEventListener("change", updateResolved);
    }
  }, [theme]);

  useEffect(() => {
    if (!resolvedTheme) return;
    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
    localStorage.setItem("theme", theme);
  }, [resolvedTheme, theme]);

  return { theme, setTheme, resolvedTheme };
}
