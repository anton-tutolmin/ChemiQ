import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import { apiRouter } from './routers/api.router';

const app: express.Application = express();

app.use(async (req, res, next) => {
  try {
    await next();
  } catch (e) {
    res.json({ error: e.message });
  }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());

app.use(apiRouter);

export default app;
