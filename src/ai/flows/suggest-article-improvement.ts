'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting improvements to articles.
 *
 * - suggestArticleImprovements - A function that takes an article as input and returns improvement suggestions.
 * - SuggestArticleImprovementsInput - The input type for the suggestArticleImprovements function.
 * - SuggestArticleImprovementsOutput - The return type for the suggestArticleImprovements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestArticleImprovementsInputSchema = z.object({
  articleContent: z
    .string()
    .describe('The content of the article to be improved.'),
});

export type SuggestArticleImprovementsInput = z.infer<
  typeof SuggestArticleImprovementsInputSchema
>;

const SuggestArticleImprovementsOutputSchema = z.object({
  suggestions: z
    .string()
    .describe('AI-powered suggestions for improving the article.'),
});

export type SuggestArticleImprovementsOutput = z.infer<
  typeof SuggestArticleImprovementsOutputSchema
>;

export async function suggestArticleImprovements(
  input: SuggestArticleImprovementsInput
): Promise<SuggestArticleImprovementsOutput> {
  return suggestArticleImprovementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestArticleImprovementsPrompt',
  input: {schema: SuggestArticleImprovementsInputSchema},
  output: {schema: SuggestArticleImprovementsOutputSchema},
  prompt: `You are an AI assistant designed to provide suggestions for improving articles.

  Given the content of an article, provide actionable suggestions to enhance its quality,
  engagement, and overall impact. Focus on areas such as clarity, structure, tone, and content.

  Article Content: {{{articleContent}}}
  \n  Suggestions:`,
});

const suggestArticleImprovementsFlow = ai.defineFlow(
  {
    name: 'suggestArticleImprovementsFlow',
    inputSchema: SuggestArticleImprovementsInputSchema,
    outputSchema: SuggestArticleImprovementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
