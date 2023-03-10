import ConnectionController from "../../src/controllers/connection.controller";
import Connection from "../../src/models/connection.model";
import connectDB from "../../src/db";

describe("Connection Controller", () => {
  let connectionController: ConnectionController;
  let connection: Connection;

  connectDB(true)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error: any) => console.error(error));

  beforeEach(() => {
    connectionController = new ConnectionController();
    connection = {
      name: "Test Connection",
      mongoUri: "mongodb://localhost:27017/test",
      isFavorite: false,
      userId: "1234567890"
    }
  });

  test("should add a connection", async () => {
    const result = await connectionController.addConnection(connection);
    expect(result).toEqual(connection);
    // expect(connectionController.getConnections()).toContain(connection);
  });
});