import type { Metadata } from "next";
import Project from "../components/Project";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Projects | Andy Banh",
};

export default function ProjectsPage() {
  return (
    <div className="font-sans">
      <section className="min-h-[60vh] flex flex-col justify-center px-4 sm:px-8 py-12">
        <Reveal>
          <Project />
        </Reveal>
      </section>
    </div>
  );
}
