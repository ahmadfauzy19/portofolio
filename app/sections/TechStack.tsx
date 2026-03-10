export default function TechStack() {
  const tech = [
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Next.js",
    "Tailwind",
    "Docker"
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-bold">
          Tech Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {tech.map((item) => (
            <span
              key={item}
              className="px-4 py-2 bg-dark text-white rounded-lg"
            >
              {item}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}