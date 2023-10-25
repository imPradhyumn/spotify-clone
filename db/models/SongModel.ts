import { Schema, model, InferSchemaType, models } from "mongoose";
// import { IAlbum } from "./AlbumModel";
// import { IArtist } from "./ArtistModel";

// export interface ISong extends Document {
//   id: Schema.Types.ObjectId;
//   title: string;
//   artists: IArtist[];
//   duration: string;
//   album: IAlbum;
//   imgPath: string;
// }

// Schema
export const songSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    lowercase: true,
  },

  artists: [
    {
      type: Schema.Types.ObjectId,
      ref: "Artist",
    },
  ],

  album: {
    type: Schema.Types.ObjectId,
    ref: "Album",
  },

  url: {
    type: String,
    required: true,
  },

  imgPath: {
    type: String,
    required: true,
    lowercase: true,
  },
});

export type ISong = InferSchemaType<typeof songSchema>;

// Pre/Post methods

// Model
export const SongsModel = models.Song || model<ISong>("Song", songSchema);
