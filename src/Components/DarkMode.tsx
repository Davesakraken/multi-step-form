"use client";

import { useThemeContext } from "@/Context/DarkModeContext";

export default function DarkMode() {
  const { theme, setTheme } = useThemeContext();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  console.log(theme);
  return (
    <button
      className="border border-lightGray shadow-md p-2 rounded-md active:shadow-none active:translate-y-1"
      onClick={toggleTheme}
    >
      {theme}
    </button>
  );
}
