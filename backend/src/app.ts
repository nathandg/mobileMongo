import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import { load } from 'ts-dotenv';

import { router as userRoutes } from './routes/user.routes';
import { router as connectionRoutes } from './routes/connection.routes';

const app: Application = express();

// -------- ENVIRONMENT --------
export const environment = load({
  MONGO_URI: String,
  MONGO_URI_TEST: String,
  PORT: Number,
});

// -------- MIDDLEWARE --------
app.use(cors());
app.use(bodyParser.json());


// -------- ROUTES --------
app.use("/users", userRoutes);
app.use("/connections", connectionRoutes);

export default app;