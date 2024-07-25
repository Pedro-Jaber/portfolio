const dotenv = require("dotenv");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const projectsBegginer = require("./routers/projectsBegginer");

//* Dotenv
dotenv.config();

//* App
const app = express();
const PORT = process.env.PORT || 8081;

//* Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* View Engine
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "layouts/main");

//* Routes
app.use("/projects", projectsBegginer);

app.get(["/", "/home"], (req, res) => {
  res.status(200).render("home", { layout: "../views/layouts/home" });
});

app.get("/status", (req, res) => {
  res.status(200).send("Server is Up");
});

app.get("/cataas", (req, res) => {
  res.status(200).render("cataas");
});

app.get("/capaas", (req, res) => {
  res.status(200).render("capaas");
});

//TODO error 404

app.listen(PORT, () => {
  console.log("Server:\x1b[92m Online \x1b[0m");
  console.log("Port: " + PORT);
  console.log(`link: http://localhost:${PORT}`);
  console.log("->");
});
