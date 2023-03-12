import { Request, Response, Router } from "express";
import UserController from "../controllers/user.controller";

const router = Router();
const userController = new UserController();

router.post("/", (req: Request, res: Response) => {
  //! TODO: Validate request body
  const user = userController.addUser(req.body);
  res.status(201).send(user);
});

router.get("/", (req: Request, res: Response) => {
  const users = userController.getUsers();
  res.status(200).send(users);
});

export { router };
