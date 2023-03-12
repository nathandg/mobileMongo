import { Request, Response, Router } from "express";

import ConnectionController from "../controllers/connection.controller";
import connectionSchema from "../models/connection.schema";
import { IError } from "../models/routes.types";

const router = Router();
const connectionController = new ConnectionController(connectionSchema);

// Save a new connection
router.post("/", async (req: Request, res: Response) => {
  try {
    const connection = await connectionController.addConnection(req.body);
    res.status(201).send(connection);
  } catch (error: IError | any) {
    res.status(error.status).send(error.message);
  }
});

// Get all connections
router.get("/", async (req: Request, res: Response) => {
  connectionController
    .getConnections()
    .then((connections) => res.status(200).send(connections))
    .catch((error) => {
      console.log(`/connections get error: ${error.message}`);
      res.status(500).send("Internal server error");
    });
});

// Get Databases and Collections from a connection
router.get("/infos", async (req: Request, res: Response) => {
  const connectionInfos = await connectionController.getConnectionInfo(
    req.body.mongoUri
  );
  res.status(200).send(connectionInfos);
});

// Get all documents from a collection
router.get("/documents", async (req: Request, res: Response) => {
  const { mongoUri, database, collection } = req.body;

  try {
    const documents = await connectionController.listDocumentsFromCollection(
      mongoUri,
      database,
      collection
    );
    res.status(200).send(documents);
  } catch (error: IError | any) {
    res.status(error.status).send(error.message);
  }
});

export { router };
