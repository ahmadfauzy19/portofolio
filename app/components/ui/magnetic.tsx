"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

export default function Magnetic({ children }: any) {

  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: any) => {

    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return

    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    ref.current!.style.transform =
      `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0px,0px)"
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}