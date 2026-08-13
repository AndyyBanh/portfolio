"use client"

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { ModeToggle } from "./ModeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

const socials = [
  { icon: FaGithub, href: "https://github.com/AndyyBanh", label: "Github" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/andy-banh-a643a0278/",
    label: "Linkedin",
  },
  { icon: FaInstagram, href: "https://www.instagram.com/", label: "Instagram" },
  { icon: FaEnvelope, href: "mailto:andybanhab@gmail.com", label: "Email" },
];

const Navbar = () => (
  <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur">
    <nav className="flex h-16 w-full items-center justify-between px-6 sm:px-10">
      <a
        href="#about"
        className="font-mono text-lg font-bold tracking-tight"
        aria-label="Home"
      >
        ab
      </a>

      <div className="flex items-center gap-4 sm:gap-6">
        {navLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {label}
          </a>
        ))}
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="text-muted-foreground transition hover:scale-120 hover:text-foreground"
          >
            <Icon size={18} />
          </a>
        ))}
        <ModeToggle />
      </div>
    </nav>
  </header>
);

export default Navbar;
