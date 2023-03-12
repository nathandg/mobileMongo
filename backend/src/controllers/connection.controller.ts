import { MongoClient } from "mongodb";
import * as yup from "yup";

import { IConnection, IConnectionInfo } from "../models/connection.model";
import { TypeConnectionModel } from "../models/connection.schema";
import { collectionsFormatFromDb } from "../utils/formatReponseDb";

class ConnectionController {
  constructor(private connectionModel: TypeConnectionModel) {}

  private addConnectionRequest = yup.object().shape({
    name: yup.string().required(),
    mongoUri: yup
      .string()
      .matches(
        /^mongodb\+srv:\/\/|^mongodb:\/\//,
        'Invalid mongo uri, must start with "mongodb+srv://" or "mongodb://'
      )
      .required(),
    isFavorite: yup.boolean(),
    userId: yup.string().required(),
  });

  private listDocumentsRequest = yup.object().shape({
    mongoUri: yup
      .string()
      .matches(
        /^mongodb\+srv:\/\/|^mongodb:\/\//,
        'Invalid mongo uri, must start with "mongodb+srv://" or "mongodb://'
      )
      .required(),
    dataBase: yup.string().required(),
    collection: yup.string().required(),
  });

  public async addConnection(connection: IConnection): Promise<IConnection> {
    try {
      await this.addConnectionRequest.validate(connection);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        console.log(`addConnection yup error: ${error.message}`);
        throw {
          status: 422,
          message: error.message,
        };
      }
    }

    const connectionExists = await this.connectionModel.findOne({
      $or: [{ name: connection.name }, { mongoUri: connection.mongoUri }],
    });

    if (connectionExists) {
      console.log("addConnection already exists error");
      throw {
        status: 409,
        message: "Connection already exists",
      };
    }

    const newConnection = new this.connectionModel(connection);
    try {
      await newConnection.save();
    } catch (error: any) {
      console.log(`addConnection save error: ${error.message}`);
      throw {
        status: 500,
        message: "Internal server error",
      };
    }

    return newConnection;
  }

  public async getConnections(): Promise<IConnection[]> {
    const connections: IConnection[] = [];

    try {
      connections.push(...(await this.connectionModel.find()));
    } catch (error) {
      throw {
        status: 500,
        message: "Internal server error",
      };
    }

    return connections;
  }

  public async getConnectionInfo(
    mongoUri: string
  ): Promise<Array<IConnectionInfo>> {
    //verify if mongoUri has a valid format
    if (!mongoUri.match(/^mongodb\+srv:\/\/|^mongodb:\/\//)) {
      throw {
        status: 422,
        message:
          'Invalid mongo uri, must start with "mongodb+srv://" or "mongodb://',
      };
    }

    try {
      const dataBase = await MongoClient.connect(mongoUri);
      const dataBases = await dataBase.db().admin().listDatabases();

      const connectionInfos: Array<IConnectionInfo> = [];

      for (const database of dataBases.databases) {
        const collections = collectionsFormatFromDb(
          await dataBase.db(database.name).listCollections().toArray()
        );

        connectionInfos.push({
          dataBase: database.name,
          collections: collections,
        });
      }

      dataBase.close();

      return connectionInfos;
    } catch (error) {
      console.log(`getConnectionInfo error: ${error}`);
      throw {
        status: 500,
        message: "Internal server error",
      };
    }
  }

  public async listDocumentsFromCollection(
    mongoUri: string,
    dataBase: string,
    collection: string
  ): Promise<Array<object>> {
    try {
      await this.listDocumentsRequest.validate({
        mongoUri,
        dataBase,
        collection,
      });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        console.log(`listDocumentsFromCollection yup error: ${error.message}`);
        throw {
          status: 422,
          message: error.message,
        };
      }
    }

    try {
      const dataBaseConnection = await (
        await MongoClient.connect(mongoUri)
      ).db(dataBase);
      const documents = await dataBaseConnection
        .collection(collection)
        .find()
        .toArray();
      return documents;
    } catch (error) {
      console.log(`listDocumentsFromCollection error: ${error}`);
      throw {
        status: 500,
        message: "Internal server error",
      };
    }
  }
}

export default ConnectionController;
