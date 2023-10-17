import UserService, { IUserService } from "@/services/userService";
import { cookies } from "next/headers";
import { LOGIN_COOKIE } from "@/constants";

export async function GET(req: Request) {
  const userService: IUserService = new UserService();
  userService.logout();
  return new Response(JSON.stringify({ isLoggedOut: true }));
}
