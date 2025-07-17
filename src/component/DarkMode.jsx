import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

const DarkMode = () => {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    console.log(savedTheme)
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (prefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Save theme and update HTML class
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="w-fit p-1 m2  ">
      <button
        onClick={() => setTheme("light")}
        className={`p-3 gap-1 rounded-lg hover:bg-zinc-200 ${
          theme === "light" ? "bg-zinc-300" : ""
        }`}
      >
        <LuSun />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-3 rounded-lg hover:bg-zinc-200 ${
          theme === "dark" ? "bg-zinc-300" : ""
        }`}
      >
        <LuMoon />
      </button>
    </div>
  );
};

export default DarkMode;