import { AiEditorForm } from "@/components/ai-editor-form";
import { Bot } from "lucide-react";

export default function AiEditorPage() {
  return (
    <div className="relative isolate">
      {/*
      <div className="container py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Bot className="mx-auto h-12 w-12 text-primary" style={{filter: 'drop-shadow(0 0 8px hsl(var(--primary)))'}} />
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">AI Article Assistant</h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Paste your article content below to get AI-powered suggestions for improvement. Enhance clarity, structure, and engagement with a single click.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <AiEditorForm />
        </div>
      </div>
      */}
      <div className="container py-16 sm:py-24 text-center">
        <h1 className="text-2xl font-bold">AI Editor is currently under construction.</h1>
        <p className="text-muted-foreground">It will be available again soon!</p>
      </div>
    </div>
  );
}
