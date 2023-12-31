import { NextRequest, NextResponse } from "next/server";
import { ISearchService } from "@/services/searchService";
import SearchService from "@/services/searchService";

export async function GET(
  request: NextRequest,
  { params }: { params: { query: string } }
) {
  const { query } = params; //query -> Song's title || AlbumName || ArtistName

  console.log(query);

  const searchService: ISearchService = new SearchService();
  const res = await searchService.getSearchResults(query);

  return NextResponse.json({ data: res });
}
