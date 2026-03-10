"use client"

import { motion } from "framer-motion"
import {
  SiSpringboot,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiRedis
} from "react-icons/si"

import { FaDatabase, FaJava } from "react-icons/fa"

export default function About() {

  const techStack = [
    { name: "Java", icon: <FaJava className="text-orange-400" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-emerald-400" /> },
    { name: "React", icon: <SiReact className="text-sky-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
    { name: "Redis", icon: <SiRedis className="text-red-400" /> },
    { name: "PostGIS", icon: <FaDatabase className="text-lime-400" /> }
  ]

  return (
    <section
      className="
      relative py-32 overflow-hidden
      bg-gradient-to-br
      from-[#020617]
      via-[#052e16]
      to-[#022c22]
      "
    >

      {/* Glow Background */}

      <div className="absolute w-[450px] h-[450px] bg-emerald-500/20 blur-[160px] rounded-full top-20 left-10"></div>
      <div className="absolute w-[450px] h-[450px] bg-lime-400/20 blur-[160px] rounded-full bottom-20 right-10"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-white">

        {/* Title */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
          text-4xl font-bold mb-10
          bg-gradient-to-r from-emerald-400 to-lime-300
          bg-clip-text text-transparent
          "
        >
          About Me
        </motion.h2>

        {/* Summary */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 leading-relaxed max-w-3xl"
        >
          I am a Software Engineer focused on building scalable backend systems,
          WebGIS platforms, and AI-powered applications. My main expertise lies
          in backend architecture using Java Spring Boot and modern REST APIs.
        </motion.p>

        {/* Experience + Education */}

        <div className="grid md:grid-cols-2 gap-16 mt-20">

          {/* Experience */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="
            p-8 rounded-2xl
            bg-white/5 backdrop-blur-lg
            border border-white/10
            hover:border-emerald-400/40
            hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]
            transition
            "
          >

            <h3 className="text-2xl font-semibold mb-6 text-emerald-300">
              Experience
            </h3>

            <div className="space-y-6">

              <div>
                <p className="font-semibold">
                  Software Developer — PT Padepokan Tujuh Sembilan
                </p>
                <p className="text-gray-400 text-sm">
                  Sept 2025 – Present
                </p>
              </div>

              <div>
                <p className="font-semibold">
                  Software Developer — Jabar Digital Service
                </p>
                <p className="text-gray-400 text-sm">
                  Oct 2025 – Dec 2025
                </p>
              </div>

              <div>
                <p className="font-semibold">
                  Backend Developer — PT Radya Gita Bahagi
                </p>
                <p className="text-gray-400 text-sm">
                  Jun 2024 – Oct 2024
                </p>
              </div>

            </div>

          </motion.div>

          {/* Education */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="
            p-8 rounded-2xl
            bg-white/5 backdrop-blur-lg
            border border-white/10
            hover:border-lime-400/40
            hover:shadow-[0_0_30px_rgba(163,230,53,0.2)]
            transition
            "
          >

            <h3 className="text-2xl font-semibold mb-6 text-lime-300">
              Education
            </h3>

            <div className="space-y-6">

              <div>
                <p className="font-semibold">
                  Bandung State Polytechnic
                </p>
                <p className="text-gray-400 text-sm">
                  D3 Computer Engineering & Informatics
                </p>
              </div>

              <div>
                <p className="font-semibold">
                  SMKN 6 Garut
                </p>
                <p className="text-gray-400 text-sm">
                  Computer & Network Engineering
                </p>
              </div>

            </div>

          </motion.div>

        </div>

        {/* Tech Stack */}

        <div className="mt-24">

          <h3 className="text-2xl font-semibold mb-10 text-emerald-300">
            Tech Stack
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="
                flex items-center gap-3
                p-4 rounded-xl
                bg-white/5
                border border-white/10
                hover:bg-emerald-400/10
                hover:border-emerald-400/30
                hover:scale-105
                transition
                "
              >

                <div className="text-xl">
                  {tech.icon}
                </div>

                <span className="text-sm">
                  {tech.name}
                </span>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}