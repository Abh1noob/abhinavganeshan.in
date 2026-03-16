import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "How the Constellation Works | Abhinav Ganeshan",
  description:
    "Detailed breakdown of how the contribution constellation is generated from GitHub activity.",
};

export default function ConstellationPage() {

  return (
    <div className="min-h-screen bg-background pb-16">
      <main className="container mx-auto px-4 py-8 sm:px-6">
        <div className="mb-6">
          <Button variant="outline" size="sm" asChild>
            <Link href="/" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to homepage
            </Link>
          </Button>
        </div>

        <Card className="mb-8 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl">
              Contribution Constellation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-lg border bg-black/90">
              <Image
                src="/api/constellation?v=3"
                alt="Live GitHub contribution constellation"
                width={900}
                height={400}
                unoptimized
                className="h-auto w-full"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <article className="prose prose-neutral dark:prose-invert max-w-none">
              <h1>How the Contribution Constellation Works</h1>
              <p>
                Every developer has a contribution graph, that grid of green squares on your GitHub profile. It&apos;s functional, but it&apos;s the same for everyone. I wanted something that felt more personal, something that turned my actual coding activity into art. So I built the Contribution Constellation: a dynamic starmap that renders your GitHub contributions as a night sky.
              </p>
              <p>
                Here&apos;s a look at how your activity shapes the stars.
              </p>
              <h2>Streaks become constellations</h2>
              <p>
                The algorithm groups consecutive active days into <strong>streaks</strong>. If you committed on Monday, Tuesday, and Wednesday, skipped Thursday, then committed Friday and Saturday, that produces two streaks: one of length 3 and one of length 2.
              </p>
              <p>
                Each streak of 2 or more days becomes a constellation. Single isolated active days become lone stars, white, unconnected, scattered across the sky. Days with zero activity don&apos;t appear at all; they&apos;re the darkness between stars.
              </p>
              <p>
                This means your coding rhythm directly shapes the sky. A week-long grind produces a large, branching constellation. A quick two-day hotfix is a small pair of connected stars. The pattern of work and rest over three months creates a sky that&apos;s uniquely yours.
              </p>
              <h2>Star brightness denotes intensity</h2>
              <p>
                Not all stars are equal. The number of contributions on a given day determines the star&apos;s size and glow:
              </p>
              <ul>
                <li><strong>1 to 2 contributions:</strong> small, subtle star with a tight glow</li>
                <li><strong>3 to 5 contributions:</strong> medium star, slightly brighter</li>
                <li><strong>6 to 9 contributions:</strong> large star with a noticeable glow halo</li>
                <li><strong>10+ contributions:</strong> the brightest point in the sky with a large core and wide glow radius</li>
              </ul>
              <h2>Color palettes identify constellations</h2>
              <p>
                Each constellation cycles through six color palettes: blue, purple, green, gold, pink, and orange. The constellation lines and glow colors match, so you can visually distinguish separate constellations even when they&apos;re close together.
              </p>
              <p>
                Lone stars (isolated single-day contributions) are always white, neutral and unaffiliated with any constellation.
              </p>
              <h2>Deployment</h2>
              <p>
                The whole thing is a single Next.js API route that returns an SVG image.
              </p>
              <p>
                <em>The source code for the constellation generator lives in my profile repo <Link href="https://github.com/Abh1noob/abhinavganeshan.in/tree/main/src/app/api/constellation/route.ts" target="_blank" className="underline">here</Link>. Feel free to fork it and point it at your own username, your sky will look nothing like mine.</em>
              </p>
            </article>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
