import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
    </>
  );
}
