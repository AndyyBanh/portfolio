"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackButton = () => {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <div className="px-4 sm:px-10 pt-4">
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="-ml-3 text-muted-foreground"
      >
        <Link href="/" aria-label="Back to home">
          <ArrowLeft /> Back
        </Link>
      </Button>
    </div>
  );
};

export default BackButton;
