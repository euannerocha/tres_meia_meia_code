import React, { useEffect, useState } from "react";
import "./stylesTheme.css"

type Theme = "dark" | "light";

const ThemeToggle = () => {
  const defaultTheme = "light";

  const [themeMode, setThemeMode] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || defaultTheme
  );

  useEffect(() => {
    document.body.classList.toggle("dark-theme", themeMode === "dark");
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((theme) => (theme === "dark" ? "light" : "dark"));

    document.body.classList.toggle("dark-theme", true);
  };

  console.log(themeMode);

  return (
    <div>
      <button type="button" onClick={toggleTheme} style={{border: "1px solid black"}}>
        {themeMode === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default ThemeToggle;
