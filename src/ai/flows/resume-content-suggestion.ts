// This file is machine-generated - edit at your own risk!

'use server';

/**
 * @fileOverview This file contains a Genkit flow for providing AI-powered suggestions to improve resume content.
 *
 * - resumeContentSuggestion - A function that processes a resume and provides content suggestions.
 * - ResumeContentSuggestionInput - The input type for the resumeContentSuggestion function.
 * - ResumeContentSuggestionOutput - The return type for the resumeContentSuggestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResumeContentSuggestionInputSchema = z.object({
  resumeText: z
    .string()
    .describe('The text content of the resume to be analyzed.'),
});
export type ResumeContentSuggestionInput = z.infer<
  typeof ResumeContentSuggestionInputSchema
>;

const ResumeContentSuggestionOutputSchema = z.object({
  suggestions: z
    .string()
    .describe(
      'AI-powered suggestions to improve the content of the resume, focusing on keywords, phrasing, and formatting for applicant tracking systems and hiring managers.'
    ),
});
export type ResumeContentSuggestionOutput = z.infer<
  typeof ResumeContentSuggestionOutputSchema
>;

export async function resumeContentSuggestion(
  input: ResumeContentSuggestionInput
): Promise<ResumeContentSuggestionOutput> {
  return resumeContentSuggestionFlow(input);
}

const resumeContentSuggestionPrompt = ai.definePrompt({
  name: 'resumeContentSuggestionPrompt',
  input: {schema: ResumeContentSuggestionInputSchema},
  output: {schema: ResumeContentSuggestionOutputSchema},
  prompt: `You are an AI resume expert. You are to provide suggestions to the user to improve their resume.

Resume Text: {{{resumeText}}}

Based on the resume text above, provide suggestions to improve the resume. Focus on providing specific keywords, phrasing, and formatting that would be useful for applicant tracking systems and hiring managers. Return the output in a single paragraph.
`,
});

const resumeContentSuggestionFlow = ai.defineFlow(
  {
    name: 'resumeContentSuggestionFlow',
    inputSchema: ResumeContentSuggestionInputSchema,
    outputSchema: ResumeContentSuggestionOutputSchema,
  },
  async input => {
    const {output} = await resumeContentSuggestionPrompt(input);
    return output!;
  }
);
