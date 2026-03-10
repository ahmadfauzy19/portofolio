"use client"

import { motion } from "framer-motion"
import { useTheme } from "../context/themeContext"

export default function Hero() {

  const { theme, themes } = useTheme()
  const current = themes[theme]

  return (
    <section
      className={`
      relative
      min-h-screen
      flex
      items-center
      overflow-hidden
      bg-gradient-to-br
      ${current.bg}
      `}
    >

      {/* Glow Background */}

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className={`absolute w-72 h-72 ${current.glow} rounded-3xl blur-[120px] top-10 left-20`}
      />

      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className={`absolute w-56 h-56 ${current.glow} rounded-full blur-[120px] bottom-20 right-20`}
      />

      <motion.div
        animate={{ x: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className={`absolute w-40 h-40 ${current.glow} rounded-xl blur-[100px] top-40 right-40`}
      />

      {/* Main Content */}

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">

        {/* LEFT TEXT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center text-white"
        >

          {/* Small Label */}

          <p className="text-gray-400 mb-4 tracking-widest uppercase text-sm">
            Software Engineer Portfolio
          </p>

          {/* Headline */}

          <h1 className="font-bold leading-tight">

            <span className="block text-6xl md:text-4xl mb-5">
              Ahmad Fauzy
            </span>

            <span
              className={`
              text-3xl md:text-4xl
              bg-gradient-to-r
              ${current.gradientText}
              bg-clip-text
              text-transparent
              `}
            >
              Backend • WebGIS • AI
            </span>

          </h1>

          {/* Description */}

          <p className="mt-6 text-gray-400 max-w-lg leading-relaxed">
            I build scalable backend systems, geospatial platforms,
            and AI-powered web applications using modern technologies
            such as Spring Boot, PostgreSQL/PostGIS, and React.
          </p>

          {/* Tech Stack */}

          <div className="flex flex-wrap gap-3 mt-6 text-sm">

            <span className="px-3 py-1 border border-white/10 rounded-lg text-gray-300">
              Spring Boot
            </span>

            <span className="px-3 py-1 border border-white/10 rounded-lg text-gray-300">
              PostgreSQL
            </span>

            <span className="px-3 py-1 border border-white/10 rounded-lg text-gray-300">
              PostGIS
            </span>

            <span className="px-3 py-1 border border-white/10 rounded-lg text-gray-300">
              React
            </span>

            <span className="px-3 py-1 border border-white/10 rounded-lg text-gray-300">
              AI Systems
            </span>

          </div>

          {/* Buttons */}

          <div className="flex gap-4 mt-10">

            <button
              className={`
              px-6 py-3
              ${current.accentBg}
              text-black
              rounded-xl
              font-semibold
              ${current.accentHover}
              hover:scale-105
              transition
              `}
            >
              Download CV
            </button>

            <button
              className={`
              px-6 py-3
              border
              ${current.accentBorder}
              ${current.accent}
              rounded-xl
              hover:bg-white
              hover:text-black
              transition
              `}
            >
              View Projects
            </button>

          </div>

        </motion.div>

        {/* RIGHT PROFILE IMAGE */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center"
        >

          <div className="relative">

            {/* Glow Ring */}

            <div
              className={`
              absolute
              inset-0
              rounded-full
              bg-gradient-to-r
              ${current.gradientText}
              blur-3xl
              opacity-30
              `}
            />

            {/* Profile Image */}

            <img
              src="/profile.jpeg"
              className={`
              relative
              w-[320px]
              h-[320px]
              object-cover
              rounded-full
              border-4
              ${current.accentBorder}
              `}
            />

          </div>

        </motion.div>

      </div>
    </section>
  )
}