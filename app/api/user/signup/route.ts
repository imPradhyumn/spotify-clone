import UserService, { IUserService } from "@/services/userService";
import { IUser } from "@/db/models/UserModel";

export async function POST(req: Request) {
  const { searchParams: params } = new URL(req.url);
  const data = await req.json();
  const { name, email, password } = data;

  const userService: IUserService = new UserService();
  const user: IUser = userService.createUser(name, email, password);

  user
    .save()
    .then((res) => console.log("User Signed Up"))
    .catch((err) => console.log("Signed Up Failed\nERR : ", err));

  return new Response("This is a POST request");
}
