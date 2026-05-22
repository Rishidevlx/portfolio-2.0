import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const experiences = await query("SELECT * FROM experiences ORDER BY display_order ASC;");
    
    const formattedData = experiences.map(exp => {
      const roles = typeof exp.roles === 'string' ? JSON.parse(exp.roles) : exp.roles;
      const skills = typeof exp.skills === 'string' ? JSON.parse(exp.skills) : exp.skills;

      return {
        company: exp.company_name,
        logo: exp.company_logo_url,
        url: exp.company_link,
        roles: roles.map(r => ({
          title: r.title,
          type: r.type,
          duration: r.duration ? `${r.startDate} - ${r.endDate} • ${r.duration}` : `${r.startDate} - ${r.endDate}`
        })),
        skills: skills.map(s => ({
          iconUrl: s.icon
        }))
      };
    });

    return NextResponse.json(
      { success: true, data: formattedData }, 
      { 
        status: 200,
        headers: { 'Cache-Control': 'no-store, max-age=0' }
      }
    );
  } catch (error) {
    console.error("Portfolio /api/experiences error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
