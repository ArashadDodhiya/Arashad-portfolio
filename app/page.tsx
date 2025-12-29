import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import Values from "@/components/home/Values";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    /* 1. overflow-x-hidden: Prevents "slash" animations from creating side-scrolling.
       2. selection:bg-anime-orange: Matches your manga theme when users highlight text.
       3. bg-[#08080A]: Ensures the gap between sections doesn't show a white background.
    */
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-x-hidden bg-[#08080A] selection:bg-anime-orange selection:text-black">

      {/* Optional: You could add a global "Grain" overlay here 
          to give the whole site a vintage manga paper feel 
      */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.02] bg-[url('/noise.png')] mix-blend-overlay" />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Values />
      <Contact />

      {/* FOOTER TAG: Simple tactical footer 
      */}
      <footer className="w-full py-8 border-t border-white/5 bg-[#08080A] flex flex-col items-center justify-center gap-2">
        <p className="font-mono text-[10px] text-zinc-600 tracking-[0.2em]">
          SYSTEM_STATUS: ONLINE // ENCRYPTION: ACTIVE
        </p>
        <p className="font-bebas text-zinc-400 tracking-widest">
          © 2025 ARASHAD DODHIYA
        </p>
      </footer>
    </main>
  );
}