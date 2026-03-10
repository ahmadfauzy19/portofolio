"use client"

import { motion } from "framer-motion"
import { useTheme } from "../context/themeContext"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

export default function Projects() {

  const { theme, themes } = useTheme()
  const current = themes[theme]

  const projects = [
    {
      title: "AI Interview Platform",
      description:
        "AI-powered recruitment system that evaluates candidates using video interviews, speech-to-text processing, and automated scoring.",
      tech: ["Spring Boot", "React", "PostgreSQL", "Minio"],
      image: "/projects/ai-interview.png",
      github: "https://github.com/ahmadfauzy19/backend-ai-interview-v2",
      demo: "https://ai-interview.jiwamu.de/"
    },
    {
      title: "Flood Monitoring WebGIS",
      description:
        "Geospatial monitoring platform integrating satellite data and spatial analysis for flood risk assessment.",
      tech: ["React", "GeoServer", "PostGIS", "Python"],
      image: "/projects/flood-webgis.png",
      github: "https://github.com/ahmadfauzy19/Frontend-Dashboard-Resiko-Banjir",
      demo: "https://sim-banjir.ekosistemdata.dev/"
    },
    // {
    //   title: "Protrack",
    //   description:
    //     "Backend system for monitoring construction financing workflows and fund disbursement processes.",
    //   tech: ["Spring Boot", "ReactJs", "Docker"],
    //   image: "/projects/construction.png",
    //   github: "#",
    //   demo: "#"
    // },
    {
      title: "Prototype Geodata KBB",
      description:
        "Backend system for monitoring construction financing workflows and fund disbursement processes.",
      tech: ["Spring Boot", "ReactJs", "Docker"],
      image: "/projects/geodata-kbb.png",
      demo: "https://geokbb.vercel.app/",
      github: "https://github.com/ahmadfauzy19/frontend-geokbb"
    }
  ]

  return (
    <section
      className={`
      relative py-32
      bg-gradient-to-br
      ${current.bg}
      `}
    >

      <div className="max-w-7xl mx-auto px-6 text-white">

        {/* Title */}

        <h2
          className={`
          text-4xl md:text-5xl font-bold mb-16
          bg-gradient-to-r
          ${current.gradientText}
          bg-clip-text
          text-transparent
          `}
        >
          Featured Projects
        </h2>

        {/* Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              className="h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >

              <Card
                className="
                flex flex-col
                h-full
                overflow-hidden
                bg-white/5
                border-white/10
                hover:border-white/20
                backdrop-blur-lg
                transition
                hover:scale-[1.02]
                "
              >

                {/* Image */}

                <div className="aspect-video overflow-hidden border-b border-white/10">
                  <img
                    src={project.image}
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-lg">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col flex-grow">

                  {/* Description */}

                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}

                  <div className="flex flex-wrap gap-2 mt-4">

                    {project.tech.map((tech) => (

                      <span
                        key={tech}
                        className="
                        text-xs
                        px-3 py-1
                        rounded-full
                        bg-white/10
                        text-gray-300
                        "
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* Buttons */}

                  <div className="flex gap-3 mt-auto pt-6">

                    <a
                      href={project.demo}
                      className="
                      text-sm
                      px-4 py-2
                      rounded-lg
                      bg-white
                      text-black
                      hover:opacity-90
                      transition
                      "
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      className="
                      text-sm
                      px-4 py-2
                      rounded-lg
                      bg-white/10
                      border border-white/20
                      hover:bg-white/20
                      transition
                      "
                    >
                      GitHub
                    </a>

                  </div>

                </CardContent>

              </Card>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}