import Link from "next/link";
import { socialLinks } from "@/lib/data";

export function GitStats() {
  const GITHUB_USERNAME = "Rangga056";
  const STATS_URL = `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&theme=tokyonight&show_icons=true`;
  const LANGS_URL = `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&hide=jupyter%20notebook&theme=tokyonight&show_icons=true&hide_border=true&layout=compact`;

  return (
    <section id="git-stats" className="bg-muted/30 py-24 sm:py-32">
      <div className="container">
        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">
          Git Stats
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          My activity and language usage on GitHub.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={STATS_URL}
              alt="GitHub Stats"
              width={400}
              height={165}
              className="rounded-lg border border-border"
            />
          </Link>
          <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LANGS_URL}
              alt="Top Languages"
              width={400}
              height={165}
              className="rounded-lg border border-border"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
