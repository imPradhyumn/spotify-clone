import { Schema, model, Document, models } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

// Schema
const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    min: 5,
    max: 12,
  },
});

// Pre/Post methods
// userSchema.pre(
//   "save",
//   async function (this: IUser, next: (err?: Error) => void) {
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(this.password, salt);
//     this.password = hashedPassword;
//     return next();
//   }
// );

// Model
export default models.User || model<IUser>("User", userSchema);
