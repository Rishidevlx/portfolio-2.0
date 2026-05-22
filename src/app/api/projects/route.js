import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export const revalidate = 0; // Disable static caching for live data

export async function GET() {
  try {
    const rows = await query("SELECT * FROM projects ORDER BY display_order ASC;");
    const data = rows.map(r => ({
      id: r.id,
      name: r.name,
      title: r.name,
      desc: r.description,
      image: r.thumbnail_url,
      live: r.live_url,
      github: r.github_url,
      skills: typeof r.tech_stack === 'string' ? JSON.parse(r.tech_stack) : r.tech_stack,
      order: r.display_order
    }));

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Frontend Projects Fetch Error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch projects." }, { status: 500 });
  }
}
