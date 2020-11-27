import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import path from 'path';
import { apiRouter } from './routers/api.router';

const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());

app.use(apiRouter);

app.use(express.static(path.join(__dirname, '..', '..', 'public')));

export default app;
