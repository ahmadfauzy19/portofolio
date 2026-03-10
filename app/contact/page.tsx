"use client"

import { motion } from "framer-motion"
import { useTheme } from "../context/themeContext"

import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"

export default function Contact() {

  const { theme, themes } = useTheme()
  const current = themes[theme]

  return (
    <section
      className={`
      relative py-32 overflow-hidden
      bg-gradient-to-br
      ${current.bg}
      `}
    >

      {/* Glow Background */}

      <div className={`absolute w-[400px] h-[400px] ${current.glow} blur-[150px] rounded-full top-20 left-20`} />
      <div className={`absolute w-[400px] h-[400px] ${current.glow} blur-[150px] rounded-full bottom-10 right-20`} />

      <div className="relative max-w-4xl mx-auto px-6 text-center text-white">

        {/* Title */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`
          text-4xl md:text-5xl font-bold mb-6
          bg-gradient-to-r
          ${current.gradientText}
          bg-clip-text
          text-transparent
          `}
        >
          Let's Work Together
        </motion.h2>


        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 max-w-xl mx-auto"
        >
          I'm always interested in discussing new opportunities,
          collaborations, or innovative projects.  
          Feel free to reach out.
        </motion.p>


        {/* CONTACT CARD */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="
          mt-12
          p-10
          rounded-2xl
          bg-white/5
          border border-white/10
          backdrop-blur-lg
          "
        >

          {/* Buttons */}

          <div className="flex flex-wrap justify-center gap-6">

            {/* WhatsApp */}

            <a
              href="https://wa.me/6281312396135"
              target="_blank"
              className="
              flex items-center gap-3
              px-6 py-3
              rounded-xl
              bg-green-500
              hover:bg-green-600
              transition
              "
            >
              <FaWhatsapp />
              WhatsApp
            </a>


            {/* Email */}

            <a
              href="mailto:fauzy15546@email.com"
              className="
              flex items-center gap-3
              px-6 py-3
              rounded-xl
              bg-white
              text-black
              hover:opacity-90
              transition
              "
            >
              <FaEnvelope />
              Email
            </a>

          </div>


          {/* Social Links */}

          <div className="flex justify-center gap-6 mt-8 text-2xl text-gray-300">

            <a
              href="https://github.com/ahmadfauzy19"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ahmad-fauzy-47283527a/"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/hmdfzyy"
              target="_blank"
              className="hover:text-pink-400 transition hover:scale-110"
            >
              <FaInstagram />
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  )
}