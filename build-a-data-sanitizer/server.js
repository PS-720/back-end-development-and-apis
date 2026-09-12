import express from "express";
import { inputCleaner, inputValidator } from "./middleware.js";
const app = express();
app.use(express.urlencoded({ extended: true }));
const port = 3000;

app.get("/", (req, res) => {
    res.redirect("/form");
});

app.get("/form", (req, res) => {
    res.sendFile("index.html", { root: "./public" });
});

app.post("/submit", inputCleaner, inputValidator, (req, res) => {
    res.send({
        username: req.body.username,
        comment: req.body.comment
    });
});

app.listen(port, () => {
    console.log("Server listening on port 3000");
});