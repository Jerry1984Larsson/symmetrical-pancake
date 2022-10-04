import express from "express";
import bodyParser from "body-parser";
import { routes } from "./routes";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello world-index");
});

app.post("/users", (req, res) => {
  const { username, password } = req.body;
  if (!username?.trim() || !password?.trim()) {
    return res.status(400).send("Bad username or password");
  }
  // addUser({ username, password, userId: "" });
  // res.status(201).send("User created");
});

// app.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   const found = getUser({ username, password, userId: "" });
//   if (!found) {
//     return res.status(401).send("Login failed");
//   }
//   res.status(200).send("Success");
// });

routes.forEach((route) => {
  const { method, path, middleware, handler } = route;
  app[method](path, ...middleware, handler);
});

app.listen(PORT, () => {
  console.log(`Express with Typescript! http://localhost:${PORT}`);
});
