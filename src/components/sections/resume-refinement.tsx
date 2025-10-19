"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2, Wand2 } from "lucide-react";

import {
  suggestResumeKeywords,
  ResumeKeywordSuggestionOutput,
} from "@/ai/flows/resume-keyword-suggestion";
import {
  resumeContentSuggestion,
  ResumeContentSuggestionOutput,
} from "@/ai/flows/resume-content-suggestion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

const FormSchema = z.object({
  resumeText: z.string().min(100, {
    message: "Resume text must be at least 100 characters.",
  }),
});

type AiSuggestions = {
  keywords: ResumeKeywordSuggestionOutput;
  content: ResumeContentSuggestionOutput;
};

export function ResumeRefinement() {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<AiSuggestions | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      resumeText: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setSuggestions(null);
    try {
      const [keywordsResult, contentResult] = await Promise.all([
        suggestResumeKeywords({ resumeText: data.resumeText }),
        resumeContentSuggestion({ resumeText: data.resumeText }),
      ]);

      setSuggestions({
        keywords: keywordsResult,
        content: contentResult,
      });
    } catch (error) {
      console.error("Error fetching AI suggestions:", error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description:
          "Failed to get AI-powered suggestions. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="resume-refinement" className="bg-muted/30 py-24 sm:py-32">
      <div className="container max-w-4xl">
        <Card className="overflow-hidden">
          <CardHeader className="bg-card">
            <CardTitle className="text-center font-headline text-3xl md:text-4xl">
              AI Resume Refinement
            </CardTitle>
            <CardDescription className="text-center">
              Paste your resume below to get AI-powered suggestions for keywords
              and content improvements.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="resumeText"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Resume Content</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Paste the full text of your resume here..."
                          rows={15}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end">
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Wand2 className="mr-2 h-4 w-4" />
                    )}
                    Generate Suggestions
                  </Button>
                </div>
              </form>
            </Form>

            {suggestions && (
              <div className="mt-8 space-y-6">
                <Alert>
                  <Wand2 className="h-4 w-4" />
                  <AlertTitle>Content Suggestion</AlertTitle>
                  <AlertDescription>
                    {suggestions.content.suggestions}
                  </AlertDescription>
                </Alert>

                <Alert>
                  <AlertTitle>Suggested Keywords</AlertTitle>
                  <AlertDescription>
                    Consider including these keywords to better align with job
                    descriptions.
                    <div className="mt-4 flex flex-wrap gap-2">
                      {suggestions.keywords.suggestedKeywords.map(
                        (keyword) => (
                          <Badge key={keyword} variant="outline">
                            {keyword}
                          </Badge>
                        )
                      )}
                    </div>
                  </AlertDescription>
                </Alert>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
