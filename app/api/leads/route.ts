import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SECRET_KEY;

function supabaseHeaders() {
  if (!SUPABASE_SERVICE_KEY) return null;
  return {
    apikey: SUPABASE_SERVICE_KEY,
    Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
    "Content-Type": "application/json",
  };
}

function splitName(name: string) {
  const trimmed = name.trim();
  if (!trimmed) return { firstName: null, lastName: null };
  const [first, ...rest] = trimmed.split(/\s+/);
  return {
    firstName: first || null,
    lastName: rest.length ? rest.join(" ") : null,
  };
}

export async function POST(req: NextRequest) {
  try {
    if (!SUPABASE_URL) {
      throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL");
    }

    const headers = supabaseHeaders();
    if (!headers) {
      throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY or SUPABASE_SECRET_KEY");
    }

    const body = await req.json();
    const {
      name,
      email,
      countryCode,
      phone,
      course,
      nationality,
      startDate,
      message,
      courseType,
    } = body ?? {};

    if (!name || !email || !phone || !course || !nationality || !startDate) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const fullName = String(name).trim();
    const { firstName, lastName } = splitName(fullName);
    const finalPhone = `${String(countryCode ?? "").trim()}${String(phone).trim()}`.trim();
    const referer = req.headers.get("referer");
    const userAgent = req.headers.get("user-agent");

    const leadPayload = {
      full_name: fullName,
      first_name: firstName,
      last_name: lastName,
      phone: finalPhone,
      email: String(email).trim().toLowerCase(),
      interested_course: String(course).trim(),
      source: "website",
      nationality: String(nationality).trim(),
      campaign: String(courseType ?? "").trim() || null,
      description: [
        `Course Type: ${String(courseType ?? "").trim() || "N/A"}`,
        `Selected Course: ${String(course).trim()}`,
        `Intended Start Date: ${String(startDate).trim()}`,
        `Nationality: ${String(nationality).trim()}`,
        `Message: ${String(message ?? "").trim() || "-"}`,
        `Source URL: ${referer ?? "-"}`,
      ].join("\n"),
      utm_source: "website",
      utm_medium: "contact_form",
      utm_campaign: String(courseType ?? "").trim() || null,
      counselling_checks: {
        submitted_via: "website_contact_form",
        requested_start_date: String(startDate).trim(),
        user_agent: userAgent,
      },
    };

    const response = await fetch(`${SUPABASE_URL}/rest/v1/leads?select=id`, {
      method: "POST",
      headers: {
        ...headers,
        Prefer: "return=representation",
      },
      body: JSON.stringify([leadPayload]),
      cache: "no-store",
    });

    const raw = await response.text();
    const responseData = raw ? JSON.parse(raw) : null;

    if (response.ok) {
      return NextResponse.json({
        message: "Lead created successfully in Supabase CRM.",
        data: responseData,
      });
    }

    console.error("Error inserting lead into Supabase:", responseData);
    return NextResponse.json(
      {
        error: "Failed to create lead in Supabase CRM.",
        details: responseData,
      },
      { status: response.status },
    );
  } catch (error) {
    console.error("Error submitting lead to Supabase CRM:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 },
    );
  }
}
