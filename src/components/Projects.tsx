const projects = [
  { name: "GeoHunt", link: "https://geohunt.app", description: "Gamified geocaching experience" },
  { name: "EasyHacks", link: "https://easyhacks.dev", description: "Hackathon idea generator" }
];

export default function Projects() {
  return (
    <section id="projects" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-5">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <a key={project.name} href={project.link} target="_blank" className="p-5 border rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-700">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
