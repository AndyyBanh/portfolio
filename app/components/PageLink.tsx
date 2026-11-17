import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PageLink = ({ href }: { href: string }) => (
  <Button variant="ghost" size="sm" asChild className="text-muted-foreground">
    <Link href={href}>
      View page <ArrowUpRight />
    </Link>
  </Button>
);

export default PageLink;
