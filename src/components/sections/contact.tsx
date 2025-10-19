import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Send } from "lucide-react";
import { email } from "@/lib/data";
import Aurora from "@/components/ui/Aurora";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#228B22", "#32CD32", "#228B22"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.2}
        />
      </div>
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-center font-headline text-3xl md:text-4xl">Get in Touch</CardTitle>
              <CardDescription className="text-center">
                Have a project in mind or just want to say hi? Feel free to reach out.
                You can email me at{" "}
                <a href={`mailto:${email}`} className="text-primary hover:underline">
                  {email}
                </a>.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your Email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your Message" rows={5} />
                </div>
                <div className="flex justify-end">
                  <Button type="submit">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
