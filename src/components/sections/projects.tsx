'use client';
import Image from "next/image";
import Link from "next/link";
import { projects, socialLinks } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="container">
        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">
          Featured Projects
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Here are some of the projects I'm proud to have worked on.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const placeholder = PlaceHolderImages.find(
              (p) => p.id === project.image
            );
            return (
              <Card key={project.title} className="flex flex-col bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  {placeholder && (
                    <div className="aspect-video overflow-hidden rounded-md border">
                       <Image
                        src={placeholder.imageUrl}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        data-ai-hint={placeholder.imageHint}
                      />
                    </div>
                  )}
                  <CardTitle className="mt-4">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.githubLink} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  {project.liveLink && (
                    <Button asChild variant="ghost" size="sm">
                      <Link href={project.liveLink} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <div className="mt-12 text-center">
            <Button asChild size="lg">
                <Link href={`${socialLinks.github}?tab=repositories`} target="_blank">
                    View All Repositories
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
