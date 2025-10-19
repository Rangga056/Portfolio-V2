"use client";

import { useRef } from "react";
import Link from "next/link";
import { Github } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import dynamic from 'next/dynamic';

import { name, title, socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";

const FaultyTerminal = dynamic(() => import('@/components/ui/FaultyTerminal'), { ssr: false });

gsap.registerPlugin(useGSAP);

export function Hero() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".hero-title-char",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        ".hero-subtitle, .hero-buttons",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          delay: 0.8,
        }
      );
    },
    { scope: container }
  );
  
  const heroTitle = `Hey there! I'm ${name.split(" ")[0]}.`;

  return (
    <section
      ref={container}
      className="relative flex min-h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={1}
          pause={false}
          scanlineIntensity={1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          tint="#32CD32"
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={false}
          brightness={1}
        />
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
      </div>
      <div className="container text-center">
        <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
          {heroTitle.split("").map((char, index) => (
            <span
              key={index}
              className="hero-title-char inline-block"
              style={{ whiteSpace: "pre" }}
            >
              {char}
            </span>
          ))}
        </h1>
        <p className="hero-subtitle mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
          {title}
        </p>
        <div className="hero-buttons mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href={socialLinks.github} target="_blank">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
