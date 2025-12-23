import "server-only";

const ZOHO_REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN;
const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID;
const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;

let accessToken: string | null = null;
let tokenExpiry: number | null = null;

async function refreshAccessToken(): Promise<string> {
  if (!ZOHO_REFRESH_TOKEN || !ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET) {
    throw new Error("Zoho refresh token or client credentials are not configured.");
  }

  const tokenUrl = `https://accounts.zoho.com/oauth/v2/token?refresh_token=${ZOHO_REFRESH_TOKEN}&client_id=${ZOHO_CLIENT_ID}&client_secret=${ZOHO_CLIENT_SECRET}&grant_type=refresh_token`;

  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const data = await response.json();

  if (!response.ok || data.error) {
    console.error("Error refreshing Zoho token:", data);
    throw new Error("Failed to refresh Zoho access token.");
  }

  accessToken = data.access_token;
  // Zoho tokens usually expire in 1 hour (3600 seconds). We'll refresh it a bit earlier.
  tokenExpiry = Date.now() + (data.expires_in - 300) * 1000;

  return accessToken as string;
}

export async function getAccessToken(): Promise<string> {
  if (accessToken && tokenExpiry && Date.now() < tokenExpiry) {
    return accessToken;
  }
  return await refreshAccessToken();
}
