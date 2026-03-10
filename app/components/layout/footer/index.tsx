"use client"

import { useTheme } from "@/app/context/themeContext"
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function Footer() {

  const { theme, themes } = useTheme()
  const current = themes[theme]

  return (
    <footer
      className={`
      relative py-12 overflow-hidden
      bg-gradient-to-br
      ${current.bg}
      border-t border-white/10
      `}
    >

      {/* Glow */}

      <div className={`absolute w-[300px] h-[300px] ${current.glow} blur-[120px] rounded-full top-0 left-10`} />

      <div className="relative max-w-7xl mx-auto px-6 text-white">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}

          <div className="text-center md:text-left">

            <p className="font-semibold text-lg">
              Ahmad Fauzy
            </p>

            <p className="text-sm text-gray-400">
              Software Developer • Backend • AI • WebGIS
            </p>

          </div>


          {/* Social */}

          <div className="flex items-center gap-6 text-xl text-gray-300">

            <a
              href="https://github.com"
              target="_blank"
              className="hover:text-white hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-white hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-pink-400 hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/6281312396135"
              target="_blank"
              className="hover:text-green-400 hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>


        {/* Divider */}

        <div className="border-t border-white/10 my-6" />


        {/* Bottom */}

        <div className="text-center text-sm text-gray-400">

          © {new Date().getFullYear()} Ahmad Fauzy.  
          Built with Next.js & Tailwind CSS.

        </div>

      </div>

    </footer>
  )
}