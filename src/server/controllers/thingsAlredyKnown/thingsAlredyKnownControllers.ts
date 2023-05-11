import { type Request, type Response } from "express-serve-static-core";
import thingsAlredyKnown from "../../../data/thingsIAlredyKnow.js";

export const getThingsAlredyKnown = (req: Request, res: Response) => {
  res.status(200).json({ thingsAlredyKnown });
};

export const responseNotFound = (req: Request, res: Response) => {
  res.status(404).json({ message: "Not found" });
};

export const getThing = (req: Request, res: Response) => {
  const { id } = req.params;
  const selectedThing = thingsAlredyKnown.find((thing) => thing.id === id);

  res.status(200).json({ selectedThing });
};
