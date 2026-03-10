"use client"

import { createContext, useContext, useState } from "react"

const themes = {
  emerald: {
    bg: "from-[#020617] via-[#052e16] to-[#022c22]",
    accent: "text-emerald-400",
    accentBg: "bg-emerald-400",
    accentBorder: "border-emerald-400",
    accentHover: "hover:bg-lime-400",
    gradientText: "from-emerald-400 to-lime-400",
    glow: "bg-emerald-400/20"
  },

  blue: {
    bg: "from-[#020617] via-[#0f172a] to-[#1e3a8a]",
    accent: "text-blue-400",
    accentBg: "bg-blue-400",
    accentBorder: "border-blue-400",
    accentHover: "hover:bg-cyan-400",
    gradientText: "from-blue-400 to-cyan-400",
    glow: "bg-blue-400/20"
  },

  purple: {
    bg: "from-[#020617] via-[#1e1b4b] to-[#4c1d95]",
    accent: "text-purple-400",
    accentBg: "bg-purple-400",
    accentBorder: "border-purple-400",
    accentHover: "hover:bg-pink-400",
    gradientText: "from-purple-400 to-pink-400",
    glow: "bg-purple-400/20"
  }
}

const ThemeContext = createContext<any>(null)

export function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState("emerald")

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}