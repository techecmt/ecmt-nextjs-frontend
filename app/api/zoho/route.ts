import { NextRequest } from "next/server";
import { POST as createLead } from "../leads/route";

export async function POST(req: NextRequest) {
  console.warn(
    "[deprecated] /api/zoho called — migrate callers to /api/leads",
    {
      referer: req.headers.get("referer"),
      userAgent: req.headers.get("user-agent"),
      at: new Date().toISOString(),
    },
  );

  return createLead(req);
}
