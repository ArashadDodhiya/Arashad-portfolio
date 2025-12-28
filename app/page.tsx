import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import Values from "@/components/home/Values";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Values />
      <Contact />
    </main>
  );
}
