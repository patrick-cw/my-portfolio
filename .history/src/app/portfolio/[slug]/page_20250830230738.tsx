import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
    const projects = [
        {
          title: "xG Model Analysis",
          description: "Deep dive into Expected Goals (xG) models and their predictive power in Premier League matches.",
          image: "https://picsum.photos/600/400?random=1",
          hint: "soccer field",
          link: "/portfolio",
        },
        {
          title: "Player Passing Networks",
          description: "Visualizing team dynamics and key players through passing network analysis.",
          image: "https://picsum.photos/600/400?random=2",
          hint: "data visualization",
          link: "/portfolio",
        },
        {
          title: "Scouting with Data",
          description: "A data-driven approach to identifying undervalued talent across European leagues.",
          image: "https://picsum.photos/600/400?random=3",
          hint: "scouting report",
          link: "/portfolio",
        },
      ];

  return (
    <section className="relative py-24 sm:py-32 bg-transparent">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">My Portfolio</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            A selection of my football analytics projects.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col bg-card/50 hover:bg-card/80 transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="relative h-40 w-full overflow-hidden rounded-md">
                  <Image src={project.image} alt={project.title} width={600} height={400} className="object-cover" data-ai-hint={project.hint}/>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="font-headline">{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0 text-primary/80 hover:text-primary" asChild>
                  <Link href={project.link}>
                    View Analysis <LineChart className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
