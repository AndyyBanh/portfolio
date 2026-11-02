import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Goals from "./components/Goals";
import Project from "./components/Project";
import Skills from "./components/Skills";
import WorkPortfolio from "./components/WorkPortfolio";
import { Reveal } from "@/components/ui/reveal";


export default function Home() {
  return (
    <div className="font-sans">
      <section
        id="about"
        className="scroll-mt-16 min-h-[50vh] flex flex-col items-center justify-center px-4 sm:px-8 py-10"
      >
        <Reveal className="w-full max-w-4xl">
          <About pageHref="/about" />
        </Reveal>
      </section>

      <section
        id="goals"
        className="scroll-mt-16 flex flex-col justify-center px-4 sm:px-8 py-10"
      >
        <Reveal>
          <Goals pageHref="/goals" />
        </Reveal>
      </section>

      <section
        id="experience"
        className="scroll-mt-16 flex flex-col justify-center px-4 sm:px-8 py-10"
      >
        <Reveal delay={200}>
          <Experience pageHref="/experience" />
        </Reveal>
      </section>

      <section className="scroll-mt-16 flex flex-col justify-center px-4 sm:px-8 py-6">
        <Reveal>
          <Skills />
        </Reveal>
      </section>

      <section
        id="projects"
        className="scroll-mt-16 flex flex-col justify-center px-4 sm:px-8 py-10"
      >
        <Reveal>
          <Project pageHref="/projects" />
        </Reveal>
      </section>

      <section
        id="portfolio"
        className="scroll-mt-16 flex flex-col justify-center px-4 sm:px-8 py-10"
      >
        <Reveal>
          <WorkPortfolio pageHref="/portfolio" />
        </Reveal>
      </section>

      <section className="scroll-mt-16 flex flex-col justify-center px-4 sm:px-8 py-6">
        <Reveal>
          <Education />
        </Reveal>
      </section>

      <section
        id="contact"
        className="scroll-mt-16 flex flex-col justify-center px-4 sm:px-8 py-10"
      >
        <Reveal>
          <Contact pageHref="/contact" />
        </Reveal>
      </section>
    </div>
  );
}
