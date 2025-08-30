import Link from "next/link";
import { Aperture, Footprints } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Aperture className="h-6 w-6 text-primary" style={{filter: 'drop-shadow(0 0 4px hsl(var(--primary)))'}}/>
          <span className="font-bold sm:inline-block font-headline">Patrick's Portfolio</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <Link href="/#about" className="text-foreground/60 transition-colors hover:text-foreground/80">
            About
          </Link>
          <Link href="/#portfolio" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Portfolio
          </Link>
          <Link href="/#articles" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Articles
          </Link>
        </nav>
      </div>
    </header>
  );
}
