import { RequestHandler as Middleware } from "express";

export type User = { username: string; userId: string; password: string };

type Nullable<T> = { [K in keyof T]: T[K] | null };

type DeepNullable<T> = {
  [K in keyof T]: DeepNullable<T[K]> | null;
};

// const nullablePerson: DeepNullable<Person> = {
//   name: 'Daffodil',
//   email: null,
//   age: null,
//   admin: true,
//   dog: {
//     name: 'Fido',
//     age: null,
//   },
// };

// type Method =
//   | "get"
//   | "head"
//   | "post"
//   | "put"
//   | "delete"
//   | "connect"
//   | "options"
//   | "trace"
//   | "patch";

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

export type Handler = (req: any, res: any) => any;

export type Route = {
  method: Method;
  path: string;
  middleware: Middleware[];
  handler: Handler;
};
