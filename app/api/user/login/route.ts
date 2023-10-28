import UserService, { IUserService } from "@/services/userService";
import { cookies } from "next/headers";
import { LOGIN_COOKIE, URL_PREFIX } from "@/constants";
import { NextResponse } from "next/server";

interface LoginCredentials {
  email: string;
  password: string;
}

export async function GET(req: Request) {
  console.log("Hello-1", cookies().has(LOGIN_COOKIE));
  return new Response(JSON.stringify({ isAuthenticated: false }));
}

export async function POST(req: Request) {
  const data = await req.json();
  const { email, password }: LoginCredentials = data;

  const userService: IUserService = new UserService();
  const isAuthenticated: boolean = await userService.authenticate(
    email,
    password
  );

  const response = NextResponse.json({ isAuthenticated });

  if (isAuthenticated) {
    response.cookies.set(LOGIN_COOKIE, "iamawesome");
    return response;
  }

  return response;
}
