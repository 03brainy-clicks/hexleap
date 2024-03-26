import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import React, { useState } from "react";

const ThemeToggler = () => {
  const [theme, setTheme] = useState(false);

  const handleThemeToggle = () => {
    const node = document.documentElement.classList;
    if (!node.contains("dark")) {
      node.add("dark");
      setTheme(true);
    } else {
      node.remove("dark");
      setTheme(false);
    }
  };

  return (
    <div className="flex items-center">
      <span onClick={handleThemeToggle} className="cursor-pointer">
        {theme ? (
          <SunIcon className="w-6 h-6 text-white" />
        ) : (
          <MoonIcon className="w-5 h-5 text-black" />
        )}
      </span>
    </div>
  );
};

export default ThemeToggler;
