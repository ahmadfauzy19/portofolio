"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      overflow-hidden
      bg-gradient-to-br
      from-backgroundDark
      via-backgroundMid
      to-backgroundSoft
      "
    >

      {/* Glow Background */}

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-72 h-72 bg-emeraldAccent/20 rounded-3xl blur-[120px] top-10 left-20"
      />

      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-56 h-56 bg-limeAccent/20 rounded-full blur-[120px] bottom-20 right-20"
      />

      <motion.div
        animate={{ x: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-40 h-40 bg-emeraldAccent/10 rounded-xl blur-[100px] top-40 right-40"
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

          <p className="text-graySoft mb-4">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            Hello, my name is <br />

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

          </h1>

          <p className="mt-6 text-grayLight max-w-lg">
            Software engineer specializing in backend development
            using Spring Boot, PostgreSQL, WebGIS technologies,
            and modern full-stack frameworks.
          </p>

          {/* Buttons */}

          <div className="flex gap-4 mt-8">

            <button
              className="
              px-6 py-3
              bg-emeraldAccent
              text-black
              rounded-xl
              font-semibold
              hover:bg-limeAccent
              hover:scale-105
              transition
              "
            >
              Download CV
            </button>

            <button
              className="
              px-6 py-3
              border border-emeraldAccent
              text-emeraldAccent
              rounded-xl
              hover:bg-emeraldAccent
              hover:text-black
              transition
              "
            >
              See my work
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
              className="
              absolute
              inset-0
              rounded-full
              bg-gradient-to-r
              from-emeraldAccent
              to-limeAccent
              blur-3xl
              opacity-30
              "
            />

            {/* Profile Image */}

            <img
              src="/profile.jpeg"
              className="
              relative
              w-[320px]
              h-[320px]
              object-cover
              rounded-full
              border-4
              border-emeraldAccent
              "
            />

          </div>

        </motion.div>

      </div>
    </section>
  )
}