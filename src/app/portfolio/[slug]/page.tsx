import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// This is a dummy data source. In a real application, you'd fetch this from a CMS or database.
const projects = [
    {
        slug: "xg-based-performance-analysis",
        title: "xG-Based Performance Analysis",
        description: "A deep dive into Expected Goals (xG) metrics to evaluate striker efficiency across Europe's top 5 leagues. This project involved collecting vast amounts of match data, processing it, and building a predictive model to assess player performance beyond just raw goal counts. The findings were visualized in an interactive dashboard.",
        image: "https://picsum.photos/1200/800?random=1",
        imageHint: "soccer chart",
        tags: ["Data Analysis", "Python", "Tableau", "SQL"],
        content: `
<p>The core of this project was to move beyond traditional football statistics. While goals and assists are important, they don't tell the full story of a player's contribution. Expected Goals (xG) provides a more nuanced view by assessing the quality of a shot, taking into account factors like shot angle, distance from goal, and type of assist.</p>
<p>We collected data from over 5,000 matches across Europe's top five leagues for three consecutive seasons. Using Python libraries such as Pandas and NumPy, we cleaned and structured the data. A machine learning model (Logistic Regression) was trained to calculate the xG for each shot.</p>
<h3 class="text-xl font-bold mt-8 mb-4 font-headline">Key Findings</h3>
<ul class="list-disc list-inside space-y-2">
  <li>Identified several underrated strikers who consistently outperformed their xG, suggesting superior finishing ability.</li>
  <li>Revealed that some high-scoring players were benefiting from a high volume of low-quality chances, rather than clinical finishing.</li>
  <li>The interactive Tableau dashboard allowed for filtering by league, team, and player, providing a powerful tool for scouts and analysts.</li>
</ul>
<h3 class="text-xl font-bold mt-8 mb-4 font-headline">Technologies Used</h3>
<p>Python (Pandas, Scikit-learn), SQL for data querying, and Tableau for data visualization.</p>
        `
    },
    {
        slug: "defensive-actions-mapping",
        title: "Defensive Actions Mapping",
        description: "Visualizing defensive actions (tackles, interceptions) to identify team pressing styles and defensive solidity.",
        image: "https://picsum.photos/1200/800?random=2",
        imageHint: "soccer field",
        tags: ["Data-Viz", "R", "Statistics"],
        content: "<p>This project focused on understanding a team's defensive strategy through data visualization. We mapped the locations of all defensive actions to create heatmaps and flow diagrams, revealing patterns of high-pressure zones and areas of vulnerability.</p>"
    },
    {
        slug: "passing-network-analysis",
        title: "Passing Network Analysis",
        description: "Analyzing passing networks to understand team shape, key player connections, and ball progression patterns.",
        image: "https://picsum.photos/1200/800?random=3",
        imageHint: "soccer tactics",
        tags: ["Network Analysis", "Gephi", "Tableau"],
        content: "<p>By treating players as nodes and passes as edges, we constructed network graphs for various teams. This analysis highlighted key playmakers, isolated players, and the overall structure of a team's attack, providing deep insights into their tactical philosophy.</p>"
    },
    {
        slug: "player-recruitment-model",
        title: "Player Recruitment Model",
        description: "A data-driven model to identify undervalued players based on performance metrics and market values.",
        image: "https://picsum.photos/1200/800?random=4",
        imageHint: "soccer player celebrating",
        tags: ["Machine Learning", "Python", "Scouting"],
        content: "<p>This machine learning model uses a custom algorithm to compare a player's statistical output against their market value, identifying potential recruitment targets who offer high value for money. It's a powerful tool for clubs with limited budgets.</p>"
    },
    {
        slug: "interactive-shot-map-dashboard",
        title: "Interactive Shot Map Dashboard",
        description: "A web-based dashboard allowing users to explore shot data from various competitions interactively.",
        image: "https://picsum.photos/1200/800?random=5",
        imageHint: "soccer dashboard",
        tags: ["Web Dev", "React", "D3.js"],
        content: "<p>Built with modern web technologies, this dashboard provides a user-friendly interface for exploring shot data. Users can filter by player, team, game situation, and shot outcome, with all data visualized on an interactive pitch map.</p>"
    },
    {
        slug: "tactical-formations-analysis",
        title: "Tactical Formations Analysis",
        description: "A comprehensive study of the 4-3-3 vs 4-4-2 formations, showcasing strengths and weaknesses with data visualization.",
        image: "https://picsum.photos/1200/800?random=6",
        imageHint: "soccer strategy board",
        tags: ["Tactics", "Data-Viz", "Analysis"],
        content: "<p>This was a deep dive into two of football's most iconic formations. Using event data, we analyzed how each formation fares in different phases of play—attack, defense, and transition—and visualized the key spaces they exploit or leave vulnerable.</p>"
    }
];

function getProjectData(slug: string) {
    return projects.find((p) => p.slug === slug);
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = getProjectData(params.slug);

    if (!project) {
        notFound();
    }

    return (
        <article className="relative py-24 sm:py-32 bg-transparent">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <Link href="/#portfolio" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
                        <ArrowLeft size={16} />
                        Back to Portfolio
                    </Link>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline mb-4">{project.title}</h1>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map(tag => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                    </div>

                    <Image
                        src={project.image}
                        alt={project.title}
                        width={1200}
                        height={800}
                        className="w-full rounded-lg object-cover shadow-lg mb-8"
                        data-ai-hint={project.imageHint}
                    />

                    <div
                      className="prose prose-invert prose-lg max-w-none text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: project.content }}
                    />
                </div>
            </div>
        </article>
    );
}
