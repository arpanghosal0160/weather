"use client";
import { useTheme } from "@/app/context/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-xl bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 shadow hover:shadow-lg transition-all"
    >
      {theme === "light" ? (
        <Moon className="text-zinc-800 w-5 h-5" />
      ) : (
        <Sun className="text-yellow-300 w-5 h-5" />
      )}
    </motion.button>
  );
}
