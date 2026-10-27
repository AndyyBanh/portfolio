import type { Metadata } from "next";
import WorkPortfolio from "../components/WorkPortfolio";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Work Portfolio | Andy Banh",
};

export default function PortfolioPage() {
  return (
    <div className="font-sans">
      <section className="min-h-[60vh] flex flex-col justify-center px-4 sm:px-8 py-12">
        <Reveal>
          <WorkPortfolio />
        </Reveal>
      </section>
    </div>
  );
}
