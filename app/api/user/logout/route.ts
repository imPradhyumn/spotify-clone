import UserService, { IUserService } from "@/services/userService";

export async function GET(req: Request) {
  const userService: IUserService = new UserService();
  userService.logout();
  return new Response(JSON.stringify({ isLoggedOut: true }));
}
