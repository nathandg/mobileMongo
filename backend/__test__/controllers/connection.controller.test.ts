import ConnectionController from "../../src/controllers/connection.controller";
import Connection from "../../src/models/connection.model";

describe("Connection Controller", () => {
  let connectionController: ConnectionController;
  let connection: Connection;
  let mockConnectionModel: any;

  beforeEach(() => {
    mockConnectionModel = jest.fn().mockImplementation((data) => ({
      ...data,
      save: jest.fn().mockResolvedValue(data),
    }));

    connectionController = new ConnectionController(mockConnectionModel);

    connection = {
      name: "Test Connection",
      mongoUri: "mongodb://localhost:27017/test",
      isFavorite: false,
      userId: "1234567890",
    };
  });

  test("should add a connection", async () => {
    
    const saveConnection = await connectionController.addConnection(connection);
    expect(saveConnection).toEqual(connection);

  });
});
