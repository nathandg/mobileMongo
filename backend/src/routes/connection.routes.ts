import { Request, Response, Router } from "express";
import ConnectionController from "../controllers/connection.controller";
import connectionSchema from "../models/connection.schema";

const router = Router();
const connectionController = new ConnectionController(connectionSchema);

router.post("/", async (req: Request, res: Response) => {
  const connection = await connectionController.addConnection(req.body);
  res.status(201).send(connection);
});

router.get("/", async (req: Request, res: Response) => {
  const connections = await connectionController.getConnections();
  res.status(200).send(connections);
});

router.get("/infos", async (req: Request, res: Response) => {
  const connectionInfos = await connectionController.getConnectionInfos(
    req.body.mongoUri
  );
  res.status(200).send(connectionInfos);
});

// router.get("/documents", async (req: Request, res: Response) => {
//   const { mongoUri, database, collection } = req.body;
//   const documents = await connectionController.getDocuments(
//     mongoUri,
//     database,
//     collection
//   );

//   res.status(200).send(documents);
// });

export { router };
