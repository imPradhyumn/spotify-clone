import { LOGIN_COOKIE } from "@/constants";
import { cookies } from "next/headers";

export async function GET(req: Request) {
  const isAuthenticated = cookies().has(LOGIN_COOKIE);
  return new Response(JSON.stringify({ isAuthenticated }));
}
