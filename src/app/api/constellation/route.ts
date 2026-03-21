// Configure GITHUB_TOKEN in .env file

import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

// ── Config ──────────────────────────────────────────────────────────
const USERNAME = siteConfig.integrations.github.username;
const DAYS = 90;
const WIDTH = 900;
const HEIGHT = 400;
const PADDING = 50;

const PALETTES = [
    { star: "#6ea8fe", id: "b" },   // blue
    { star: "#c084fc", id: "p" },   // purple
    { star: "#7ee8a8", id: "g" },   // green
    { star: "#fcd34d", id: "y" },   // gold
    { star: "#f472b6", id: "k" },   // pink
    { star: "#fb923c", id: "o" },   // orange
];

// ── Types ───────────────────────────────────────────────────────────
interface ContributionDay {
    date: string;
    contributionCount: number;
}

interface Star {
    x: number;
    y: number;
    count: number;
    radius: number;
    glowRadius: number;
    twinkleClass: string;
    paletteId: string;
}

interface Constellation {
    stars: Star[];
    edges: [number, number][];
    palette: (typeof PALETTES)[number];
}

// ── Deterministic seeded random ─────────────────────────────────────
function mulberry32(seed: number) {
    return function () {
        seed |= 0;
        seed = (seed + 0x6d2b79f5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function hashDate(date: string): number {
    let h = 0;
    for (let i = 0; i < date.length; i++) {
        h = ((h << 5) - h + date.charCodeAt(i)) | 0;
    }
    return Math.abs(h);
}

// ── Fetch contributions via GitHub GraphQL API ──────────────────────
async function fetchContributions(username: string): Promise<ContributionDay[]> {
    const token = process.env.GITHUB_TOKEN;
    if (!token) throw new Error("GITHUB_TOKEN not set");

    const now = new Date();
    const from = new Date(now);
    from.setDate(from.getDate() - DAYS);

    const query = `
        query {
            user(login: "${username}") {
                contributionsCollection(from: "${from.toISOString()}", to: "${now.toISOString()}") {
                    contributionCalendar {
                        weeks {
                            contributionDays {
                                date
                                contributionCount
                            }
                        }
                    }
                }
            }
        }
    `;

    const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            Authorization: `bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
        next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

    const json = await res.json();
    const weeks = json.data.user.contributionsCollection.contributionCalendar.weeks;

    const days: ContributionDay[] = weeks
        .flatMap((w: any) => w.contributionDays)
        .map((d: any) => ({ date: d.date, contributionCount: d.contributionCount }))
        .sort((a: ContributionDay, b: ContributionDay) => a.date.localeCompare(b.date));

    return days.slice(-DAYS);
}

// ── Group consecutive active days into streaks ──────────────────────
function groupStreaks(days: ContributionDay[]): ContributionDay[][] {
    const streaks: ContributionDay[][] = [];
    let current: ContributionDay[] = [];

    for (const day of days) {
        if (day.contributionCount > 0) {
            current.push(day);
        } else {
            if (current.length > 0) {
                streaks.push(current);
                current = [];
            }
        }
    }
    if (current.length > 0) streaks.push(current);
    return streaks;
}

// ── Organic constellation shape generation ──────────────────────────
function buildConstellation(
    streak: ContributionDay[],
    regionCx: number,
    regionCy: number,
    palette: (typeof PALETTES)[number],
    seed: number
): Constellation {
    const rand = mulberry32(seed);
    const count = streak.length;
    const twinkles = ["tw1", "tw2", "tw3", ""];

    const stars: Star[] = [];
    const edges: [number, number][] = [];

    function starSize(commits: number) {
        if (commits >= 10) return { radius: 3.0, glow: 12 };
        if (commits >= 6) return { radius: 2.5, glow: 10 };
        if (commits >= 3) return { radius: 2.0, glow: 8 };
        return { radius: 1.5, glow: 6 };
    }

    if (count === 1) {
        const s = starSize(streak[0].contributionCount);
        stars.push({
            x: regionCx,
            y: regionCy,
            count: streak[0].contributionCount,
            radius: s.radius,
            glowRadius: s.glow,
            twinkleClass: twinkles[Math.floor(rand() * twinkles.length)],
            paletteId: palette.id,
        });
        return { stars, edges, palette };
    }

    const s0 = starSize(streak[0].contributionCount);
    stars.push({
        x: regionCx,
        y: regionCy,
        count: streak[0].contributionCount,
        radius: s0.radius,
        glowRadius: s0.glow,
        twinkleClass: twinkles[Math.floor(rand() * twinkles.length)],
        paletteId: palette.id,
    });

    const branchAngles: number[] = [rand() * Math.PI * 2];

    for (let i = 1; i < count; i++) {
        let parentIdx: number;
        if (rand() < 0.3 && stars.length > 2) {
            parentIdx = Math.floor(rand() * stars.length);
        } else {
            parentIdx = stars.length - 1;
        }

        const parent = stars[parentIdx];

        const baseAngle = branchAngles[parentIdx] || 0;
        const deviation = (0.7 + rand() * 2.1) * (rand() < 0.5 ? 1 : -1);
        const angle = baseAngle + deviation;

        const dist = 35 + rand() * 40;

        const nx = parent.x + Math.cos(angle) * dist;
        const ny = parent.y + Math.sin(angle) * dist;

        const clampedX = Math.max(PADDING + 20, Math.min(WIDTH - PADDING - 20, nx));
        const clampedY = Math.max(PADDING + 10, Math.min(HEIGHT - PADDING - 20, ny));

        const s = starSize(streak[i].contributionCount);
        stars.push({
            x: clampedX,
            y: clampedY,
            count: streak[i].contributionCount,
            radius: s.radius,
            glowRadius: s.glow,
            twinkleClass: twinkles[Math.floor(rand() * twinkles.length)],
            paletteId: palette.id,
        });

        branchAngles.push(angle);
        edges.push([parentIdx, stars.length - 1]);
    }

    if (count >= 4 && rand() < 0.5) {
        const a = Math.floor(rand() * count);
        let b = Math.floor(rand() * count);
        if (b === a) b = (a + 2) % count;
        const exists = edges.some(
            ([e1, e2]) => (e1 === a && e2 === b) || (e1 === b && e2 === a)
        );
        if (!exists && a !== b) {
            edges.push([a, b]);
        }
    }

    return { stars, edges, palette };
}

// ── Distribute constellation regions across the canvas ──────────────
function distributeRegions(count: number, seed: number): { x: number; y: number }[] {
    const rand = mulberry32(seed);
    const regions: { x: number; y: number }[] = [];

    const cols = Math.ceil(Math.sqrt(count * (WIDTH / HEIGHT)));
    const rows = Math.ceil(count / cols);
    const cellW = (WIDTH - 2 * PADDING) / cols;
    const cellH = (HEIGHT - 2 * PADDING) / rows;

    for (let r = 0; r < rows && regions.length < count; r++) {
        for (let c = 0; c < cols && regions.length < count; c++) {
            const cx = PADDING + cellW * (c + 0.2 + rand() * 0.6);
            const cy = PADDING + cellH * (r + 0.2 + rand() * 0.6);
            regions.push({ x: cx, y: cy });
        }
    }

    return regions.slice(0, count);
}

// ── SVG rendering ───────────────────────────────────────────────────
function renderSVG(
    constellations: Constellation[],
    loneStars: Star[],
    totalContributions: number,
    totalDays: number
): string {
    const glowDefs = PALETTES.map(
        (p) => `
    <radialGradient id="gl-${p.id}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${p.star}" stop-opacity="0.85"/>
      <stop offset="35%" stop-color="${p.star}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${p.star}" stop-opacity="0"/>
    </radialGradient>`
    ).join("");

    const rand = mulberry32(42);
    const dust = Array.from({ length: 50 }, () => {
        const x = rand() * WIDTH;
        const y = rand() * HEIGHT;
        const r = 0.3 + rand() * 0.3;
        const fills = ["#fff", "#aac", "#cce"];
        return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="${fills[Math.floor(rand() * 3)]}"/>`;
    }).join("");

    const constellationSVG = constellations
        .map((c) => {
            const lines = c.edges
                .map(([a, b]) => {
                    const sa = c.stars[a];
                    const sb = c.stars[b];
                    return `<line x1="${sa.x.toFixed(1)}" y1="${sa.y.toFixed(1)}" x2="${sb.x.toFixed(1)}" y2="${sb.y.toFixed(1)}" stroke="${c.palette.star}" stroke-width="0.5" opacity="0.32"/>`;
                })
                .join("");

            const starsSVG = c.stars
                .map((s) => {
                    const twClass = s.twinkleClass ? ` class="${s.twinkleClass}"` : "";
                    return `<circle cx="${s.x.toFixed(1)}" cy="${s.y.toFixed(1)}" r="${s.glowRadius}" fill="url(#gl-${s.paletteId})"/><circle cx="${s.x.toFixed(1)}" cy="${s.y.toFixed(1)}" r="${s.radius}"${twClass} fill="#fff"/>`;
                })
                .join("");

            return lines + starsSVG;
        })
        .join("");

    const loneSVG = loneStars
        .map((s) => {
            const twClass = s.twinkleClass ? ` class="${s.twinkleClass}"` : "";
            return `<circle cx="${s.x.toFixed(1)}" cy="${s.y.toFixed(1)}" r="${s.glowRadius}" fill="url(#gl-w)"/><circle cx="${s.x.toFixed(1)}" cy="${s.y.toFixed(1)}" r="${s.radius}"${twClass} fill="#fff"/>`;
        })
        .join("");

    const legendItems = [
        { r: 1.5, color: "#6ea8fe", label: "1-2" },
        { r: 2.5, color: "#7ee8a8", label: "3-5" },
        { r: 3.5, color: "#fcd34d", label: "6-9" },
        { r: 4.5, color: "#c084fc", label: "10+" },
    ];
    const legend = legendItems
        .map((item, i) => {
            const x = 68 + i * 50;
            return `<circle cx="${x}" cy="390" r="${item.r}" fill="${item.color}"/><text x="${x + 8}" y="393" fill="${item.color}" font-size="9" font-family="'SF Mono','Fira Code',monospace" opacity="0.9">${item.label}</text>`;
        })
        .join("");

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
<style>
@keyframes tw1{0%,100%{opacity:1}50%{opacity:.35}}
@keyframes tw2{0%,100%{opacity:.85}35%{opacity:.25}70%{opacity:.95}}
@keyframes tw3{0%,100%{opacity:.9}60%{opacity:.3}}
@keyframes s1{0%{transform:translate(0,0);opacity:0}2%{opacity:.7}12%{transform:translate(-300px,300px);opacity:0}100%{opacity:0}}
@keyframes s2{0%{transform:translate(0,0);opacity:0}2%{opacity:.5}10%{transform:translate(350px,180px);opacity:0}100%{opacity:0}}
@keyframes s3{0%{transform:translate(0,0);opacity:0}2%{opacity:.4}14%{transform:translate(300px,150px);opacity:0}100%{opacity:0}}
.tw1{animation:tw1 3.2s ease-in-out infinite}
.tw2{animation:tw2 2.6s ease-in-out infinite .4s}
.tw3{animation:tw3 4s ease-in-out infinite 1.1s}
.s1{animation:s1 18s ease-out infinite}
.s2{animation:s2 24s ease-out infinite 8s}
.s3{animation:s3 32s ease-out infinite 15s}
</style>
<defs>
<radialGradient id="neb1" cx="20%" cy="30%" r="35%"><stop offset="0%" stop-color="#6366f1" stop-opacity="0.12"/><stop offset="100%" stop-color="transparent" stop-opacity="0"/></radialGradient>
<radialGradient id="neb2" cx="75%" cy="70%" r="30%"><stop offset="0%" stop-color="#a855f7" stop-opacity="0.10"/><stop offset="100%" stop-color="transparent" stop-opacity="0"/></radialGradient>
<radialGradient id="neb3" cx="60%" cy="20%" r="25%"><stop offset="0%" stop-color="#06b6d4" stop-opacity="0.08"/><stop offset="100%" stop-color="transparent" stop-opacity="0"/></radialGradient>
<linearGradient id="border-glow" x1="0%" y1="0%" x2="100%" y2="100%">
  <stop offset="0%" stop-color="#6366f1" stop-opacity="0.4"/>
  <stop offset="50%" stop-color="#a855f7" stop-opacity="0.2"/>
  <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.4"/>
</linearGradient>
<radialGradient id="gl-w" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff" stop-opacity="0.9"/><stop offset="40%" stop-color="#fff" stop-opacity="0.18"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
${glowDefs}
</defs>
<rect width="${WIDTH}" height="${HEIGHT}" rx="12" fill="#0a0e1a"/>
<rect width="${WIDTH}" height="${HEIGHT}" rx="12" fill="url(#neb1)"/>
<rect width="${WIDTH}" height="${HEIGHT}" rx="12" fill="url(#neb2)"/>
<rect width="${WIDTH}" height="${HEIGHT}" rx="12" fill="url(#neb3)"/>
<rect x="0.5" y="0.5" width="${WIDTH - 1}" height="${HEIGHT - 1}" rx="12" fill="none" stroke="url(#border-glow)" stroke-width="1"/>
<g opacity="0.3">${dust}</g>
${constellationSVG}
${loneSVG}
<g class="s1" opacity="0"><line x1="800" y1="50" x2="830" y2="20" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></g>
<g class="s2" opacity="0"><line x1="400" y1="0" x2="360" y2="-20" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/></g>
<g class="s3" opacity="0"><line x1="-20" y1="100" x2="-60" y2="80" stroke="#fff" stroke-width="1.0" stroke-linecap="round"/></g>
<text x="450" y="26" text-anchor="middle" fill="#64748b" font-size="11" font-family="'SF Mono','Fira Code',monospace" letter-spacing="3" opacity="0.8">CONTRIBUTION CONSTELLATION</text>
<text x="450" y="390" text-anchor="middle" fill="#64748b" font-size="10" font-family="'SF Mono','Fira Code',monospace" letter-spacing="1" opacity="0.8">${totalDays} days · ${totalContributions} contributions · ${constellations.length} constellation${constellations.length !== 1 ? "s" : ""}</text>
<g opacity="0.8">${legend}</g>
</svg>`;
}

// ── Main handler ────────────────────────────────────────────────────
export async function GET() {
    try {
        const days = await fetchContributions(USERNAME);

        const allStreaks = groupStreaks(days);
        const constellationStreaks = allStreaks.filter((s) => s.length >= 2);
        const loneStreaks = allStreaks.filter((s) => s.length === 1);

        const loneDays = loneStreaks.map((s) => s[0]);

        const totalContributions = days.reduce(
            (sum, d) => sum + d.contributionCount,
            0
        );

        const dateSeed = hashDate(days[0]?.date ?? "2024-01-01");

        const totalRegions = constellationStreaks.length + loneDays.length;
        const regions = distributeRegions(totalRegions, dateSeed);

        const constellations: Constellation[] = constellationStreaks.map(
            (streak, i) => {
                const region = regions[i];
                const palette = PALETTES[i % PALETTES.length];
                const seed = dateSeed + i * 7919;
                return buildConstellation(streak, region.x, region.y, palette, seed);
            }
        );

        const rand = mulberry32(dateSeed + 999);
        const loneStars: Star[] = loneDays.map((day, i) => {
            const region = regions[constellationStreaks.length + i];
            const commits = day.contributionCount;
            const r = commits >= 6 ? 2.2 : commits >= 3 ? 1.7 : 1.3;
            const glow = commits >= 6 ? 8 : commits >= 3 ? 6 : 4;
            const twinkles = ["tw1", "tw2", "tw3", ""];
            return {
                x: region?.x ?? PADDING + rand() * (WIDTH - 2 * PADDING),
                y: region?.y ?? PADDING + rand() * (HEIGHT - 2 * PADDING),
                count: commits,
                radius: r,
                glowRadius: glow,
                twinkleClass: twinkles[Math.floor(rand() * twinkles.length)],
                paletteId: "w",
            };
        });

        const svg = renderSVG(constellations, loneStars, totalContributions, DAYS);

        return new NextResponse(svg, {
            headers: {
                "Content-Type": "image/svg+xml",
                "Cache-Control": "public, max-age=3600, s-maxage=3600",
            },
        });
    } catch (error) {
        const fallback = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
      <rect width="${WIDTH}" height="${HEIGHT}" fill="#0a0e1a" rx="12"/>
      <text x="450" y="200" text-anchor="middle" fill="#d4dbe6ff" font-size="13" font-family="'SF Mono',monospace">constellation loading — check API rate limits</text>
    </svg>`;
        return new NextResponse(fallback, {
            headers: { "Content-Type": "image/svg+xml" },
        });
    }
}
