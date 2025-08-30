'use client';

import { Aperture } from "lucide-react";

type HeaderProps = {
  handleScroll: (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => void;
};

export default function Header({ handleScroll }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <button onClick={(e) => handleScroll(e, 'home')} className="mr-6 flex items-center space-x-2">
          <Aperture className="h-6 w-6 text-primary" style={{filter: 'drop-shadow(0 0 4px hsl(var(--primary)))'}}/>
          <span className="font-bold sm:inline-block font-headline">Patrick's Portfolio</span>
        </button>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <button onClick={(e) => handleScroll(e, 'about')} className="text-foreground/60 transition-colors hover:text-foreground/80">
            About
          </button>
          <button onClick={(e) => handleScroll(e, 'portfolio')} className="text-foreground/60 transition-colors hover:text-foreground/80">
            Portfolio
          </button>
          <button onClick={(e) => handleScroll(e, 'articles')} className="text-foreground/60 transition-colors hover:text-foreground/80">
            Articles
          </button>
        </nav>
      </div>
    </header>
  );
}
