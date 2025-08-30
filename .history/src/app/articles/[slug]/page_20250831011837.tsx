import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// This is a dummy data source. In a real application, you'd fetch this from a CMS or database.
const articles = [
    {
        slug: 'evolution-of-the-modern-full-back',
        title: "The Evolution of the Modern Full-back",
        date: "July 15, 2024",
        image: "https://picsum.photos/1200/800?random=7",
        imageHint: "soccer players action",
        content: `
<p>The role of the full-back is one of the most dramatically transformed positions in modern football. Once considered purely defensive players, tasked with nullifying opposition wingers, they are now often a team's primary creative outlet and a key component of the attacking phase. This article traces that evolution, from the stoic defenders of the past to the flying wing-backs of today.</p>
<p>We'll analyze key tactical shifts, such as the introduction of inverted full-backs by Pep Guardiola, and look at the statistical profiles of players who exemplify this change, like Trent Alexander-Arnold and João Cancelo. Their heatmaps, passing networks, and chance creation numbers tell a story of a position redefined.</p>
<h3 class="text-xl font-bold mt-8 mb-4 font-headline">Key Points of Evolution</h3>
<ul class="list-disc list-inside space-y-2">
  <li>From sideline patrollers to central playmakers.</li>
  <li>The statistical increase in touches, progressive passes, and key passes from full-backs.</li>
  <li>How changes in formation (e.g., the prevalence of the 4-3-3) have necessitated more attacking contributions from wide defenders.</li>
</ul>
        `
    },
    {
        slug: 'set-piece-analytics',
        title: "Set-Piece Analytics: The Hidden Goldmine",
        date: "June 28, 2024",
        image: "https://picsum.photos/1200/800?random=8",
        imageHint: "corner kick soccer",
        content: "<p>With approximately 30% of goals coming from set-piece situations, teams are increasingly hiring specialist coaches and analysts to gain an edge. This article delves into the data behind successful set-pieces, from out-swinging corners to cleverly designed free-kick routines. We explore how data analytics is turning these dead-ball situations into a reliable source of goals.</p>"
    },
    {
        slug: 'rise-of-positional-play',
        title: "The Rise of Positional Play",
        date: "May 12, 2024",
        image: "https://picsum.photos/1200/800?random=9",
        imageHint: "tactical soccer board",
        content: "<p>Positional Play, or 'Juego de Posición', is a philosophy that has come to dominate elite football. This article breaks down its core tenets: creating numerical superiority, finding the 'free man', and structuring the pitch into zones. We look at its origins with Cruyff and its modern interpretations by managers like Guardiola, Arteta, and De Zerbi.</p>"
    },
    {
        slug: 'valuing-defensive-actions',
        title: "Valuing Defensive Actions",
        date: "April 22, 2024",
        image: "https://picsum.photos/1200/800?random=10",
        imageHint: "soccer tackle",
        content: "<p>How do you quantify the value of a tackle that prevents a goal-scoring opportunity? This article presents a new model for valuing defensive actions beyond simple counts. By considering factors like the location on the pitch and the phase of play, we can assign a 'goal-prevented' value to tackles, interceptions, and blocks, helping to identify elite defensive players.</p>"
    },
    {
        slug: 'impact-of-high-pressing',
        title: "The Impact of High Pressing",
        date: "August 05, 2024",
        image: "https://picsum.photos/1200/800?random=11",
        imageHint: "team pressing soccer",
        content: "<p>High-pressing, aggressive defensive strategies have become synonymous with successful modern teams. This analysis explores the data behind high pressing, measuring metrics like PPDA (Passes Per Defensive Action) and high turnovers. We investigate the correlation between effective pressing and winning major trophies, exploring the physical demands and tactical risks involved.</p>"
    }
];

function getArticleData(slug: string) {
    return articles.find((a) => a.slug === slug);
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
    const article = getArticleData(params.slug);

    if (!article) {
        notFound();
    }

    return (
        <article className="relative py-24 sm:py-32 bg-transparent">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <Link href="/#articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
                        <ArrowLeft size={16} />
                        Back to Articles
                    </Link>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline mb-2">{article.title}</h1>
                    <p className="text-muted-foreground mb-8">{article.date}</p>

                    <Image
                        src={article.image}
                        alt={article.title}
                        width={1200}
                        height={800}
                        className="w-full rounded-lg object-cover shadow-lg mb-8"
                        data-ai-hint={article.imageHint}
                    />

                    <div
                        className="prose prose-invert prose-lg max-w-none text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                </div>
            </div>
        </article>
    );
}
