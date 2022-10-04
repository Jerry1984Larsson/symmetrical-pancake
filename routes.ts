import { login } from "./handlers/auth";
import { home } from "./handlers/home";
import { signup } from "./handlers/user";
import { requestLogger } from "./middleware/requestLogger";
import { Route } from "./types";

enum Method {
  GET = "get",
  HEAD = "head",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
  CONNECT = "connect",
  OPTIONS = "options",
  TRACE = "trace",
  PATCH = "patch",
}

export const routes: Route[] = [
  {
    method: Method.GET,
    path: "/",
    middleware: [],
    handler: home,
  },
  {
    method: Method.POST,
    path: "/users",
    middleware: [],
    handler: signup,
  },
  {
    method: Method.POST,
    path: "/login",
    middleware: [requestLogger],
    handler: login,
  },
];
