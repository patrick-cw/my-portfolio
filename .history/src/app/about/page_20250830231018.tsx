import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="relative py-24 sm:py-32 bg-transparent">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">About Me</h2>
            <div className="mt-8 flex justify-center">
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary">
                <Image src="images/face.JPG" alt="Patrick Cipta Winata" layout="fill" objectFit="fit" data-ai-hint="portrait person" />
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
  );
}
