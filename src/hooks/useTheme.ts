import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") || "light";
    setTheme(stored);
    document.body.classList.add(stored);
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";

    document.body.classList.remove(theme);
    document.body.classList.add(next);

    localStorage.setItem("theme", next);
  }

  return { theme, toggleTheme };
}
