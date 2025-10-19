"use client";
import dynamic from 'next/dynamic';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { about, experiences, education } from "@/lib/data";
import { Briefcase, GraduationCap } from "lucide-react";

const PixelBlast = dynamic(() => import('@/components/ui/pixel-blast'), { ssr: false });

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="container">
        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">
          About Me
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-foreground">
          {about}
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Briefcase className="h-6 w-6 text-primary" />
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                      <Briefcase className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground">
                        {exp.company} &bull; {exp.period}
                      </p>
                      <p className="mt-2 text-sm">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                  <GraduationCap className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{education.institution}</h3>
                  <p className="text-sm text-muted-foreground">
                    {education.degree} &bull; {education.period}
                  </p>
                  <p className="mt-2 text-sm">{education.details}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
