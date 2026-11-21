"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Goals", href: "/goals" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/AndyyBanh", label: "Github" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/andy-banh-a643a0278/",
    label: "Linkedin",
  },
  { icon: Mail, href: "mailto:andybanhab@gmail.com", label: "Email" },
];

const isActive = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur">
      <nav className="flex h-16 w-full items-center justify-between px-4 sm:px-10">
        <Link
          href="/"
          className="font-mono text-lg font-bold tracking-tight text-syn-keyword"
          aria-label="Home"
        >
          ab
        </Link>

        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(pathname, href) ? "page" : undefined}
              className={cn(
                "text-sm transition-colors hover:text-foreground",
                isActive(pathname, href) ? "text-syn-keyword font-medium" : "text-muted-foreground"
              )}
            >
              {label}
            </Link>
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

        <div className="flex md:hidden items-center gap-1">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {navLinks.map(({ label, href }) => (
                <DropdownMenuItem key={href} asChild>
                  <Link
                    href={href}
                    aria-current={isActive(pathname, href) ? "page" : undefined}
                    className={cn(isActive(pathname, href) && "font-medium text-foreground")}
                  >
                    {label}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              {socials.map(({ icon: Icon, href, label }) => (
                <DropdownMenuItem key={label} asChild>
                  <a href={href}>
                    <Icon /> {label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
