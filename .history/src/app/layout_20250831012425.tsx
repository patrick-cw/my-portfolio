import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import Particles from '@/components/particles';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ThemeRegistry from '@/components/ThemeRegistry';

export const metadata: Metadata = {
  title: "Patrick's Portfolio",
  description: 'A portfolio showcasing football analytics projects, articles, and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{scrollBehavior: 'smooth'}}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("min-h-screen font-body antialiased bg-background")}>
        <ThemeRegistry>
          <div className="relative z-0 flex min-h-screen flex-col bg-gradient-to-br from-black via-blue-900/20 to-black">
            <Particles />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeRegistry>
      </body>
    </html>
  );
}
