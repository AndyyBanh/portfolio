import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Skills from "./components/Skills";
import { Reveal } from "@/components/ui/reveal";


export default function Home() {
  return (
    <div className="font-sans">
      <section
        id="about"
        className="scroll-mt-16 min-h-[60vh] flex flex-col items-center justify-center px-8 py-12"
      >
        <Reveal className="w-full max-w-4xl">
          <About />
        </Reveal>
      </section>

      <section
        id="experience"
        className="scroll-mt-16 min-h-[60vh] flex flex-col justify-center px-8 py-12"
      >
        <Reveal delay={200}>
          <Experience />
        </Reveal>
      </section>

      <section className="scroll-mt-16 flex flex-col justify-center px-8 py-6">
        <Reveal>
          <Skills />
        </Reveal>
      </section>

      <section
        id="projects"
        className="scroll-mt-16 min-h-[60vh] flex flex-col justify-center px-8 py-12"
      >
        <Reveal>
          <Project />
        </Reveal>
      </section>

      <section className="scroll-mt-16 flex flex-col justify-center px-8 py-6">
        <Reveal>
          <Education />
        </Reveal>
      </section>
    </div>
  );
}
