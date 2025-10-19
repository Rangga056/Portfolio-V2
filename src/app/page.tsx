'use client';
import dynamic from 'next/dynamic';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { GitStats } from "@/components/sections/git-stats";
import { Contact } from "@/components/sections/contact";

const PixelBlast = dynamic(() => import('@/components/ui/pixel-blast'), { ssr: false });

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <PixelBlast
                  variant="circle"
                  pixelSize={6}
                  color="#228B22"
                  patternScale={3}
                  patternDensity={1.2}
                  pixelSizeJitter={0.5}
                  enableRipples
                  rippleSpeed={0.4}
                  rippleThickness={0.12}
                  rippleIntensityScale={1.5}
                  liquid
                  liquidStrength={0.12}
                  liquidRadius={1.2}
                  liquidWobbleSpeed={5}
                  speed={0.6}
                  edgeFade={0.25}
                  transparent
                />
            </div>
            <Skills />
            <Projects />
        </div>
        <GitStats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
