import dbConnect from "@/db/database";
import { ISong } from "@/db/models/SongModel";
import { IArtist } from "@/db/models/ArtistModel";
import { IAlbum } from "@/db/models/AlbumModel";
import { SongsModel as Song } from "@/db/models/SongModel";
import { AlbumModel as Album } from "@/db/models/AlbumModel";
import { ArtistModel as Artist } from "@/db/models/ArtistModel";

interface ISearchResult {
  songsList: ISong[];
  artistsList: IArtist[];
  albumsList: IAlbum[];
  topArtist: IArtist;
}

export interface ISearchService extends ISearchResult {
  getSearchResults(query: string): Promise<ISearchResult>;
  getSongsByTitle(title: string): Promise<void>;
  getTop5Songs(): Promise<ISong[]>;

  getAlbumsList(query: string): Promise<void>;
  getTop5Albums(): Promise<void>;

  getTopArtist(): IArtist;
  getArtistsList(query: string): Promise<void>;
}

export default class SearchService implements ISearchService {
  songsList!: ISong[];
  albumsList!: IAlbum[];
  artistsList!: IArtist[];
  topArtist!: IArtist[];

  async getSearchResults(query: string): Promise<ISearchResult> {
    await this.getSongsByTitle(query);
    await this.getArtistsList(query);
    await this.getAlbumsList(query);

    return {
      songsList: this.songsList,
      artistsList: this.artistsList,
      albumsList: this.albumsList,
      topArtist: this.getTopArtist(),
    };
  }

  async getSongsByTitle(title: string): Promise<void> {
    try {
      const doc = await Song.find({ title: { $regex: title } })
        .limit(4)
        .populate("artists");
      this.songsList = doc;
    } catch (err) {
      console.log("Fetching Songs ERR : ", err);
    }
  }

  async getTop5Albums(): Promise<void> {}

  async getTop5Songs(): Promise<ISong[]> {
    try {
      const docs = await Song.find().populate("artists").limit(5);
      this.songsList = docs;
      return this.songsList;
    } catch (err) {
      console.log("Fetching all songs ERR : ", err);
    }
  }

  async getAlbumsList(query: string): Promise<void> {
    try {
      const doc = await Album.find({ name: { $regex: query } });
      this.albumsList = doc;
    } catch (err) {
      console.log("Fetching Albums ERR : ", err);
    }
  }

  async getArtistsList(query: string): Promise<void> {
    try {
      const doc = await Artist.find({
        $or: [
          { firstName: { $regex: query } },
          { lastName: { $regex: query } },
        ],
      });
      this.artistsList = doc;
    } catch (err) {
      console.log("Fetching Artists ERR : ", err);
    }
  }

  getTopArtist(): IArtist {
    return this.artistsList[0] ?? null;
  }
}
