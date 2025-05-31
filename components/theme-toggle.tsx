"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme === "light") {
      setIsDark(false)
      document.documentElement.classList.add("light")
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.add("light")
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover-lift border border-gray-700/50 hover:border-yellow-400/50"
      aria-label="Alternar tema"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-400 hover:text-yellow-300 transition-colors duration-300" />
      ) : (
        <Moon className="h-5 w-5 text-gray-600 hover:text-gray-800 transition-colors duration-300" />
      )}
    </button>
  )
}
