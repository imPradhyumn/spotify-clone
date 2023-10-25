import { NextRequest, NextResponse } from "next/server";
import { ISearchService } from "@/services/searchService";
import SearchService from "@/services/searchService";
import { songSchema } from "@/db/models/SongModel";

export async function GET(request: NextRequest) {
  const songsService: ISearchService = new SearchService();
  console.log(songSchema);
  return NextResponse.json({ test: "test" });
}
