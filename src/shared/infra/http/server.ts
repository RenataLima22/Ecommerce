import "reflect-metadata";
import express from "express";
import "../typeorm";
import "express-async-errors";
import routes from "./routes/index.routes";
import ErrorHandler from "./middlewares/ErrorHandler";

const app = express();

app.use(express.json());

app.use(routes);

app.use(ErrorHandler);

app.listen(3333, () => {
    console.log("🚀 Servidor Iniciado");
});