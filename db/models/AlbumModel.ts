import { Schema, model, InferSchemaType, models } from "mongoose";
// import { ISong } from "./SongModel";

export interface IAlbum extends Document {
  id: Schema.Types.ObjectId;
  name: string;
  imgPath: string;
}

// Schema
const albumSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },

  imgPath: {
    type: String,
    required: true,
    lowercase: true,
  },
});

// Model
export const AlbumModel = models.Album || model<IAlbum>("Album", albumSchema);
