import express from "express";
import bodyParser from "body-parser";
import pino from "pino";
import { apiRouter } from "./routers/api.router";

const logger = pino();

const PORT = 8080;

const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(apiRouter);

app.listen(PORT, () => {
  logger.info(`[SERVER]: server is running on http://localhost:${PORT}`);
});
