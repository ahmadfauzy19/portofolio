"use client"

import { useTheme } from "./themeContext"

export default function ThemeSwitcher() {

  const { theme, setTheme } = useTheme()

  return (
    <div className="flex gap-2">

      <button
        onClick={() => setTheme("emerald")}
        className={`w-4 h-4 rounded-full bg-emerald-400 ${theme === "emerald" ? "ring-2 ring-white" : ""}`}
      />

      <button
        onClick={() => setTheme("blue")}
        className={`w-4 h-4 rounded-full bg-blue-400 ${theme === "blue" ? "ring-2 ring-white" : ""}`}
      />

      <button
        onClick={() => setTheme("purple")}
        className={`w-4 h-4 rounded-full bg-purple-400 ${theme === "purple" ? "ring-2 ring-white" : ""}`}
      />

    </div>
  )
}