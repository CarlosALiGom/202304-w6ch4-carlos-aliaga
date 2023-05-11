import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import app from "./server/index.js";
import morgan from "morgan";
import {
  getThing,
  getThingsAlredyKnown,
  responseNotFound,
} from "./server/controllers/thingsAlredyKnown/thingsAlredyKnownControllers.js";
import thingsAlredyKnown from "./data/thingsIAlredyKnow.js";

const port = process.env.PORT ?? 4000;

app.use(express.json());

app.use(morgan("dev"));

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

app.get("/things", getThingsAlredyKnown);

app.get("/things/:idThing", getThing);

app.delete("/things/:id", (req, res) => {
  const { id } = req.params;
  const thingPosition = thingsAlredyKnown.findIndex((thing) => thing.id === id);
  if (thingPosition === -1) {
    return res.status(404).json({ message: "No student found" });
  }

  thingsAlredyKnown.splice(thingPosition, 1);
  res.status(200).json({ message: "Thing deleted" });
});

app.use(responseNotFound);
