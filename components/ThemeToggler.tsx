"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
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
    <div className="">
      {theme ? (
        <SunIcon
          onClick={handleThemeToggle}
          className="w-6 h-6 text-white animate cursor-pointer"
        />
      ) : (
        <MoonIcon
          onClick={handleThemeToggle}
          className="w-5 h-5 animate cursor-pointer"
        />
      )}
    </div>
  );
};

export default ThemeToggler;
