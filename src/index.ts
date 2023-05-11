import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import app from "./server/index.js";
import morgan from "morgan";
import {
  getThingsAlredyKnown,
  responseNotFound,
} from "./server/controllers/thingsAlredyKnown/thingsAlredyKnownControllers.js";
import { type Request, type Response } from "express-serve-static-core";
import thingsAlredyKnown from "./data/thingsIAlredyKnow.js";

const port = process.env.PORT ?? 4000;

app.use(express.json());

app.use(morgan("dev"));

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

app.get("/things", getThingsAlredyKnown);

app.get("/things/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const selectedThing = thingsAlredyKnown.find((thing) => thing.id === id);

  res.status(200).json({ selectedThing });
});

app.use(responseNotFound);
