"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { motion, useScroll } from "framer-motion"
import { useTheme } from "@/app/context/themeContext"
import Magnetic from "@/app/components/ui/magnetic"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/projects" },
  { name: "Contact", href: "/contact" }
]

export default function Header() {

  const { theme, setTheme, themes } = useTheme()
  const current = themes[theme]

  const pathname = usePathname()

  const [scrolled, setScrolled] = useState(false)

  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Scroll Progress Bar */}

      <motion.div
        style={{ scaleX: scrollYProgress }}
        className={`fixed top-0 left-0 right-0 h-[3px] origin-left ${current.accentBg} z-[60]`}
      />

      {/* Navbar */}

      <header
        className={`
        fixed w-full top-0 z-50 transition-all duration-500
        ${scrolled
            ? "bg-black/40 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
          }
        `}
      >

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}

          <div className="flex items-center gap-2 font-semibold text-lg text-white">

            <div className={`w-3 h-3 ${current.accentBg} rounded-full animate-pulse`} />

            <span
              className={`
              bg-gradient-to-r
              ${current.gradientText}
              bg-clip-text
              text-transparent
              `}
            >
              Ahmad Fauzy
            </span>

          </div>

          {/* Navigation */}

          <nav className="flex items-center gap-8 text-gray-300">

            {navItems.map((item) => {

              const active = pathname === item.href

              return (
                <Magnetic key={item.name}>

                  <Link
                    href={item.href}
                    className={`
                    relative transition
                    ${active ? current.accent : "hover:text-white"}
                    `}
                  >

                    {item.name}

                    {active && (
                      <motion.div
                        layoutId="activeLink"
                        className={`
                        absolute
                        -bottom-1
                        left-0
                        right-0
                        h-[2px]
                        ${current.accentBg}
                        `}
                      />
                    )}

                  </Link>

                </Magnetic>
              )
            })}

          </nav>

          {/* Theme Switcher */}

          <div className="flex items-center gap-3">

            <ThemeDot
              color="bg-emerald-400"
              active={theme === "emerald"}
              onClick={() => setTheme("emerald")}
            />

            <ThemeDot
              color="bg-blue-400"
              active={theme === "blue"}
              onClick={() => setTheme("blue")}
            />

            <ThemeDot
              color="bg-purple-400"
              active={theme === "purple"}
              onClick={() => setTheme("purple")}
            />

          </div>

        </div>

      </header>
    </>
  )
}

function ThemeDot({ color, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`
      w-4 h-4 rounded-full ${color}
      transition
      ${active ? "ring-2 ring-white scale-110" : "opacity-70 hover:scale-110"}
      `}
    />
  )
}