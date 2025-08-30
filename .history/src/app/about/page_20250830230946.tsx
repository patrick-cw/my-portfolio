import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="relative py-24 sm:py-32 bg-transparent">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">About Me</h2>
            <div className="mt-8 flex justify-center">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary">
                <Image src="images/face.JPG" alt="Patrick Cipta Winata" layout="fit" objectFit="cover" data-ai-hint="portrait person" />
              </div>
            </div>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I'm Alex Doe, a passionate football analyst with a knack for uncovering stories within the data. My journey started with a simple love for the game and evolved into a deep dive into statistical modeling, data visualization, and tactical analysis. I believe that analytics can bridge the gap between subjective observation and objective reality in football. This portfolio is a collection of my work, showcasing my skills and dedication to pushing the boundaries of football analytics.
            </p>
        </div>
      </div>
    </section>
  );
}
