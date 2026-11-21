"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackButton = () => {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const isProjectPage = pathname.startsWith("/projects/");
  const href = isProjectPage ? "/projects" : "/";
  const label = isProjectPage ? "All projects" : "Back";

  return (
    <div className="px-4 sm:px-10 pt-4">
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="-ml-3 text-muted-foreground"
      >
        <Link href={href} aria-label={isProjectPage ? "Back to all projects" : "Back to home"}>
          <ArrowLeft /> {label}
        </Link>
      </Button>
    </div>
  );
};

export default BackButton;
