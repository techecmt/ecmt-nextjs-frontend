import { getAccessToken } from "@/lib/zoho";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
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
  } = body;

  if (!name || !email || !phone || !course || !nationality || !startDate) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const zohoApiUrl = "https://www.zohoapis.com/crm/v8/Leads";

  try {
    const accessToken = await getAccessToken();

    const leadData = {
      data: [
        {
          Last_Name: name,
          Email: email,
          Mobile: `${countryCode}${phone}`,
          Lead_Source: "Website",
          Interested_Course: course,
          Lead_Received_Date: new Date().toISOString().split("T")[0],
          Lead_Status: "1. Inquiry Received",
          Assignee: "-None-",
          nationality: nationality,
          Description: `Course Type: ${courseType}\nSelected Course: ${course}\nIntended Start Date: ${startDate}\nMessage: ${message}`,
        },
      ],
    };

    const response = await fetch(zohoApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Zoho-oauthtoken ${accessToken}`,
      },
      body: JSON.stringify(leadData),
    });

    const responseData = await response.json();

    if (response.ok && responseData.data[0].code === "SUCCESS") {
      return NextResponse.json({
        message: "Lead created successfully in Zoho CRM.",
        data: responseData,
      });
    } else {
      console.error("Error from Zoho CRM:", responseData);
      return NextResponse.json(
        {
          error: "Failed to create lead in Zoho CRM.",
          details: responseData,
        },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Error submitting to Zoho CRM:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
