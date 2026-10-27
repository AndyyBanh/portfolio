import type { Metadata } from "next";
import Contact from "../components/Contact";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Contact | Andy Banh",
};

export default function ContactPage() {
  return (
    <div className="font-sans">
      <section className="min-h-[60vh] flex flex-col justify-center px-4 sm:px-8 py-12">
        <Reveal>
          <Contact />
        </Reveal>
      </section>
    </div>
  );
}
