import mongoose, { Schema, model, Document } from "mongoose";

export interface ISong extends Document {
  title: string;
  artists: string[];
  duration: string;
  album?: string;
  imgPath: string;
}

// Schema
const songSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  artists: [
    {
      type: String,
      required: true,
    },
  ],
  album: {
    type: String,
    default: "Unknown",
  },
  imgPath: {
    type: String,
    required: true,
  },
});

// Pre/Post methods

// Model

export default mongoose.models.Song || model<ISong>("Song", songSchema);
