import { IAlbum } from "@/db/models/AlbumModel";
import { AlbumModel as Album } from "@/db/models/AlbumModel";
import dbConnect from "@/db/database";

export interface IAlbumService {
  album: IAlbum;
  addAlbum(name: string): Promise<string>;
}

class AlbumService implements IAlbumService {
  album!: IAlbum;

  constructor() {
    dbConnect();
  }

  async addAlbum(name: string): Promise<string> {
    let response: string = "";

    const album = new Album({
      name: "Airlift",
      imgPath: "https://i.ibb.co/XYGgBDV/airlift.jpg",
    });

    try {
      const res = await album.save();
      console.log("Album saved : ", res);
      response = "Album Saved";
    } catch (err) {
      console.log("Failed to save album ERR : ", err);
      response = "Error saving album : " + err;
    }
    return response;
  }
}

export default AlbumService;
