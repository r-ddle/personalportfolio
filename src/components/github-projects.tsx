"use client";

import { useEffect, useState } from "react";
import { fetchGitHubRepos, GitHubRepo, formatRepoDate } from "@/lib/github";
import BlurFade from "@/components/magicui/blur-fade";
import { HackathonCard } from "@/components/hackathon-card";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const BLUR_FADE_DELAY = 0.04;
const MAX_DISPLAY = 15;

export function GitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRepos() {
      const { repos, totalCount } = await fetchGitHubRepos();
      setRepos(repos.slice(0, MAX_DISPLAY));
      setTotalCount(totalCount);
      setLoading(false);
    }
    loadRepos();
  }, []);

  if (loading) {
    return (
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                GitHub Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Loading projects...
              </h2>
            </div>
          </div>
        </BlurFade>
      </div>
    );
  }

  return (
    <div className="space-y-12 w-full py-12">
      <BlurFade delay={BLUR_FADE_DELAY * 13}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              GitHub Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              All My Projects
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I have built {totalCount}+ projects. Here are the top {MAX_DISPLAY} most recently updated ones.{" "}
              <Link
                href="https://github.com/r-ddle?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline inline-flex items-center gap-1"
              >
                View all on GitHub
                <Icons.github className="h-4 w-4" />
              </Link>
            </p>
          </div>
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 14}>
        <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
          {repos.map((repo, id) => (
            <BlurFade
              key={repo.id}
              delay={BLUR_FADE_DELAY * 15 + id * 0.05}
            >
              <HackathonCard
                title={repo.name}
                description={repo.description || "No description provided"}
                dates={formatRepoDate(repo.updated_at)}
                links={[
                  {
                    title: "View on GitHub",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: repo.html_url,
                  },
                ]}
              />
            </BlurFade>
          ))}
        </ul>
      </BlurFade>
      {totalCount > MAX_DISPLAY && (
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="flex justify-center">
            <Link
              href="https://github.com/r-ddle?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity"
            >
              <span>View {totalCount - MAX_DISPLAY} More Projects on GitHub</span>
              <Icons.github className="h-5 w-5" />
            </Link>
          </div>
        </BlurFade>
      )}
    </div>
  );
}
