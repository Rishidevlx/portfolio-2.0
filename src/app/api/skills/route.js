import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export const dynamic = 'force-dynamic'; // Disable caching for real-time updates
export const revalidate = 0; // Prevent ISR caching

export async function GET() {
  try {
    const skills = await query("SELECT * FROM skills WHERE is_visible = 1 ORDER BY display_order ASC;");
    const categories = await query("SELECT * FROM skill_categories ORDER BY display_order ASC;");
    
    // Group skills by category
    const groupedSkills = {};
    categories.forEach(cat => {
      groupedSkills[cat.name] = [];
    });
    
    skills.forEach(skill => {
      if (!groupedSkills[skill.category]) {
        groupedSkills[skill.category] = [];
      }
      groupedSkills[skill.category].push({
        name: skill.name,
        href: skill.link_url || '#',
        iconUrl: skill.icon_url,
      });
    });

    return NextResponse.json(
      { success: true, data: { categories: categories.map(c => c.name), groupedSkills } }, 
      { 
        status: 200,
        headers: {
          'Cache-Control': 'no-store, max-age=0'
        }
      }
    );
  } catch (error) {
    console.error("Portfolio /api/skills error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
