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
