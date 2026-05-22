import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export const revalidate = 0; // Disable static caching for live data

export async function GET() {
  try {
    const rows = await query("SELECT * FROM testimonials ORDER BY display_order ASC;");
    const data = rows.map(r => ({
      name: r.client_name,
      role: r.company || "",
      platform: r.platform || "",
      avatar: r.avatar_url || (r.client_name ? r.client_name.substring(0, 2).toUpperCase() : "U"),
      text: r.review,
      rating: r.rating || 5
    }));

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Frontend Testimonials Fetch Error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch testimonials." }, { status: 500 });
  }
}
