import UserService from "@/services/userService";

// To connect with DB;
export async function GET(req: Request) {
  try {
    new UserService();
    console.log({ res: "DB Connected", err: "" });
    return new Response(JSON.stringify({ res: "DB Connected", err: "" }));
  } catch (err) {
    console.log({ res: "", err: `DB connection ERR : ${err}` });
    return new Response(
      JSON.stringify({ res: "", err: `DB connection ERR : ${err}` })
    );
  }
}
