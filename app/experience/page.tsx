import type { Metadata } from "next";
import Experience from "../components/Experience";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Experience | Andy Banh",
};

export default function ExperiencePage() {
  return (
    <div className="font-sans">
      <section className="min-h-[60vh] flex flex-col justify-center px-4 sm:px-8 py-12">
        <Reveal>
          <Experience />
        </Reveal>
      </section>
    </div>
  );
}
