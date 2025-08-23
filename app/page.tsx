import About from "./components/About";
import Education from "./components/Education";
import Project from "./components/Project";
import Skills from "./components/Skills";


export default function Home() {
  return (
    <div className="font-sans items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <About />
      {/* <img src="https://ghchart.rshah.org/AndyyBanh" alt="AndyyBanh's Github chart" /> */}

      <div className="mt-20 space-y-20">
        <Skills />
        <Project />
        <Education />
      </div>
    </div>
  );
}
