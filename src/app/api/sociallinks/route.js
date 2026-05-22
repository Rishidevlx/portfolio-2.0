import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export const revalidate = 0; // Disable caching

export async function GET() {
  try {
    const rows = await query("SELECT * FROM social_links LIMIT 1;");
    if (rows.length === 0) {
      return NextResponse.json({ success: false }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: rows[0] }, { status: 200 });
  } catch (error) {
    console.error("Portfolio /api/sociallinks error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
