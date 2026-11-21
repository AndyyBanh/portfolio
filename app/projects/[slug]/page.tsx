import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "../../components/ProjectDetail";
import { sortedProjects } from "../../data/projects";
import { Reveal } from "@/components/ui/reveal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return sortedProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = sortedProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Andy Banh`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = sortedProjects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  return (
    <div className="font-sans">
      <section className="px-4 sm:px-8 py-12">
        <Reveal>
          <ProjectDetail
            project={sortedProjects[index]}
            prev={sortedProjects[index - 1]}
            next={sortedProjects[index + 1]}
          />
        </Reveal>
      </section>
    </div>
  );
}
