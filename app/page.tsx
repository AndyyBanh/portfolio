import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Goals from "./components/Goals";
import Project from "./components/Project";
import Skills from "./components/Skills";
import WorkPortfolio from "./components/WorkPortfolio";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

function HomeSection({
  id,
  className,
  revealProps,
  children,
}: {
  id?: string;
  className?: string;
  revealProps?: React.ComponentProps<typeof Reveal>;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-16 px-4 sm:px-8 py-8 sm:py-12", className)}
    >
      <Reveal {...revealProps}>{children}</Reveal>
    </section>
  );
}

export default function Home() {
  return (
    <div className="font-sans">
      <HomeSection
        id="about"
        className="min-h-[50vh] flex flex-col items-center justify-center"
        revealProps={{ className: "w-full max-w-4xl" }}
      >
        <About pageHref="/about" />
      </HomeSection>

      <HomeSection id="experience" revealProps={{ delay: 200 }}>
        <Experience pageHref="/experience" />
      </HomeSection>

      <HomeSection>
        <Skills />
      </HomeSection>

      <HomeSection id="portfolio">
        <WorkPortfolio pageHref="/portfolio" />
      </HomeSection>

      <HomeSection id="projects">
        <Project pageHref="/projects" />
      </HomeSection>

      <HomeSection id="goals">
        <Goals pageHref="/goals" />
      </HomeSection>

      <HomeSection>
        <Education />
      </HomeSection>
    </div>
  );
}
