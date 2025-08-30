import type { NextRequest } from "next/server";

const driveUrl = `https://drive.google.com/uc?export=download&id=1xQ3f863AgDXsqW9NisKfZbgBO6jV4ENr`;

export async function GET(_req: NextRequest) {
  const res = await fetch(driveUrl);

  if (!res.ok || !res.body) {
    return new Response("Failed to fetch PDF", { status: 502 });
  }

  return new Response(res.body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline; filename=Abhinav-Resume.pdf",
    },
  });
}
