import UserService from "@/services/userService";

export async function POST(req: Request) {
  const { searchParams: params } = new URL(req.url);
  const data = await req.json();
  return new Response("This is a POST request");
}
