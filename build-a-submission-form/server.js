import apiRouter from "./routes/api.routes.js";
import { notFoundHandler } from "./middleware/error.middleware.js";
import { finalErrorHandler } from "./middleware/error.middleware.js";
import express from "express";
const app = express();

app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.url);
    next();
});

app.use("/api", apiRouter)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(notFoundHandler);
app.use(finalErrorHandler);

app.listen(3000, () => {
    console.log("Server listening on " + 'http://localhost:3000');
})