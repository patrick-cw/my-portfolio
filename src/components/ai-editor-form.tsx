"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { suggestArticleImprovements } from "@/ai/flows/suggest-article-improvements";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles } from "lucide-react";

const formSchema = z.object({
  articleContent: z.string().min(100, {
    message: "Article content must be at least 100 characters.",
  }),
});

export function AiEditorForm() {
  const [suggestions, setSuggestions] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      articleContent: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setSuggestions(null);

    try {
      const result = await suggestArticleImprovements(values);
      if (result.suggestions) {
        setSuggestions(result.suggestions);
      } else {
        setError("The AI could not generate suggestions. Please try again.");
      }
    } catch (e) {
      setError("An unexpected error occurred. Please try again later.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="articleContent"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg sr-only">Article Content</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Paste your full article text here..."
                    className="min-h-[300px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                Get Suggestions <Sparkles className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </Form>
      
      {error && (
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{error}</p>
          </CardContent>
        </Card>
      )}

      {suggestions && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Sparkles className="mr-2 h-5 w-5 text-primary" />
              AI-Powered Suggestions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="whitespace-pre-wrap text-foreground/90 font-sans">
              {suggestions}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
