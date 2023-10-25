import { Schema, model, InferSchemaType, models } from "mongoose";
// import { ISong } from "./SongModel";
// import { IAlbum } from "./AlbumModel";

// export interface IArtist extends Document {
//   id: Schema.Types.ObjectId;
//   name: string;
//   songs: ISong[];
//   albums: IAlbum[];
//   imgPath: string;
// }

// Schema
const artistSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: true,
    lowercase: true,
  },

  lastName: {
    type: String,
    required: true,
    lowercase: true,
  },

  albums: [
    {
      type: Schema.Types.ObjectId,
      ref: "Album",
    },
  ],

  imgPath: {
    type: String,
    required: true,
    lowercase: true,
    default: "",
  },
});

export type IArtist = InferSchemaType<typeof artistSchema>;

// Pre/Post methods

// Model
export const ArtistModel =
  models.Artist || model<IArtist>("Artist", artistSchema);
