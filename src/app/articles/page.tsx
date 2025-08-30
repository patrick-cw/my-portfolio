import { Newspaper } from "lucide-react";

export default function ArticlesPage() {
    return (
        <div className="relative isolate">
            <div className="container py-16 sm:py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <Newspaper className="mx-auto h-12 w-12 text-primary" style={{filter: 'drop-shadow(0 0 8px hsl(var(--primary)))'}} />
                    <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">Articles</h1>
                    <p className="mt-4 text-lg leading-8 text-muted-foreground">
                        This section is under construction. Check back soon for in-depth articles and analysis on the world of football.
                    </p>
                </div>
            </div>
        </div>
    );
}
