import Connection from "../models/connection.model";
import { TypeConnectionModel } from "../models/connection.schema";

class ConnectionController {
  private connections: Connection[] = [];

  constructor(private connectionModel: TypeConnectionModel) {}

  public async addConnection(connection: Connection): Promise<Connection> {
    const newConnection = new this.connectionModel(connection);
    try {
      await newConnection.save();
    } catch (error) {
      console.log(error);
    }

    return connection;
  }

  public getConnections(): Connection[] {
    return this.connections;
  }
}

export default ConnectionController;
