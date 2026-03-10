"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const Header = () => {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`
      fixed w-full top-0 z-50 transition-all duration-300
      ${scrolled
        ? "bg-backgroundDark/80 backdrop-blur-xl border-b border-emeraldAccent/10 shadow-lg"
        : "bg-transparent"
      }
      `}
    >

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}

        <div className="flex items-center gap-2 font-semibold text-lg text-white">

          <div className="w-3 h-3 bg-emeraldAccent rounded-full animate-pulse"></div>

          <span
            className="
            bg-gradient-to-r
            from-emeraldAccent
            to-limeAccent
            bg-clip-text
            text-transparent
            "
          >
            Ahmad Fauzy
          </span>

        </div>

        {/* Navigation */}

        <nav className="flex items-center gap-8 text-graySoft">

          <Link
            href="/"
            className="hover:text-emeraldAccent transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-emeraldAccent transition"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="hover:text-emeraldAccent transition"
          >
            Portfolio
          </Link>

          <Link
            href="/contact"
            className="hover:text-emeraldAccent transition"
          >
            Contact
          </Link>

        </nav>

      </div>

    </header>
  )
}

export default Header