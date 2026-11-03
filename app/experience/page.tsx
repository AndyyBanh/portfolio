import type { Metadata } from "next";
import ExperienceSections from "../components/ExperienceSections";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Experience | Andy Banh",
};

export default function ExperiencePage() {
  return (
    <div className="font-sans">
      <section className="min-h-[60vh] px-4 sm:px-8 py-12">
        <Reveal>
          <ExperienceSections />
        </Reveal>
      </section>
    </div>
  );
}
