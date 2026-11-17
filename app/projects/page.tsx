import type { Metadata } from "next";
import ProjectSections from "../components/ProjectSections";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Projects | Andy Banh",
};

export default function ProjectsPage() {
  return (
    <div className="font-sans">
      <section className="min-h-[60vh] px-4 sm:px-8 py-12">
        <Reveal>
          <ProjectSections />
        </Reveal>
      </section>
    </div>
  );
}
