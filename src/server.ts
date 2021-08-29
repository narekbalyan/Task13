import productsRouter from "./routers/products";
import {createConnection} from "typeorm";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config()

const app = express();

createConnection()

app.use(bodyParser.json())

app.use("/", productsRouter);

app.listen(process.env.SERVER_PORT);