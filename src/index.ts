import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import app from "./server/index.js";
import morgan from "morgan";
import {
  getThingsAlredyKnown,
  responseNotFound,
} from "./server/controllers/thingsAlredyKnown/thingsAlredyKnownControllers.js";

const port = process.env.PORT ?? 4000;

app.use(express.json());

app.use(morgan("dev"));

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

app.get("/things", getThingsAlredyKnown);

app.use(responseNotFound);
