import express from "express";
import bodyParser from "body-parser";

const app = express();
console.log(app.get("env"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello world");
  console.log("Hello world");
});
