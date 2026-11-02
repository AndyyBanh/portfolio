import type { Metadata } from "next";
import About from "../components/About";
import AboutEssay from "../components/AboutEssay";
import WhyMeVideo from "../components/WhyMeVideo";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "About | Andy Banh",
};

export default function AboutPage() {
  return (
    <div className="font-sans">
      <section className="flex flex-col items-center px-4 sm:px-8 pt-16 pb-10">
        <Reveal className="w-full max-w-4xl">
          <About />
        </Reveal>
      </section>

      <section className="flex flex-col px-4 sm:px-8 py-10">
        <Reveal>
          <WhyMeVideo />
        </Reveal>
      </section>

      <section className="flex flex-col px-4 sm:px-8 py-10">
        <Reveal>
          <AboutEssay />
        </Reveal>
      </section>
    </div>
  );
}
