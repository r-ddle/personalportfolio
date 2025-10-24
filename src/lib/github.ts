export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  stargazers_count: number;
  language: string | null;
  topics: string[];
  fork: boolean;
}

export async function fetchGitHubRepos(username: string = "r-ddle"): Promise<{
  repos: GitHubRepo[];
  totalCount: number;
}> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();

    // Filter out forks and sort by updated date
    const filteredRepos = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

    return {
      repos: filteredRepos,
      totalCount: filteredRepos.length,
    };
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return {
      repos: [],
      totalCount: 0,
    };
  }
}

export function formatRepoDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
