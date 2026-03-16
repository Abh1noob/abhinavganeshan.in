import Image from "next/image";
import Link from "next/link";
import { Info, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ConstellationWidget = () => {
  return (
    <Card className="mb-8 overflow-hidden">
      <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <CardTitle>Contribution Constellation</CardTitle>
          </div>
          <CardDescription>
            My recent GitHub contributions rendered as a live constellation map.
          </CardDescription>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="/constellation" className="gap-2">
            <Info className="h-4 w-4" />
            How it works
          </Link>
        </Button>
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
  );
};

export default ConstellationWidget;
