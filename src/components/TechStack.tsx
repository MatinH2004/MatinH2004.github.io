"use client";
import { motion } from "framer-motion";

const techStack = [
  "Ruby", "JavaScript", "TypeScript", "Node.js", "PostgreSQL",
  "Express", "GitHub", "SQL", "Bash", "Asynchronous Programming",
  "Handlebars", "Sinatra", "AJAX", "OOP", "React", "NextJS", "DSA",
  "Python", "HTTP", "Tailwing", "CSS", "HTML",
];

export default function TechStack() {
  return (
    <div className="bg-black py-8 overflow-hidden relative">
    <div className="flex whitespace-nowrap">
      <motion.div
        className="flex gap-16 text-white text-2xl font-sans font-bold will-change-transform"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 15, // Adjust speed
        }}
        style={{ display: "flex", minWidth: "100%" }}
      >
        {[...techStack, ...techStack].map((tech, index) => (
          <span
            key={index}
            className={`inline-block ${
              index % 2 === 0 ? "translate-y-2" : "-translate-y-2"
            }`}
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  </div>
  );
}