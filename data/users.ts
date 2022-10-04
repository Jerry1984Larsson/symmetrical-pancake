import { User } from "../types";

const users: User[] = [];

export function addUser(user: User) {
  user.userId = (users.length + 1).toString();
  users.push(user);
}
export function getUser(user: User) {
  return users.find(
    (u) => u.username === user.username && u.password === user.password
  );
}
