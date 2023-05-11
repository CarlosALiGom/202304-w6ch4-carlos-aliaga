import { type Request, type Response } from "express-serve-static-core";
import thingsAlredyKnown from "../../../data/thingsIAlredyKnow.js";
import { type ThingsAlredyKnownStructure } from "../../../types.js";

export const getThingsAlredyKnown = (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    ThingsAlredyKnownStructure[]
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
    ThingsAlredyKnownStructure
  >,
  res: Response
) => {
  const { idThing } = req.params;
  const selectedThing = thingsAlredyKnown.find((thing) => thing.id === idThing);

  res.status(200).json({ selectedThing });
};
