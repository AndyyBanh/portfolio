import { Github, Linkedin, Mail } from "lucide-react";
import { CodeComment } from "./SectionParts";

const Footer = () => (
  <footer className="mt-12 py-8 flex flex-col items-center gap-3">
    <div className="flex items-center gap-6">
      <a
        href="https://github.com/AndyyBanh"
        aria-label="Github"
        className="text-muted-foreground transition hover:scale-120 hover:text-syn-function"
      >
        <Github size={22} />
      </a>
      <a
        href="https://www.linkedin.com/in/andy-banh-a643a0278/"
        aria-label="Linkedin"
        className="text-muted-foreground transition hover:scale-120 hover:text-syn-function"
      >
        <Linkedin size={22} />
      </a>
      <a
        href="mailto:andybanhab@gmail.com"
        aria-label="Email"
        className="text-muted-foreground transition hover:scale-120 hover:text-syn-function"
      >
        <Mail size={22} />
      </a>
    </div>
    <CodeComment className="text-sm">© 2026 Andy Banh. All rights reserved.</CodeComment>
  </footer>
);

export default Footer;
