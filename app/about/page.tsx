import type { Metadata } from "next";
import About from "../components/About";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "About | Andy Banh",
};

export default function AboutPage() {
  return (
    <div className="font-sans">
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-4 sm:px-8 py-12">
        <Reveal className="w-full max-w-4xl">
          <About />
        </Reveal>
      </section>
    </div>
  );
}
