'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting relevant keywords to include in a resume.
 *
 * The flow takes a resume as input and returns a list of suggested keywords to optimize the resume for applicant tracking systems and hiring managers.
 *
 * - `suggestResumeKeywords` - A function that processes the resume and returns keyword suggestions.
 * - `ResumeKeywordSuggestionInput` - The input type for the `suggestResumeKeywords` function.
 * - `ResumeKeywordSuggestionOutput` - The return type for the `suggestResumeKeywords` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResumeKeywordSuggestionInputSchema = z.object({
  resumeText: z
    .string()
    .describe('The text content of the resume to be analyzed.'),
});

export type ResumeKeywordSuggestionInput = z.infer<
  typeof ResumeKeywordSuggestionInputSchema
>;

const ResumeKeywordSuggestionOutputSchema = z.object({
  suggestedKeywords: z
    .array(z.string())
    .describe('An array of keywords suggested for inclusion in the resume.'),
});

export type ResumeKeywordSuggestionOutput = z.infer<
  typeof ResumeKeywordSuggestionOutputSchema
>;

export async function suggestResumeKeywords(
  input: ResumeKeywordSuggestionInput
): Promise<ResumeKeywordSuggestionOutput> {
  return resumeKeywordSuggestionFlow(input);
}

const resumeKeywordSuggestionPrompt = ai.definePrompt({
  name: 'resumeKeywordSuggestionPrompt',
  input: {schema: ResumeKeywordSuggestionInputSchema},
  output: {schema: ResumeKeywordSuggestionOutputSchema},
  prompt: `You are an AI resume optimization assistant.  Your task is to analyze the provided resume text and suggest a list of keywords that would be relevant to include in the resume to help it pass through applicant tracking systems and appeal to hiring managers.

  Resume Text:
  {{resumeText}}

  Please provide a list of suggested keywords that are not already present in the resume but would be beneficial to include.`,
});

const resumeKeywordSuggestionFlow = ai.defineFlow(
  {
    name: 'resumeKeywordSuggestionFlow',
    inputSchema: ResumeKeywordSuggestionInputSchema,
    outputSchema: ResumeKeywordSuggestionOutputSchema,
  },
  async input => {
    const {output} = await resumeKeywordSuggestionPrompt(input);
    return output!;
  }
);
