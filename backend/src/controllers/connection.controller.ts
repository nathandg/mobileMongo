import { MongoClient } from "mongodb";
import * as yup from "yup";

import { IConnection, IConnectionInfo } from "../models/connection.model";
import { TypeConnectionModel } from "../models/connection.schema";
import { collectionsFormatFromDb } from "../utils/formatReponseDb";

class ConnectionController {
  constructor(private connectionModel: TypeConnectionModel) {}

  private connectionRequestSchema = yup.object().shape({
    name: yup.string().required(),
    mongoUri: yup.string().required(),
    isFavorite: yup.boolean(),
    userId: yup.string().required(),
  });

  public async addConnection(connection: IConnection): Promise<IConnection> {
    try {
      await this.connectionRequestSchema.validate(connection);
    } catch (error) {
      throw new Error(`Connection validation error: ${error}`);
    }

    const newConnection = new this.connectionModel(connection);
    newConnection
      .save()
      .then((connection) => console.log(`Connection saved: ${connection}`))
      .catch((error) => console.log(`Connection save error: ${error}`));

    return connection;
  }

  public async getConnections(): Promise<IConnection[]> {
    const connections: IConnection[] = [];

    try {
      connections.push(...(await this.connectionModel.find()));
    } catch (error) {
      console.log(error);
    }

    return connections;
  }

  public async getConnectionInfo(
    mongoUri: string
  ): Promise<Array<IConnectionInfo>> {
    console.log(mongoUri);

    try {
      const dataBase = await MongoClient.connect(mongoUri);
      const dataBases = await dataBase.db().admin().listDatabases();

      const connectionInfos: Array<IConnectionInfo> = [];

      for (const database of dataBases.databases) {
        console.log("Running for loop");
        console.log(database);

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
      new Error(`Connection infos error: ${error}`);
    }

    return [];
  }

  public async listDocumentsFromCollection(
    mongoUri: string,
    dataBase: string,
    collection: string
  ): Promise<Array<object>> {
    try {
      const mongoClient = await (
        await MongoClient.connect(mongoUri)
      ).db(dataBase);
      const documents = await mongoClient
        .collection(collection)
        .find()
        .toArray();

      return documents;
    } catch (error) {
      new Error(`List documents error: ${error}`);
    }

    return [];
  }
}

export default ConnectionController;
