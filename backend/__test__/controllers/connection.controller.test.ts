import ConnectionController from "../../src/controllers/connection.controller";
import { IConnection} from "../../src/models/connection.model";
import { TypeConnectionModel } from "../../src/models/connection.schema";

describe("Connection Controller", () => {
  let connectionController: ConnectionController;
  let connection: IConnection;

  class MockConnectionModel {
    public async save() {
      console.log("Mock save");
      return connection;
    }
  }

  beforeEach(() => {
    connectionController = new ConnectionController(
      MockConnectionModel as TypeConnectionModel
    );

    connection = {
      name: "Test Connection",
      mongoUri: "mongodb://localhost:27017/test",
      isFavorite: false,
      userId: "1234567890",
    };
  });

  it("should add a connection", async () => {
    const saveConnection = await connectionController.addConnection(connection);
    expect(saveConnection).toEqual(connection);
  });

  it("should add a blank name", () => {
    connection.name = "";
    expect(
      connectionController.addConnection(connection)
    ).rejects.toThrowError();
  });

  it("should add a blank mongoUri", () => {
    connection.mongoUri = "";
    expect(
      connectionController.addConnection(connection)
    ).rejects.toThrowError();
  });

  it("should add a blank userId", () => {
    connection.userId = "";
    expect(
      connectionController.addConnection(connection)
    ).rejects.toThrowError();
  });

  
});
