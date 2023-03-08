import express from "express";
import data from "./data.mjs";
const app = express();
app.use(express.json());
app.get("/posts", (req, res) => {
  res.send(data.posts);
});
app.get("/users", (req, res) => {
  res.send(data.users);
});
app.get("/home", (req, res) => {
  res.send("<h1> welcome from our application</h1>");
});
// thunder vscode extension
app.post("/users", (req, res) => {
  console.log(req.body);
  //   res.send("<h1> welcome from our application</h1>");
});
app.delete("/users/:id/:radwa", (req, res) => {
  res.send(req.params);
});
app.listen(8000);
