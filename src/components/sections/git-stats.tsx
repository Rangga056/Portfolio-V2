"use client";

import { useState } from "react";
import Link from "next/link";
import { socialLinks } from "@/lib/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function GitStats() {
  const GITHUB_USERNAME = "Rangga056";
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const STATS_URL = `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&bg_color=00000000&title_color=32CD32&text_color=ffffff&icon_color=32CD32&hide_border=true`;
  const LANGS_URL = `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&hide=jupyter%20notebook&theme=transparent&bg_color=00000000&title_color=32CD32&text_color=ffffff&icon_color=32CD32&hide_border=true&layout=compact`;
  const CONTRIB_URL = `https://ghchart.rshah.org/${GITHUB_USERNAME}?bg_color=121212&color=32CD32&year=${selectedYear}`;

  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

  return (
    <section id="git-stats" className="bg-muted/30 py-24 sm:py-32">
      <div className="container">
        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">
          Git Stats
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          My activity and language usage on GitHub.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={STATS_URL}
              alt="GitHub Stats"
              width={495}
              height={195}
              className="rounded-lg"
            />
          </Link>
          <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LANGS_URL}
              alt="Top Languages"
              width={320}
              height={165}
              className="rounded-lg"
            />
          </Link>
        </div>
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex w-full max-w-4xl items-center justify-end gap-2">
            <span className="text-sm text-muted-foreground">Year:</span>
            <Select
              value={String(selectedYear)}
              onValueChange={(value) => setSelectedYear(Number(value))}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={String(year)}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="w-full max-w-[828px] overflow-x-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CONTRIB_URL}
              alt={`GitHub Contributions for ${selectedYear}`}
              width={828}
              height={128}
              className="max-w-none rounded-lg"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
