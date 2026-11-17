import type { Metadata } from "next";
import GoalsRoadmap from "../components/GoalsRoadmap";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Goals | Andy Banh",
};

export default function GoalsPage() {
  return (
    <div className="font-sans">
      <section className="flex flex-col items-center px-4 sm:px-8 pt-16 pb-16">
        <Reveal className="w-full">
          <GoalsRoadmap />
        </Reveal>
      </section>
    </div>
  );
}
