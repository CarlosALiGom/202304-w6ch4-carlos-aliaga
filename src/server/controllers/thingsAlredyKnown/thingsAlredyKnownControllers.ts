import { type Request, type Response } from "express-serve-static-core";
import thingsAlredyKnown from "../../../data/thingsIAlredyKnow.js";

export const getThingsAlredyKnown = (req: Request, res: Response) => {
  res.status(200).json({ thingsAlredyKnown });
};

export const responseNotFound = (req: Request, res: Response) => {
  res.status(404).json({ message: "Not found" });
};
