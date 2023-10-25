import UserService from "@/services/userService";

// To connect with DB;
export async function GET(req: Request) {
  try {
    new UserService();
    return new Response(JSON.stringify({ res: "DB Connected", err: "" }));
  } catch (err) {
    return new Response(
      JSON.stringify({ res: "", err: `DB connection ERR : ${err}` })
    );
  }
}
