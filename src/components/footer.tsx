export default function Footer() {
    return (
      <footer className="border-t border-border/40 py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Patrick Cipta Winata. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }