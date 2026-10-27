import type { Metadata } from "next";
import Goals from "../components/Goals";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Goals | Andy Banh",
};

export default function GoalsPage() {
  return (
    <div className="font-sans">
      <section className="min-h-[60vh] flex flex-col justify-center px-4 sm:px-8 py-12">
        <Reveal>
          <Goals />
        </Reveal>
      </section>
    </div>
  );
}
