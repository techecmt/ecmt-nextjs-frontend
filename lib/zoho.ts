import "server-only";

const ZOHO_REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN;
const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID;
const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;
const ZOHO_ACCOUNTS_BASE_URL =
  process.env.ZOHO_ACCOUNTS_BASE_URL?.trim() || "https://accounts.zoho.com";

let accessToken: string | null = null;
let tokenExpiry: number | null = null;

async function refreshAccessToken(): Promise<string> {
  if (!ZOHO_REFRESH_TOKEN || !ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET) {
    throw new Error("Zoho refresh token or client credentials are not configured.");
  }

  const tokenUrl = `${ZOHO_ACCOUNTS_BASE_URL}/oauth/v2/token`;
  const body = new URLSearchParams({
    refresh_token: ZOHO_REFRESH_TOKEN,
    client_id: ZOHO_CLIENT_ID,
    client_secret: ZOHO_CLIENT_SECRET,
    grant_type: "refresh_token",
  }).toString();

  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
    cache: "no-store",
  });

  const raw = await response.text();
  let data: any = null;
  try {
    data = raw ? JSON.parse(raw) : null;
  } catch {
    data = { raw };
  }

  if (!response.ok || data.error) {
    // Avoid printing secrets; log only safe diagnostics
    console.error("Error refreshing Zoho token:", {
      status: response.status,
      error: data?.error,
      error_description: data?.error_description,
      accounts_base_url: ZOHO_ACCOUNTS_BASE_URL,
    });
    if (data?.error === "invalid_code") {
      throw new Error(
        "Zoho token refresh failed (invalid_code). Your refresh token is invalid/revoked or you are using the wrong Zoho Accounts data center. Set ZOHO_ACCOUNTS_BASE_URL to the correct domain (e.g. https://accounts.zoho.in / .eu / .com.au) and ensure ZOHO_REFRESH_TOKEN was generated for that same data center.",
      );
    }
    throw new Error(`Failed to refresh Zoho access token. (${data?.error ?? "unknown_error"})`);
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
