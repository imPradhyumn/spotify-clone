import User from "../db/models/UserModel";
import { IUser } from "../db/models/UserModel";
import bcrypt from "bcryptjs";
import dbConnect from "@/db/database";
import { cookies } from "next/headers";
import { LOGIN_COOKIE } from "@/constants";

export interface IUserService {
  user: IUser;
  users: IUser[];

  createUser(name: string, email: string, password: string): IUser;
  getUsers(): void;
  getUserById(id: any): void;
  getUserByEmail(emai: string): void;
  authenticate(email: string, password: string): Promise<boolean>;
  getAuthenticationStatus(): boolean;
  logout(): void;
}

class UserService implements IUserService {
  user!: IUser;
  users!: IUser[];

  constructor() {
    dbConnect();
  }

  createUser(name: string, email: string, password: string): IUser {
    const user = new User({
      name,
      email,
      password,
    });
    return user;
  }

  getUsers() {
    User.find({ name: "Pradhyumn" })
      .then((doc) => {
        this.users = doc;
      })
      .catch((err) => console.log("Error : ", err));
  }

  getUserById(id: any) {
    User.findById(id).then((doc) => (this.user = doc));
  }

  async getUserByEmail(email: String) {
    const res = await User.find({ email });
    this.user = res[0];
  }

  async authenticate(email: string, inputPassword: string): Promise<boolean> {
    let isAuthenticated = false;
    await this.getUserByEmail(email);

    const { password: storedPassword } = this.user;
    const res = await bcrypt.compare(inputPassword, storedPassword);

    if (res) return (isAuthenticated = true);
    return isAuthenticated;
  }

  getAuthenticationStatus(): boolean {
    const cookieStore = cookies();
    return cookieStore.has(LOGIN_COOKIE);
  }

  logout(): void {
    cookies().delete(LOGIN_COOKIE);
  }
}

export default UserService;
