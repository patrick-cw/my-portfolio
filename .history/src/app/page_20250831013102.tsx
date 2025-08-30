import { Button } from "@/components/ui/button";
import { User, LineChart, Newspaper, ArrowDown } from "lucide-react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

function FadingSeparator() {
  return (
    <div className="relative my-24 h-px w-full bg-transparent">
      <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-white opacity-25 to-transparent" />
    </div>
  )
}

// About Section Component
function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center">
      <div className="container">
      <div className="grid grid-cols-1 items-center gap-y-16 lg:grid-cols-2 lg:gap-x-8">
          <div>
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">About Me</h2>
              <p style={{color: "hsl(215deg 26.4% 84.39%)"}} className="mt-4 text-lg text-muted-foreground text-justify">
                I am Patrick Cipta Winata, a Data Engineer and Analyst with experience in building scalable data pipelines, developing Python solutions, and creating interactive data visualizations. I have worked on projects ranging from football analytics to cloud-based data engineering, with professional experience at Samsung Research Indonesia and freelance collaborations in data-driven problem solving.
              </p>
              <p style={{color: "hsl(215deg 26.4% 84.39%)"}} className="mt-4 text-lg text-muted-foreground text-justify">
                Beyond my professional and academic work, I am also passionate about crypto trading and machine learning, continuously exploring how data and AI can drive insights in both financial markets and sports analytics.
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/face.JPG"
              alt="Patrick Cipta Winata"
              width={400}
              height={400}
              className="rounded-full object-cover shadow-lg"
              data-ai-hint="portrait man"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Portfolio Section Component
function PortfolioSection() {
  const projects = [
    {
      title: "xG-Based Performance Analysis",
      description: "A deep dive into Expected Goals (xG) metrics to evaluate striker efficiency across Europe's top 5 leagues.",
      image: "https://picsum.photos/600/400?random=1",
      tags: ["Data Analysis", "Python", "Tableau"],
      link: "/portfolio/xg-based-performance-analysis",
      imageHint: "soccer chart"
    },
    {
      title: "Defensive Actions Mapping",
      description: "Visualizing defensive actions (tackles, interceptions) to identify team pressing styles and defensive solidity.",
      image: "https://picsum.photos/600/400?random=2",
      tags: ["Data-Viz", "R", "Statistics"],
      link: "/portfolio/defensive-actions-mapping",
      imageHint: "soccer field"
    },
    {
      title: "Passing Network Analysis",
      description: "Analyzing passing networks to understand team shape, key player connections, and ball progression patterns.",
      image: "https://picsum.photos/600/400?random=3",
      tags: ["Network Analysis", "Gephi", "Tableau"],
      link: "/portfolio/passing-network-analysis",
      imageHint: "soccer tactics"
    },
    {
      title: "Player Recruitment Model",
      description: "A data-driven model to identify undervalued players based on performance metrics and market values.",
      image: "https://picsum.photos/600/400?random=4",
      tags: ["Machine Learning", "Python", "Scouting"],
      link: "/portfolio/player-recruitment-model",
      imageHint: "soccer player celebrating"
    },
    {
      title: "Interactive Shot Map Dashboard",
      description: "A web-based dashboard allowing users to explore shot data from various competitions interactively.",
      image: "https://picsum.photos/600/400?random=5",
      tags: ["Web Dev", "React", "D3.js"],
      link: "/portfolio/interactive-shot-map-dashboard",
      imageHint: "soccer dashboard"
    },
    {
      title: "Tactical Formations Analysis",
      description: "A comprehensive study of the 4-3-3 vs 4-4-2 formations, showcasing strengths and weaknesses with data visualization.",
      image: "https://picsum.photos/600/400?random=6",
      tags: ["Tactics", "Data-Viz", "Analysis"],
      link: "/portfolio/tactical-formations-analysis",
      imageHint: "soccer strategy board"
    }
  ];

  return (
    <section id="portfolio" className="relative min-h-screen flex flex-col justify-center">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">My Portfolio</h2>
            <p className="mt-2 text-lg leading-8 text-muted-foreground">
              A selection of projects that showcase my skills in football analytics.
            </p>
          </div>
          <div className="mt-16">
            <Carousel
              opts={{
                align: "start",
                loop: false,
              }}
              className="w-full"
            >
              <CarouselContent>
                {projects.map((project) => (
                  <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                       <div className="group flex flex-col h-full overflow-hidden rounded-lg bg-card-highlight shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2">
                          <Link href={project.link} className="block shrink-0">
                            <Image
                              className="h-48 w-full object-cover"
                              src={project.image}
                              alt={project.title}
                              width={600}
                              height={400}
                              data-ai-hint={project.imageHint}
                            />
                          </Link>
                          <div className="flex flex-1 flex-col justify-between p-6">
                            <div className="flex-1">
                              <Link href={project.link} className="mt-2 block">
                                <p className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors font-headline">{project.title}</p>
                                <p className="mt-3 text-base text-muted-foreground">{project.description}</p>
                              </Link>
                            </div>
                            <div className="mt-6 flex items-center">
                              <div className="flex space-x-1 text-sm text-muted-foreground">
                                {project.tags.map((tag) => (
                                  <span key={tag} className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-12 h-10 w-10" />
              <CarouselNext className="mr-12 h-10 w-10"/>
            </Carousel>
          </div>
        </div>
    </section>
  );
}
// Articles Section Component
function ArticlesSection() {
  const articles = [
      {
        title: "The Evolution of the Modern Full-back",
        date: "July 15, 2024",
        excerpt: "From defensive stalwarts to attacking linchpins, we trace the tactical evolution of the full-back role in the modern game.",
        link: "/articles/evolution-of-the-modern-full-back",
      },
      {
        title: "Set-Piece Analytics: The Hidden Goldmine",
        date: "June 28, 2024",
        excerpt: "An in-depth look at how top-tier teams are using data analytics to gain a significant edge from corners and free-kicks.",
        link: "/articles/set-piece-analytics",
      },
      {
        title: "The Rise of Positional Play",
        date: "May 12, 2024",
        excerpt: "How philosophies popularised by Guardiola and Cruyff have come to dominate European football tactics.",
        link: "/articles/rise-of-positional-play",
      },
      {
        title: "Valuing Defensive Actions",
        date: "April 22, 2024",
        excerpt: "A new model for quantifying the impact of tackles, interceptions, and pressures beyond simple event counting.",
        link: "/articles/valuing-defensive-actions",
      },
      {
        title: "The Impact of High Pressing",
        date: "August 05, 2024",
        excerpt: "Exploring the data behind high-pressing strategies and their correlation with winning major trophies in modern football.",
        link: "/articles/impact-of-high-pressing",
      },
    ];

  return (
      <section id="articles" className="relative min-h-screen flex flex-col justify-center">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Latest Articles</h2>
              <p className="mt-2 text-lg leading-8 text-muted-foreground">
                My thoughts and findings on the world of football analytics.
              </p>
            </div>
            <div className="mt-16">
               <Carousel
                  opts={{
                    align: "start",
                    loop: false,
                  }}
                  className="w-full max-w-4xl mx-auto"
                >
                <CarouselContent>
                  {articles.map((article) => (
                    <CarouselItem key={article.title} className="md:basis-1/2">
                      <div className="p-1 h-full">
                        <article className="group flex h-full max-w-xl flex-col items-start justify-between rounded-lg bg-card-highlight p-6 transition-all duration-300 hover:bg-card/90 hover:-translate-y-2">
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
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                 <CarouselPrevious className="-left-12 h-10 w-10" />
                 <CarouselNext className="-right-12 h-10 w-10" />
              </Carousel>
            </div>
          </div>
      </section>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center text-center">
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
                <Link href="/#portfolio">
                  View Projects <LineChart className="ml-2 h-4 w-4" />
                </Link>
              </Button>
               <Button variant="outline" asChild>
                <Link href="/#about">
                  About Me <User className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/#articles">
                  Read Articles <Newspaper className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <XIcon className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GitHubIcon className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </a>
        </div>
      </section>
      <FadingSeparator />
      <AboutSection />
      <FadingSeparator />
      <PortfolioSection />
      <FadingSeparator />
      <ArticlesSection />
    </>
  );
}