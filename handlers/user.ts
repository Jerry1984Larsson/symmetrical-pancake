import { addUser } from "../data/users";

export function signup(req: any, res: any): any {
  const { username, password } = req.body;
  if (!username?.trim() || !password?.trim()) {
    return res.status(400).send("Bad username or password");
  }
  addUser({ username, password, userId: "" });
  res.status(201).send("User created");
}
