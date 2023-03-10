import { Request, Response, Router } from 'express';
import ConnectionController from '../controllers/connection.controller';

const router = Router();
const connectionController = new ConnectionController();

router.post("/", (req: Request, res: Response) => {

  const connection = connectionController.addConnection(req.body);
  res.status(201).send(connection);
});

export { router };