import ConnectionController from "../../src/controllers/connection.controller";
import { IConnection } from "../../src/models/connection.model";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import connectionSchema from "../../src/models/connection.schema";
import { IError } from "../../src/models/routes.types";

describe("Connection Controller", () => {

  let connectionController: ConnectionController;
  let connection: IConnection;
  let mongoServer: MongoMemoryServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri(), {});
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  beforeEach(() => {
    connectionController = new ConnectionController(
      mongoose.model("Connection", connectionSchema.schema)
    );

    connection = {
      name: "Test Connection",
      mongoUri: mongoServer.getUri(),
      isFavorite: false,
      userId: "123",
    };
  });

  afterEach(async () => {
    await mongoose.connection.db.dropDatabase();
  });

  describe("addConnection", () => {

      it("should create a connection", async () => {
        const result = await connectionController.addConnection(connection);
        expect(result.mongoUri).toEqual(connection.mongoUri);
        expect(result.name).toEqual(connection.name);
        expect(result.isFavorite).toEqual(connection.isFavorite);
        expect(result.userId).toEqual(connection.userId);
      });
    
      it("should throw an error if mongoUri is missing", async () => {
        connection.mongoUri = "";
        await expect(connectionController.addConnection(connection)).rejects.toEqual({
          status: 422,
          message: "Invalid mongo uri, must start with \"mongodb+srv://\" or \"mongodb://",
        });
      });
    
      it("should throw an error if name is missing", async () => {
      connection.name = "";
      await expect(connectionController.addConnection(connection)).rejects.toEqual({
        status: 422,
        message: "name is a required field",
      });
    });
    
    it("should throw an error if userId is missing", async () => {
      connection.userId = "";
      await expect(connectionController.addConnection(connection)).rejects.toEqual({
        status: 422,
        message: "userId is a required field",
      });
    });
  
    it("if should isFavorite is missing, then is false", async () => {
      connection.isFavorite = undefined;
      const result = await connectionController.addConnection(connection);
      expect(result.isFavorite).toEqual(false);
    });

    it("should throw an error if name already exists", async () => {
      await connectionController.addConnection(connection);
      await expect(connectionController.addConnection(connection)).rejects.toEqual({
        status: 409,
        message: "Connection already exists",
      });
    });
    
    it("should throw an error if mongoUri already exists", async () => {
      await connectionController.addConnection(connection);
      await expect(connectionController.addConnection(connection)).rejects.toEqual({
        status: 409,
        message: "Connection already exists",
      });
    });
    
    it("should throw an error if mongoUri is invalid", async () => {
      connection.mongoUri = "invalid";
      await expect(connectionController.addConnection(connection)).rejects.toEqual({
        status: 422,
        message: "Invalid mongo uri, must start with \"mongodb+srv://\" or \"mongodb://",
      });
    });
   
  });

  describe("getConnections", () => {

    it("should return an empty array if no connections", async () => {
      const result = await connectionController.getConnections();
      expect(result).toEqual([]);
    });

    it("should return an array of connections", async () => {
      await connectionController.addConnection(connection);
      connection.name = "Test Connection 2";
      connection.mongoUri = "mongodb://localhost:27017/test2";
      await connectionController.addConnection(connection);

      const result = await connectionController.getConnections();
      expect(result.length).toEqual(2);
      expect(result[0].name).toEqual("Test Connection");
      expect(result[1].name).toEqual("Test Connection 2");
      expect(result[0].mongoUri).toEqual(mongoServer.getUri());
      expect(result[1].mongoUri).toEqual("mongodb://localhost:27017/test2");
      expect(result[0].isFavorite).toEqual(connection.isFavorite);
      expect(result[1].isFavorite).toEqual(connection.isFavorite);
      expect(result[0].userId).toEqual(connection.userId);
      expect(result[1].userId).toEqual(connection.userId);
    });
  });

  describe("getConnectionInfo", () => {

    it("should insert a invalid connection mongo uri", async () => {
      await expect(connectionController.getConnectionInfo("invalid")).rejects.toEqual({
        status: 422,
        message: "Invalid mongo uri, must start with \"mongodb+srv://\" or \"mongodb://",
      });
    });

    it("should return a connection", async () => {
      await connectionController.addConnection(connection);
      const result = await connectionController.getConnectionInfo(mongoServer.getUri());
      expect(result[3].dataBase).toEqual("test");
      expect(result[3].collections).toEqual(['connections']);
    });
  });

});


