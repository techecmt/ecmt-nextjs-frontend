import type { NextConfig } from "next";

function getSupabaseHostname() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!supabaseUrl) return null;
  try {
    return new URL(supabaseUrl).hostname;
  } catch {
    return null;
  }
}

const supabaseHostname = getSupabaseHostname();
const supabaseRemotePattern = supabaseHostname
  ? new URL(`https://${supabaseHostname}`)
  : null;

const nextConfig: NextConfig = {
  trailingSlash: true,
  async headers() {
    return [
      {
        // Backstop for the noindex in app/lp/layout.tsx, and it covers non-HTML
        // responses that cannot carry a meta tag. Note that /lp is deliberately
        // NOT disallowed in robots.ts: a crawler has to be able to fetch the
        // page to see this header at all.
        source: "/lp/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.edusphere.edu.sg" }],
        destination: "https://edusphere.edu.sg/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "lh4.googleusercontent.com" },
      { protocol: "https", hostname: "lh5.googleusercontent.com" },
      { protocol: "https", hostname: "lh6.googleusercontent.com" },
      { protocol: "https", hostname: "ssl.gstatic.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      // Explicitly allow the ECMT CRM Supabase project host used by newsroom photos.
      { protocol: "https", hostname: "qgmpiaxddyshkureyanw.supabase.co" },
      ...(supabaseRemotePattern
        ? [supabaseRemotePattern]
        : []),
    ],
  },
};

export default nextConfig;
