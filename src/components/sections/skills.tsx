import { skills } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Skills() {
  return (
    <section id="skills" className="bg-muted/30 py-24 sm:py-32">
      <div className="container">
        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">
          Tech Stack
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          A glimpse into the technologies I work with to build modern web applications.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm font-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
