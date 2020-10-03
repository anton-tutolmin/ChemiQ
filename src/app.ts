import dotev from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import pino from "pino";
import passport from "passport";
import { apiRouter } from "./routers/api.router";

dotev.config();

const logger = pino();

const PORT = process.env.PORT;

const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());

app.use(async (req, res, next) => {
  logger.info(`[REQUEST] URL:${req.url}"}`);
  await next();
});

app.use(apiRouter);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  logger.info(`[SERVER]: server is running on http://localhost:${PORT}`);
});
