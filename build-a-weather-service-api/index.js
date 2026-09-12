import express from "express";
import weather from "./weather.js"
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "public", "index.html"));
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/info", (req, res) => {
    res.status(200).json({
        name: "Weather Service API",
        version: "1.0.0",
        endpoints: ["api/weather/:city", "api/greet/:name", "/api/data"],
    });
});

app.get("/api/status", (req, res) => {
    res.status(200).json({
        status: "Pass"
    });
});

app.get("/docs", (req, res) => {
    res.redirect("/api/info");
});

app.get("/api/greet/:name", (req, res) => {
    res.status(200).json({
        Name: req.params.name
    })
});

app.route("/api/data")
    .get((req, res) => {
        res.status(200).json();
    })
    .post((req, res) => {
        res.status(201).json();
    });

app.use("/api/weather", weather)

app.listen(PORT, () => console.log("Server listening"));