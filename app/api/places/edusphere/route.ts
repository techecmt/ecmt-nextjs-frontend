import { NextResponse } from "next/server";

const PLACE_QUERY = "Edusphere College of Management and Technology Pte Ltd, Singapore";

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing GOOGLE_MAPS_API_KEY" }, { status: 500 });
    }

    // Step 1: Resolve place_id via Find Place from Text
    const findPlaceUrl = new URL("https://maps.googleapis.com/maps/api/place/findplacefromtext/json");
    findPlaceUrl.searchParams.set("input", PLACE_QUERY);
    findPlaceUrl.searchParams.set("inputtype", "textquery");
    findPlaceUrl.searchParams.set("fields", "place_id");
    findPlaceUrl.searchParams.set("key", apiKey);

    const findRes = await fetch(findPlaceUrl.toString());
    const findData = await findRes.json();

    if (findData.status !== "OK" || !findData.candidates?.[0]?.place_id) {
      return NextResponse.json({ error: "Place not found", meta: findData }, { status: 404 });
    }

    const placeId: string = findData.candidates[0].place_id;

    // Step 2: Fetch place details including reviews and geometry
    const detailsUrl = new URL("https://maps.googleapis.com/maps/api/place/details/json");
    detailsUrl.searchParams.set("place_id", placeId);
    detailsUrl.searchParams.set(
      "fields",
      [
        "name",
        "formatted_address",
        "geometry",
        "rating",
        "user_ratings_total",
        "url",
        "reviews",
      ].join(",")
    );
    // Optional: newer params to control reviews behavior
    detailsUrl.searchParams.set("reviews_no_translations", "true");
    detailsUrl.searchParams.set("reviews_sort", "newest");
    detailsUrl.searchParams.set("key", apiKey);

    const detailsRes = await fetch(detailsUrl.toString());
    const detailsData = await detailsRes.json();

    if (detailsData.status !== "OK") {
      // Forward the error from Google API for better debugging
      return NextResponse.json(
        {
          error: `Google API Error: ${detailsData.status}`,
          details: detailsData.error_message || "No additional details provided.",
        },
        { status: 400 }
      );
    }

    const { name, rating, user_ratings_total, reviews = [] } = detailsData.result;
    const payload = {
      name,
      address: detailsData.result.formatted_address,
      location: detailsData.result.geometry?.location ?? null,
      rating: rating ?? null,
      userRatingsTotal: user_ratings_total ?? 0,
      mapUrl: detailsData.result.url ?? null,
      // Trim and normalize reviews to a compact shape
      reviews: reviews.slice(0, 5).map((rev: any) => ({
        authorName: rev.author_name,
        profilePhotoUrl: rev.profile_photo_url,
        rating: rev.rating,
        relativeTime: rev.relative_time_description,
        time: rev.time,
        text: rev.text,
      })),
      placeId,
    };

    return NextResponse.json(payload, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: "Unexpected server error", message: err?.message || String(err) }, { status: 500 });
  }
}
