import { NextRequest, NextResponse } from "next/server";
import { searchService } from "../../../../services/index";

export async function GET(request: NextRequest) {
  const songs = await searchService.getTop5Songs();
  return NextResponse.json({ songsList: songs });
}
