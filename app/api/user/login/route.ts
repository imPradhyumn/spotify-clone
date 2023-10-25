import UserService, { IUserService } from "@/services/userService";
import { cookies } from "next/headers";
import { LOGIN_COOKIE } from "@/constants";

interface LoginCredentials {
  email: string;
  password: string;
}

export async function GET(req: Request) {
  const userService: IUserService = new UserService();
  const isAuthenticated: boolean = userService.getAuthenticationStatus();
  return new Response(JSON.stringify({ isAuthenticated }));
}

export async function POST(req: Request) {
  const data = await req.json();
  const cookieStore = cookies();
  const userService: IUserService = new UserService();

  const { email, password }: LoginCredentials = data;
  const isAuthenticated: boolean = await userService.authenticate(
    email,
    password
  );

  if (isAuthenticated) {
    cookieStore.set({
      name: LOGIN_COOKIE,
      value: "IAmAwesome",
      path: "/",
    });
  }
  return new Response(JSON.stringify({ isAuthenticated: false }));
}
