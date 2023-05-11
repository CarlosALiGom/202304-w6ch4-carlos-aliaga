import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import app from "./server";

const port = process.env.PORT ?? 4000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
