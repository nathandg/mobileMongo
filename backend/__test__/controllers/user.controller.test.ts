import UserController from "../../src/controllers/user.controller";
import User from "../../src/models/user.model";

describe("User Controller", () => {
  let userController: UserController;

  beforeEach(() => {
    userController = new UserController();
  });

  it("should add a new user", async () => {
    const user: User = {
      name: "John Doe",
      password: "myPassword",
    };

    const result = await userController.addUser(user);
    expect(result).toEqual(user);
  });

  it("should return all users", async () => {
    const user: User = {
      name: "John Doe",
      password: "myPassword",
    };

    const user2: User = {
      name: "Jane Doe2",
      password: "myPassword",
    };

    await userController.addUser(user);
    await userController.addUser(user2);

    const result = await userController.getUsers();
    expect(result).toEqual([user, user2]);
  });
});
