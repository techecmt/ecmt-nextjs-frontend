import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SECRET_KEY;

function parseSupabaseJson(raw: string) {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as unknown;
  } catch {
    return { raw };
  }
}

function clientSafeError(error: unknown) {
  const message =
    error instanceof Error ? error.message : "An unexpected error occurred.";
  const isConfigError =
    message.includes("Missing NEXT_PUBLIC_SUPABASE_URL") ||
    message.includes("Missing SUPABASE_SERVICE_ROLE_KEY");
  if (isConfigError) return message;
  if (process.env.NODE_ENV === "development") return message;
  return "An unexpected error occurred.";
}

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

type CrmQualificationCode = "o_level" | "a_level" | "30_year_above" | "other";

/** Maps website / LP labels to ECMT CRM `leads.highest_qualification` check values. */
function mapQualificationForCrm(label: string): {
  highest_qualification: CrmQualificationCode;
  highest_qualification_other?: string;
} | null {
  const trimmed = label.trim();
  if (!trimmed) return null;

  const byLabel: Record<
    string,
    { highest_qualification: CrmQualificationCode; highest_qualification_other?: string }
  > = {
    "GCE 'O' Level / SSC / 10th Std / SPM": { highest_qualification: "o_level" },
    "GCE 'A' Level / 12th Std / STPM": { highest_qualification: "a_level" },
    "Certificate / ITE / Polytechnic Diploma": {
      highest_qualification: "other",
      highest_qualification_other: trimmed,
    },
    "Bachelor's Degree or higher": {
      highest_qualification: "other",
      highest_qualification_other: trimmed,
    },
    "Other / Mature candidate (working experience)": {
      highest_qualification: "30_year_above",
    },
  };

  const mapped = byLabel[trimmed];
  if (mapped) return mapped;

  return {
    highest_qualification: "other",
    highest_qualification_other: trimmed,
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
      // Optional fields sent by campaign landing pages.
      formSource,
      age,
      qualification,
      workPass,
      startWindow,
      utm,
      pageUrl,
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
    const submittedVia = String(formSource ?? "").trim() || "website_contact_form";
    const utmParams = (utm ?? {}) as Record<string, string | undefined>;
    const sourceUrl = String(pageUrl ?? "").trim() || referer || "-";

    // Only landing-page submissions carry these; keep them out of the
    // description for the standard contact form.
    const qualificationTrimmed = String(qualification ?? "").trim();
    const crmQualification = qualificationTrimmed
      ? mapQualificationForCrm(qualificationTrimmed)
      : null;
    const qualifyingLines = [
      age ? `Age: ${String(age).trim()}` : null,
      qualificationTrimmed ? `Highest Qualification: ${qualificationTrimmed}` : null,
      workPass ? `Pass / Residency Status: ${String(workPass).trim()}` : null,
      startWindow ? `Ready To Start: ${String(startWindow).trim()}` : null,
    ].filter(Boolean) as string[];

    const leadPayload = {
      full_name: fullName,
      first_name: firstName,
      last_name: lastName,
      phone: finalPhone,
      email: String(email).trim().toLowerCase(),
      interested_course: String(course).trim(),
      source: "website",
      nationality: String(nationality).trim(),
      ...(crmQualification ?? {}),
      campaign: String(courseType ?? "").trim() || null,
      description: [
        `Course Type: ${String(courseType ?? "").trim() || "N/A"}`,
        `Selected Course: ${String(course).trim()}`,
        `Intended Start Date: ${String(startDate).trim()}`,
        `Nationality: ${String(nationality).trim()}`,
        ...qualifyingLines,
        `Message: ${String(message ?? "").trim() || "-"}`,
        `Source URL: ${sourceUrl}`,
      ].join("\n"),
      utm_source: utmParams.utm_source?.trim() || "website",
      utm_medium: utmParams.utm_medium?.trim() || "contact_form",
      utm_campaign:
        utmParams.utm_campaign?.trim() || String(courseType ?? "").trim() || null,
      counselling_checks: {
        submitted_via: submittedVia,
        requested_start_date: String(startDate).trim(),
        user_agent: userAgent,
        source_url: sourceUrl,
        ...(age ? { age: String(age).trim() } : {}),
        ...(qualificationTrimmed ? { qualification: qualificationTrimmed } : {}),
        ...(workPass ? { pass_status: String(workPass).trim() } : {}),
        ...(startWindow ? { ready_to_start: String(startWindow).trim() } : {}),
        ...(utmParams.utm_term?.trim() ? { utm_term: utmParams.utm_term.trim() } : {}),
        ...(utmParams.utm_content?.trim()
          ? { utm_content: utmParams.utm_content.trim() }
          : {}),
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
    const responseData = parseSupabaseJson(raw);

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
      { error: clientSafeError(error) },
      { status: 500 },
    );
  }
}
