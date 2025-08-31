'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Aperture } from "lucide-react";

type HeaderProps = {
  handleScroll?: (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => void;
};

export default function Header({ handleScroll }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();

    if (pathname === '/') {
      // If already on homepage → just smooth scroll
      if (handleScroll) {
        handleScroll(e, targetId);
      }
    } else {
      // If NOT on homepage → set scroll flag & go home
      if (targetId === 'articles') {
        sessionStorage.setItem("scrollToArticles", "true");
      } else if (targetId === 'portfolio') {
        sessionStorage.setItem("scrollToPortfolio", "true");
      } else if (targetId === 'about') {
        sessionStorage.setItem("scrollToAbout", "true");
      } else if (targetId === 'home') {
        sessionStorage.setItem("scrollToTop", "true");
      }

      router.push('/');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <button
          onClick={(e) => handleNavClick(e, 'home')}
          className="mr-6 flex items-center space-x-2"
        >
          <Aperture
            className="h-6 w-6 text-primary"
            style={{ filter: 'drop-shadow(0 0 4px hsl(var(--primary)))' }}
          />
          <span className="font-bold sm:inline-block font-headline">
            Patrick&apos;s Portfolio
          </span>
        </button>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <button
            onClick={(e) => handleNavClick(e, 'about')}
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            About
          </button>
          <button
            onClick={(e) => handleNavClick(e, 'portfolio')}
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Portfolio
          </button>
          <button
            onClick={(e) => handleNavClick(e, 'articles')}
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Articles
          </button>
        </nav>
      </div>
    </header>
  );
}
