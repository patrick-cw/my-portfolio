import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot, Github, LineChart, Linkedin, Twitter, User, Newspaper } from "lucide-react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      title: "Dummy1",
      description: "Dummy description",
      image: "https://picsum.photos/600/400?random=1",
      hint: "soccer field",
      link: "#",
    },
    {
      title: "Dummy2",
      description: "Dummy description",
      image: "https://picsum.photos/600/400?random=2",
      hint: "data visualization",
      link: "#",
    },
    {
      title: "Dummy3",
      description: "Dummy description",
      image: "https://picsum.photos/600/400?random=3",
      hint: "scouting report",
      link: "#",
    },
  ];

  const articles = [
    {
      title: "Dummy1",
      date: "July 15, 2024",
      excerpt: "Blablabla dummy",
      link: "/articles",
    },
    {
      title: "Dummy2",
      date: "June 28, 2024",
      excerpt: "Blablabla dummy",
      link: "/articles",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="container flex min-h-screen flex-col items-center justify-center text-center">
        <div className="flex-grow flex flex-col items-center justify-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Patrick's Portfolio
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Welcome to the portfolio of Patrick Cipta Winata. Exploring the World Through Data, Machine Learning, and Analytics.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-y-6">
          <div className="flex items-center justify-center gap-x-4 flex-wrap gap-y-4">
              <Button asChild>
                <Link href="/portfolio">
                  View Projects <LineChart className="ml-2 h-4 w-4" />
                </Link>
              </Button>
               <Button variant="outline" asChild>
                <Link href="/about">
                  About Me <User className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/articles">
                  Read Articles <Newspaper className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <Link href="https://x.com/patrickcw_" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <XIcon  className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
              <Link href="https://www.linkedin.com/in/patrick-cw/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon  className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
              <Link href="https://github.com/patrick-cw" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GitHubIcon className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="relative py-24 sm:py-32 bg-transparent">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">About Me</h2>
              <div className="mt-8 flex justify-center">
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary">
                  <Image src="/images/face.JPG" alt="Patrick Cipta Winata" layout="fill" objectFit="cover" data-ai-hint="portrait person" />
                </div>
              </div>
              <p style={{color: "hsl(215deg 26.4% 84.39%)"}} className="mt-6 text-lg leading-8 text-muted-foreground">
              I am Patrick Cipta Winata, a Data Engineer and Analyst with experience in building scalable data pipelines, developing Python solutions, and creating interactive data visualizations. I have worked on projects ranging from football analytics to cloud-based data engineering, with professional experience at Samsung Research Indonesia and freelance collaborations in data-driven problem solving.
              </p>
              <p style={{color: "hsl(215deg 26.4% 84.39%)"}} className="mt-6 text-lg leading-8 text-muted-foreground">
              Beyond my professional and academic work, I am also passionate about crypto trading and machine learning, continuously exploring how data and AI can drive insights in both financial markets and sports analytics.
              </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative py-24 sm:py-32 bg-transparent">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
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

      {/* Articles Section */}
      <section id="articles" className="relative py-24 sm:py-32 bg-transparent">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Latest Articles</h2>
            <p className="mt-2 text-lg leading-8 text-muted-foreground">
              My thoughts and findings on the world of football analytics.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {articles.map((article) => (
              <article key={article.title} className="flex max-w-xl flex-col items-start justify-between rounded-lg bg-card/50 p-6 transition-all duration-300 hover:bg-card/80">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={article.date} className="text-muted-foreground">
                    {article.date}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-foreground group-hover:text-primary transition-colors font-headline">
                    <Link href={article.link}>
                      <span className="absolute inset-0" />
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}