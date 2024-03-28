'use client'
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ThemeToggler = () => {
  const [theme, setTheme] = useState(true);
  const [animateDiv, setAnimateDiv] = useState(false);

  const handleThemeToggle = () => {
    setAnimateDiv(true);
    const node = document.documentElement.classList;
    if (!node.contains("dark")) {
      node.add("dark");
      setTheme(true);
    } else {
      node.remove("dark");
      setTheme(false);
    }
    setTimeout(() => {
      setAnimateDiv(false);
    }, 500); // Adjust the duration as needed
  };

  return (
    <div className="relative">
      <motion.div
        className="cursor-pointer"
        onClick={handleThemeToggle}
        animate={{ rotate: theme ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {theme ? (
          <motion.div className="w-6 h-6 text-white">
            <SunIcon />
          </motion.div>
        ) : (
          <motion.div className="w-5 h-5 text-black">
            <MoonIcon />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ThemeToggler;
