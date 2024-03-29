// src/index.js
import express, { Express, Request, Response, json } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

//app.use(json);

app.get("/", (req: Request, res: Response) => {
  res.send({"output":"Express + TypeScript Server"});
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});