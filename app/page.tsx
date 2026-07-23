import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Skills from "./components/Skills";
import { Reveal } from "@/components/ui/reveal";


export default function Home() {
  return (
    <div className="font-sans items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Reveal>
        <About />
      </Reveal>
      <Reveal delay={100} className="flex items-center justify-center mt-8">
        <img src="https://ghchart.rshah.org/AndyyBanh" alt="AndyyBanh's Github chart"/>
      </Reveal>

      <div className="mt-20 space-y-20">
        <Reveal delay={200}>
          <Experience />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Project />
        </Reveal>
        <Reveal>
          <Education />
        </Reveal>
      </div>
    </div>
  );
}
