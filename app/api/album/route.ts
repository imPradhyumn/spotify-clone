import { NextRequest, NextResponse } from "next/server";
import AlbumService, { IAlbumService } from "@/services/albumService";

export async function GET(request: NextRequest) {
  const albumService: IAlbumService = new AlbumService();
  const response: string = await albumService.addAlbum("airlift");
  return NextResponse.json({ response });
}
