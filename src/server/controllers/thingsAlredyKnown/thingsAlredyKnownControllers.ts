import { type Request, type Response } from "express-serve-static-core";
import thingsAlredyKnown from "../../../data/thingsIAlredyKnow.js";
import {
  type ThingsAlredyKnownDataStructure,
  type ThingsAlredyKnownStructure,
} from "../../../types.js";
import crypto from "crypto";

export const getThingsAlredyKnown = (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    ThingsAlredyKnownDataStructure[]
  >,
  res: Response
) => {
  res.status(200).json({ thingsAlredyKnown });
};

export const responseNotFound = (req: Request, res: Response) => {
  res.status(404).json({ message: "Not found" });
};

export const getThing = (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    ThingsAlredyKnownDataStructure
  >,
  res: Response
) => {
  const { idThing } = req.params;
  const selectedThing = thingsAlredyKnown.find((thing) => thing.id === idThing);

  res.status(200).json({ selectedThing });
};

export const deleteThing = (req: Request, res: Response) => {
  const { idThing } = req.params;
  const thingPosition = thingsAlredyKnown.findIndex(
    (thing) => thing.id === idThing
  );
  if (thingPosition === -1) {
    return res.status(404).json({ message: "No student found" });
  }

  thingsAlredyKnown.splice(thingPosition, 1);
  res.status(200).json({ message: "Thing deleted" });
};

export const postThing = (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    ThingsAlredyKnownStructure
  >,
  res: Response
) => {
  const newThingData = req.body;
  const newThing = {
    id: crypto.randomUUID(),
    ...newThingData,
  };

  res.status(201).json({ newThing });
};
