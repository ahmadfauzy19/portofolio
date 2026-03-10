"use client"

import { motion } from "framer-motion"
import { useTheme } from "../context/themeContext"

import {
  SiSpringboot,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiRedis,
  SiFastapi,
  SiPython,
  SiMysql,
  SiNestjs
} from "react-icons/si"

import { FaDatabase, FaJava, FaGraduationCap } from "react-icons/fa"

export default function About() {

  const { theme, themes } = useTheme()
  const current = themes[theme]
  const techIcons = [
    { icon: <FaJava /> },
    { icon: <SiSpringboot /> },
    { icon: <SiReact /> },
    { icon: <SiNextdotjs /> },
    { icon: <SiPostgresql /> },
    { icon: <SiMongodb /> },
    { icon: <SiDocker /> },
    { icon: <SiRedis /> },
    { icon: <FaDatabase /> }
  ]

  const techStack = [
    { name: "Java", icon: <FaJava className="text-orange-400" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-emerald-400" /> },
    { name: "React", icon: <SiReact className="text-sky-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "NestJS", icon: <SiNestjs className="text-red-500" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-green-400" /> },
    { name: "Python", icon: <SiPython className="text-yellow-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Redis", icon: <SiRedis className="text-red-400" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
    { name: "GeoServer", icon: <FaDatabase className="text-lime-400" /> },
    { name: "PostGIS", icon: <FaDatabase className="text-lime-500" /> },
    { name: "MinIO", icon: <FaDatabase className="text-orange-400" /> }
  ]

  return (
    <section
      className={`
      relative py-32 overflow-hidden
      bg-gradient-to-br
      ${current.bg}
      `}
    >

      {/* Glow */}

      <div className={`absolute w-[500px] h-[500px] ${current.glow} blur-[160px] rounded-full top-10 left-0`} />
      <div className={`absolute w-[500px] h-[500px] ${current.glow} blur-[160px] rounded-full bottom-0 right-0`} />

      <div className="relative max-w-7xl mx-auto px-6 text-white">

        {/* Title */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`
          text-4xl md:text-5xl font-bold mb-16
          bg-gradient-to-r
          ${current.gradientText}
          bg-clip-text
          text-transparent
          `}
        >
          About Me
        </motion.h2>


        {/* ABOUT GRID */}

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT TEXT */}

          <div className="space-y-6 text-gray-300 leading-relaxed">

            <p>
              I am a Software Developer specializing in backend engineering,
              WebGIS platforms, and AI-powered applications.
            </p>

            <p>
              I build scalable backend systems using Spring Boot,
              FastAPI, PostgreSQL/PostGIS, MongoDB, and Redis while
              developing modern frontends with React and Next.js.
            </p>

            <p>
              My work focuses on building reliable APIs, AI-powered
              processing pipelines, and geospatial platforms for
              real-world decision making.
            </p>

          </div>

          {/* RIGHT TECH VISUAL */}

          <div className="grid grid-cols-3 gap-6">

            {techIcons.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="
                flex items-center justify-center
                h-20 w-20
                rounded-xl
                bg-white/5
                border border-white/10
                text-2xl
                hover:scale-110
                transition
                "
              >
                {tech.icon}
              </motion.div>
            ))}

          </div>

        </div>

        {/* EDUCATION */}

        <div className="mt-24">

          <h3 className={`text-2xl font-semibold mb-12 ${current.accent}`}>
            Education
          </h3>

          <div className="relative border-l border-white/20 ml-4 space-y-12">

            {/* POLBAN */}

            <div className="relative pl-10">

              <div className="absolute -left-5 top-1 flex items-center justify-center
              w-10 h-10 rounded-full bg-white/10 border border-white/20">

                <FaGraduationCap />

              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10"
              >

                <p className="font-semibold text-lg">
                  Bandung State Polytechnic
                </p>

                <p className="text-gray-400 text-sm">
                  D3 Informatics and Computer Engineering
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  2022 — 2025
                </p>

                <p className="text-gray-400 text-sm mt-3">
                  GPA: <span className="text-white font-medium">3.30 / 4.00</span>
                </p>

              </motion.div>

            </div>

            {/* SMK */}

            <div className="relative pl-10">

              <div className="absolute -left-5 top-1 flex items-center justify-center
              w-10 h-10 rounded-full bg-white/10 border border-white/20">

                <FaGraduationCap />

              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10"
              >

                <p className="font-semibold text-lg">
                  State Vocational High School 6 Garut
                </p>

                <p className="text-gray-400 text-sm">
                  Network and Computer Engineering
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  2018 — 2021
                </p>

              </motion.div>

            </div>

          </div>

        </div>


        {/* EXPERIENCE */}

        <div className="mt-28">

          <h3 className={`text-2xl font-semibold mb-14 ${current.accent}`}>
            Experience
          </h3>

          <div className="relative border-l border-white/20 ml-4 space-y-16">

            {/* EXPERIENCE 1 */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative pl-10"
            >

              <div className="
              absolute -left-5 top-2
              w-10 h-10
              flex items-center justify-center
              rounded-full
              bg-white/10
              border border-white/20
              ">
                💻
              </div>

              <div className="
              p-7
              rounded-2xl
              bg-white/5
              border border-white/10
              hover:border-white/20
              transition
              ">

                <div className="flex items-center justify-between flex-wrap gap-3">

                  <p className="font-semibold text-lg">
                    PT Padepokan Tujuh Sembilan
                  </p>

                  <span className="
                  text-xs
                  px-3 py-1
                  rounded-full
                  bg-white/10
                  text-gray-300
                  ">
                    Sept 2025 — Present
                  </span>

                </div>

                <p className="text-sm text-gray-400 mb-4">
                  Software Developer
                </p>

                <ul className="space-y-2 text-sm text-gray-300 list-disc pl-5">

                  <li>
                    Developed scalable backend services and APIs for AI-powered systems.
                  </li>

                  <li>
                    Built an AI Interview platform integrating video recording,
                    speech-to-text processing, and automated candidate scoring.
                  </li>

                  <li>
                    Designed data pipelines and backend infrastructure to process
                    candidate interview data efficiently.
                  </li>

                </ul>

              </div>

            </motion.div>


            {/* EXPERIENCE 2 */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative pl-10"
            >

              <div className="
              absolute -left-5 top-2
              w-10 h-10
              flex items-center justify-center
              rounded-full
              bg-white/10
              border border-white/20
              ">
                🌏
              </div>

              <div className="
              p-7
              rounded-2xl
              bg-white/5
              border border-white/10
              hover:border-white/20
              transition
              ">

                <div className="flex items-center justify-between flex-wrap gap-3">

                  <p className="font-semibold text-lg">
                    Jabar Digital Service
                  </p>

                  <span className="
                  text-xs
                  px-3 py-1
                  rounded-full
                  bg-white/10
                  text-gray-300
                  ">
                    Oct 2025 — Dec 2025
                  </span>

                </div>

                <p className="text-sm text-gray-400 mb-4">
                  Software Developer
                </p>

                <ul className="space-y-2 text-sm text-gray-300 list-disc pl-5">

                  <li>
                    Built a WebGIS flood monitoring platform for government stakeholders.
                  </li>

                  <li>
                    Integrated satellite data processing and spatial analysis
                    for flood risk monitoring.
                  </li>

                  <li>
                    Developed interactive geospatial visualization tools
                    to support disaster response decision making.
                  </li>

                </ul>

              </div>

            </motion.div>


            {/* EXPERIENCE 3 */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative pl-10"
            >

              <div className="
              absolute -left-5 top-2
              w-10 h-10
              flex items-center justify-center
              rounded-full
              bg-white/10
              border border-white/20
              ">
                🏦
              </div>

              <div className="
              p-7
              rounded-2xl
              bg-white/5
              border border-white/10
              hover:border-white/20
              transition
              ">

                <div className="flex items-center justify-between flex-wrap gap-3">

                  <p className="font-semibold text-lg">
                    PT Radya Gita Bahagi
                  </p>

                  <span className="
                  text-xs
                  px-3 py-1
                  rounded-full
                  bg-white/10
                  text-gray-300
                  ">
                    Jun 2024 — Oct 2024
                  </span>

                </div>

                <p className="text-sm text-gray-400 mb-4">
                  Backend Developer
                </p>

                <ul className="space-y-2 text-sm text-gray-300 list-disc pl-5">

                  <li>
                    Developed backend services for construction financing monitoring systems.
                  </li>

                  <li>
                    Implemented verification workflows and data processing pipelines.
                  </li>

                  <li>
                    Improved transparency and efficiency in fund disbursement tracking.
                  </li>

                </ul>

              </div>

            </motion.div>

          </div>

        </div>


        {/* TECH STACK */}

        <div className="mt-28">

          <h3 className={`text-2xl font-semibold mb-10 ${current.accent}`}>
            Tech Stack
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`
                flex items-center gap-3
                p-4 rounded-xl
                bg-white/5
                border border-white/10
                hover:scale-105
                transition
                `}
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