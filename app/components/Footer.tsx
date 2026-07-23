import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="mt-20 py-8 flex flex-col items-center gap-3">
    <div className="flex items-center gap-6">
      <a
        href="https://github.com/AndyyBanh"
        aria-label="Github"
        className="transition hover:scale-120"
      >
        <FaGithub size={22} />
      </a>
      <a
        href="https://www.linkedin.com/in/andy-banh-a643a0278/"
        aria-label="Linkedin"
        className="transition hover:scale-120"
      >
        <FaLinkedin size={22} />
      </a>
      <a
        href="https://www.instagram.com/"
        aria-label="Instagram"
        className="transition hover:scale-120"
      >
        <FaInstagram size={22} />
      </a>
      <a
        href="mailto:andybanhab@gmail.com"
        aria-label="Email"
        className="transition hover:scale-120"
      >
        <FaEnvelope size={22} />
      </a>
    </div>
    <p className="text-sm text-muted-foreground">
      © 2026 Andy Banh. All rights reserved.
    </p>
  </footer>
);

export default Footer;
