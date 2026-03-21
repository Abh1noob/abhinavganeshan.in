// Configure GITHUB_TOKEN in .env file

import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

interface GitHubStats {
  totalStars: number;
  totalCommits: number;
  totalPRs: number;
  mergedPRs: number;
  totalIssues: number;
  contributedTo: number;
  totalRepos: number;
  followers: number;
  currentStreak: number;
  longestStreak: number;
  totalContributions: number;
  topLanguages: { name: string; percentage: number; color: string }[];
}

const GITHUB_GRAPHQL = "https://api.github.com/graphql";
const USERNAME = siteConfig.integrations.github.username;

async function fetchGitHubStats(): Promise<GitHubStats> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error("GITHUB_TOKEN not set");

  const metaQuery = `
    query {
      user(login: "${USERNAME}") {
        createdAt
        followers { totalCount }
        pullRequests(first: 1) { totalCount }
        mergedPRs: pullRequests(states: [MERGED], first: 1) { totalCount }
        issues(first: 1) { totalCount }
        repositoriesContributedTo(
          first: 1
          contributionTypes: [COMMIT, ISSUE, PULL_REQUEST]
        ) { totalCount }
      }
    }
  `;

  const metaRes = await fetch(GITHUB_GRAPHQL, {
    method: "POST",
    headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query: metaQuery }),
    next: { revalidate: 3600 },
  });
  const metaJson = await metaRes.json() as {
    data: {
      user: {
        createdAt: string;
        followers: { totalCount: number };
        pullRequests: { totalCount: number };
        mergedPRs: { totalCount: number };
        issues: { totalCount: number };
        repositoriesContributedTo: { totalCount: number };
      };
    };
  };
  const metaUser = metaJson.data.user;
  const accountCreatedYear = new Date(metaUser.createdAt).getFullYear();
  const currentYear = new Date().getFullYear();

  // Paginate all repos
  const repoQuery = `
    query($cursor: String) {
      user(login: "${USERNAME}") {
        repositories(
          first: 100
          after: $cursor
          ownerAffiliations: OWNER
          orderBy: { field: STARGAZERS, direction: DESC }
        ) {
          pageInfo { hasNextPage endCursor }
          nodes {
            isFork
            isArchived
            stargazerCount
            languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
              edges {
                size
                node { name color }
              }
            }
          }
        }
      }
    }
  `;

  let allRepos: any[] = [];
  let cursor: string | null = null;

  while (true) {
    const res = await fetch(GITHUB_GRAPHQL, {
      method: "POST",
      headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ query: repoQuery, variables: { cursor } }),
      next: { revalidate: 3600 },
    });
    const json = await res.json() as {
      data: {
        user: {
          repositories: {
            pageInfo: { hasNextPage: boolean; endCursor: string };
            nodes: any[];
          };
        };
      };
    };
    const repoPage = json.data.user.repositories;
    allRepos.push(...repoPage.nodes);
    if (!repoPage.pageInfo.hasNextPage) break;
    cursor = repoPage.pageInfo.endCursor;
  }

  const ownRepos = allRepos.filter((r) => !r.isFork && !r.isArchived);
  const totalStars = ownRepos.reduce((sum: number, r: any) => sum + r.stargazerCount, 0);

  const langMap: Record<string, { size: number; color: string }> = {};
  for (const repo of ownRepos) {
    for (const edge of repo.languages.edges) {
      const name = edge.node.name;
      if (!langMap[name]) langMap[name] = { size: 0, color: edge.node.color || "#ccc" };
      langMap[name].size += edge.size;
    }
  }
  const totalSize = Object.values(langMap).reduce((s, l) => s + l.size, 0);
  const topLanguages = Object.entries(langMap)
    .sort((a, b) => b[1].size - a[1].size)
    .slice(0, 6)
    .map(([name, { size, color }]) => ({
      name,
      percentage: Math.round((size / totalSize) * 10000) / 100,
      color,
    }));

  // Fetch contributions year by year
  let totalCommits = 0;
  let totalContributions = 0;
  const allDays: { date: string; contributionCount: number }[] = [];

  for (let year = accountCreatedYear; year <= currentYear; year++) {
    const from = `${year}-01-01T00:00:00Z`;
    const to = year === currentYear
      ? new Date().toISOString()
      : `${year}-12-31T23:59:59Z`;

    const yearQuery = `
      query {
        user(login: "${USERNAME}") {
          contributionsCollection(from: "${from}", to: "${to}") {
            totalCommitContributions
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays { contributionCount date }
              }
            }
          }
        }
      }
    `;

    const yearRes = await fetch(GITHUB_GRAPHQL, {
      method: "POST",
      headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ query: yearQuery }),
      next: { revalidate: 3600 },
    });
    const yearJson = await yearRes.json() as {
      data: {
        user: {
          contributionsCollection: {
            totalCommitContributions: number;
            contributionCalendar: {
              totalContributions: number;
              weeks: { contributionDays: { contributionCount: number; date: string }[] }[];
            };
          };
        };
      };
    };

    const cc = yearJson.data.user.contributionsCollection;
    totalCommits += cc.totalCommitContributions;
    totalContributions += cc.contributionCalendar.totalContributions;
    allDays.push(...cc.contributionCalendar.weeks.flatMap((w) => w.contributionDays));
  }

  const sortedDays = allDays.sort((a, b) => a.date.localeCompare(b.date));
  const today = new Date().toISOString().slice(0, 10);

  let currentStreak = 0;
  for (let i = sortedDays.length - 1; i >= 0; i--) {
    const { contributionCount, date } = sortedDays[i];
    if (contributionCount > 0) {
      currentStreak++;
    } else if (date === today) {
      continue;
    } else {
      break;
    }
  }

  let longestStreak = 0;
  let tempStreak = 0;
  for (const day of sortedDays) {
    if (day.contributionCount > 0) {
      tempStreak++;
      longestStreak = Math.max(longestStreak, tempStreak);
    } else {
      tempStreak = 0;
    }
  }

  return {
    totalStars,
    totalCommits,
    totalPRs: metaUser.pullRequests.totalCount,
    mergedPRs: metaUser.mergedPRs.totalCount,
    totalIssues: metaUser.issues.totalCount,
    contributedTo: metaUser.repositoriesContributedTo.totalCount,
    totalRepos: ownRepos.length,
    followers: metaUser.followers.totalCount,
    currentStreak,
    longestStreak,
    totalContributions,
    topLanguages,
  };
}

// ---------- SVG rendering ----------

function generateStars(count: number, seed: number): string {
  let stars = "";
  let s = seed;
  const rand = () => {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
  for (let i = 0; i < count; i++) {
    const x = rand() * 900;
    const y = rand() * 460;
    const r = rand() * 1.5 + 0.3;
    const opacity = rand() * 0.6 + 0.2;
    const delay = rand() * 4;
    stars += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="white" opacity="${opacity.toFixed(2)}">
      <animate attributeName="opacity" values="${opacity.toFixed(2)};${(opacity * 0.3).toFixed(2)};${opacity.toFixed(2)}" dur="${(3 + rand() * 4).toFixed(1)}s" begin="${delay.toFixed(1)}s" repeatCount="indefinite"/>
    </circle>`;
  }
  return stars;
}

function renderSVG(stats: GitHubStats): string {
  const W = 900;
  const H = 460;
  const PAD = 36;                    // consistent left/right padding
  const INNER_W = W - PAD * 2;      // 828px usable width
  const FONT = "'SF Mono', 'Fira Code', 'Consolas', monospace";

  const stars = generateStars(130, 42);

  const nebulae = `
    <radialGradient id="neb1" cx="20%" cy="30%" r="35%">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="transparent" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="neb2" cx="75%" cy="70%" r="30%">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="transparent" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="neb3" cx="60%" cy="20%" r="25%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="transparent" stop-opacity="0"/>
    </radialGradient>`;

  // ── Helper: section label ────────────────────────────────────────────
  const sectionLabel = (text: string, y: number) =>
    `<text x="${PAD}" y="${y}" fill="#475569" font-family="${FONT}" font-size="10" letter-spacing="2">${text.toUpperCase()}</text>`;

  // ── Helper: divider ──────────────────────────────────────────────────
  const divider = (y: number) =>
    `<line x1="${PAD}" y1="${y}" x2="${W - PAD}" y2="${y}" stroke="#1e293b" stroke-width="1"/>`;

  // ── Overview: 8 stats in 2 rows of 4 ────────────────────────────────
  const overviewItems = [
    { label: "Stars", value: stats.totalStars.toLocaleString() },
    { label: "Commits", value: stats.totalCommits.toLocaleString() },
    { label: "Total PRs", value: stats.totalPRs.toLocaleString() },
    { label: "Merged PRs", value: stats.mergedPRs.toLocaleString() },
    { label: "Issues", value: stats.totalIssues.toLocaleString() },
    { label: "Repos", value: stats.totalRepos.toLocaleString() },
    { label: "Contributed", value: stats.contributedTo.toLocaleString() },
    { label: "Followers", value: stats.followers.toLocaleString() },
  ];

  const COLS = 4;
  const colW = INNER_W / COLS;
  let overviewSvg = "";

  overviewItems.forEach((item, i) => {
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    const cx = PAD + colW * col + colW / 2;
    const baseY = 78;
    const rowH = 58;
    const valueY = baseY + row * rowH;
    const labelY = valueY + 20;

    overviewSvg += `
      <text x="${cx}" y="${valueY}" fill="#e2e8f0" font-family="${FONT}" font-size="24" font-weight="700" text-anchor="middle">${item.value}</text>
      <text x="${cx}" y="${labelY}" fill="#64748b" font-family="${FONT}" font-size="11" text-anchor="middle">${item.label}</text>`;

    // Vertical separators between columns (not after last)
    if (col < COLS - 1 && row === 0) {
      const lx = PAD + colW * (col + 1);
      overviewSvg += `<line x1="${lx}" y1="56" x2="${lx}" y2="150" stroke="#1e293b" stroke-width="1" opacity="0.6"/>`;
    }
  });

  // ── Streaks: 3 items evenly spaced ───────────────────────────────────
  const streakItems = [
    { label: "Total Contributions", value: stats.totalContributions.toLocaleString() },
    { label: "Current Streak", value: `${stats.currentStreak} days` },
    { label: "Longest Streak", value: `${stats.longestStreak} days` },
  ];

  const streakColW = INNER_W / 3;
  let streakSvg = "";

  streakItems.forEach((item, i) => {
    const cx = PAD + streakColW * i + streakColW / 2;
    streakSvg += `
      <text x="${cx}" y="228" fill="#e2e8f0" font-family="${FONT}" font-size="22" font-weight="700" text-anchor="middle">${item.value}</text>
      <text x="${cx}" y="250" fill="#64748b" font-family="${FONT}" font-size="11" text-anchor="middle">${item.label}</text>`;

    if (i < streakItems.length - 1) {
      const lx = PAD + streakColW * (i + 1);
      streakSvg += `<line x1="${lx}" y1="205" x2="${lx}" y2="260" stroke="#334155" stroke-width="1" opacity="0.5"/>`;
    }
  });

  // ── Language bar + labels ─────────────────────────────────────────────
  const barY = 316;
  const barH = 8;
  let langBarSvg = "";
  let langLabelSvg = "";
  let barX = PAD;

  stats.topLanguages.forEach((lang, i) => {
    const segW = (lang.percentage / 100) * INNER_W;
    const rx = i === 0 ? 4 : i === stats.topLanguages.length - 1 ? 4 : 0;
    langBarSvg += `<rect x="${barX.toFixed(1)}" y="${barY}" width="${segW.toFixed(1)}" height="${barH}" rx="${rx}" fill="${lang.color}" opacity="0.9"/>`;

    // Labels in a 3-column grid below bar
    const col = i % 3;
    const row = Math.floor(i / 3);
    const labelColW = INNER_W / 3;
    const lx = PAD + labelColW * col;
    const ly = barY + 30 + row * 24;

    langLabelSvg += `
      <circle cx="${lx + 5}" cy="${ly - 4}" r="4.5" fill="${lang.color}" opacity="0.9"/>
      <text x="${lx + 16}" y="${ly}" fill="#94a3b8" font-family="${FONT}" font-size="11.5">${lang.name} <tspan fill="#64748b">${lang.percentage}%</tspan></text>`;

    barX += segW;
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <defs>
    ${nebulae}
    <linearGradient id="border-glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.4"/>
      <stop offset="50%" stop-color="#a855f7" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.4"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" rx="12" fill="#0a0e1a"/>
  <rect width="${W}" height="${H}" rx="12" fill="url(#neb1)"/>
  <rect width="${W}" height="${H}" rx="12" fill="url(#neb2)"/>
  <rect width="${W}" height="${H}" rx="12" fill="url(#neb3)"/>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="12" fill="none" stroke="url(#border-glow)" stroke-width="1"/>

  <!-- Stars -->
  ${stars}

  <!-- Overview -->
  ${sectionLabel("Overview", 36)}
  ${overviewSvg}

  ${divider(162)}

  <!-- Streaks -->
  ${sectionLabel("Streaks", 188)}
  ${streakSvg}

  ${divider(276)}

  <!-- Languages -->
  ${sectionLabel("Languages", 302)}
  ${langBarSvg}
  ${langLabelSvg}

  ${divider(396)}

  <!-- Footer -->
  <text x="${W / 2}" y="423" fill="#334155" font-family="${FONT}" font-size="10" text-anchor="middle">${siteConfig.apiText.githubStats.generatedFrom}</text>

   <!-- Shooting star -->
    <g opacity="0">
    <line x1="0" y1="0" x2="70" y2="-4" stroke="url(#border-glow)" stroke-width="1.5" stroke-linecap="round"/>
    
    <animateMotion 
        path="M 700 30 L 200 130"
        dur="2.5s"
        begin="3s"
        repeatCount="indefinite"
        rotate="auto"
    />

    <animate
        attributeName="opacity"
        values="0;0.9;0"
        dur="2.5s"
        begin="3s"
        repeatCount="indefinite"
    />
    </g>
</svg>`;
}

// ---------- Route handler ----------

export async function GET() {
  try {
    const stats = await fetchGitHubStats();
    const svg = renderSVG(stats);
    return new NextResponse(svg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (err: any) {
    const errorSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 200" width="900" height="200">
      <rect width="900" height="200" rx="12" fill="#0a0e1a"/>
      <text x="450" y="105" fill="#64748b" font-family="monospace" font-size="14" text-anchor="middle">${siteConfig.apiText.githubStats.fallbackMessage}</text>
    </svg>`;
    return new NextResponse(errorSvg, {
      headers: { "Content-Type": "image/svg+xml" },
    });
  }
}
