import { NextResponse } from "next/server";

type SupabaseField = {
  id: number;
  field_key: string;
};

type SupabaseForm = {
  id: string;
  form_key: string;
};

type InsertSubmissionResponse = {
  id: number;
};

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

async function supabaseRequest<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  if (!SUPABASE_URL) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL");
  }
  const headers = supabaseHeaders();
  if (!headers) {
    throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY or SUPABASE_SECRET_KEY");
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...init,
    headers: {
      ...headers,
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Supabase request failed: ${response.status} ${text}`);
  }

  if (response.status === 204) return null as T;

  // Supabase can return 200/201 with an empty body (e.g. Prefer: return=minimal).
  // Guard JSON parsing to avoid "Unexpected end of JSON input".
  const raw = await response.text();
  if (!raw || raw.trim() === "") {
    return null as T;
  }

  return JSON.parse(raw) as T;
}

function collapseFormPayload(formData: FormData): {
  payloadEntries: [string, string][];
  valuesJson: Record<string, unknown>;
} {
  const payloadEntries: [string, string][] = [];
  const valuesJson: Record<string, unknown> = {};
  for (const [rawKey, rawVal] of formData.entries()) {
    if (rawKey === "form_key") continue;
    const val = String(rawVal);
    payloadEntries.push([rawKey, val]);
    const cur = valuesJson[rawKey];
    if (cur === undefined) {
      valuesJson[rawKey] = val;
    } else if (Array.isArray(cur)) {
      (cur as string[]).push(val);
    } else {
      valuesJson[rawKey] = [cur as string, val];
    }
  }
  return { payloadEntries, valuesJson };
}

function toValueRecord(
  submissionId: number,
  formId: string,
  fieldMap: Map<string, number>,
  [fieldKey, value]: [string, string],
) {
  const trimmed = value.trim();
  const base = {
    submission_id: submissionId,
    form_id: formId,
    field_id: fieldMap.get(fieldKey) ?? null,
    field_key: fieldKey,
    value_text: null as string | null,
    value_number: null as number | null,
    value_boolean: null as boolean | null,
    value_json: null as Record<string, never> | null,
  };

  if (trimmed === "true" || trimmed === "false") {
    return { ...base, value_boolean: trimmed === "true" };
  }
  if (/^-?\d+(\.\d+)?$/.test(trimmed)) {
    return { ...base, value_number: Number(trimmed) };
  }
  return { ...base, value_text: value };
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const formKey = String(formData.get("form_key") || "").trim();
    if (!formKey) {
      return new NextResponse("Missing form_key", { status: 400 });
    }

    const { payloadEntries, valuesJson } = collapseFormPayload(formData);

    const forms = await supabaseRequest<SupabaseForm[]>(
      `forms?select=id,form_key&form_key=eq.${encodeURIComponent(formKey)}&is_active=eq.true&limit=1`,
    );
    if (!forms.length) {
      return new NextResponse("Form not found or inactive", { status: 404 });
    }
    const form = forms[0];

    const firstName = String(formData.get("first_name") || "").trim();
    const lastName = String(formData.get("last_name") || "").trim();
    const submitterName =
      `${firstName} ${lastName}`.trim() ||
      String(formData.get("participant_name") || "").trim() ||
      null;
    const submitterEmail =
      String(formData.get("email") || formData.get("participant_email") || "").trim() || null;
    const sourceUrl = request.headers.get("referer");
    const userAgent = request.headers.get("user-agent");
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ipAddress = forwardedFor?.split(",")[0]?.trim() || null;
    const sourcePath = sourceUrl ? new URL(sourceUrl).pathname : null;

    const inserted = await supabaseRequest<InsertSubmissionResponse[]>(
      "form_submissions?select=id",
      {
        method: "POST",
        headers: { Prefer: "return=representation" },
        body: JSON.stringify([
          {
            form_id: form.id,
            submitter_name: submitterName,
            submitter_email: submitterEmail,
            source_path: sourcePath,
            source_url: sourceUrl,
            ip_address: ipAddress,
            user_agent: userAgent,
            metadata: {
              channel: "website",
            },
            values_json: valuesJson,
          },
        ]),
      },
    );

    const submissionId = inserted[0]?.id;
    if (!submissionId) {
      throw new Error("Failed to create form_submissions row");
    }

    const fields = await supabaseRequest<SupabaseField[]>(
      `form_fields?select=id,field_key&form_id=eq.${encodeURIComponent(form.id)}&is_active=eq.true`,
    );
    const fieldMap = new Map(fields.map((f) => [f.field_key, f.id]));

    const valueRows = payloadEntries
      .filter(([, value]) => value.trim() !== "")
      .map((entry) => toValueRecord(submissionId, form.id, fieldMap, entry));

    if (valueRows.length > 0) {
      await supabaseRequest<null>("form_submission_values", {
        method: "POST",
        headers: { Prefer: "return=minimal" },
        body: JSON.stringify(valueRows),
      });
    }

    const redirectUrl = new URL("/forms/course-evaluation-form?submitted=1", request.url);
    return NextResponse.redirect(redirectUrl, 303);
  } catch (error) {
    console.error("Form submit error:", error);
    const redirectUrl = new URL("/forms/course-evaluation-form?submitted=0", request.url);
    return NextResponse.redirect(redirectUrl, 303);
  }
}

