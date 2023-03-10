import Connection from "../models/connection.model";
import ConnectionModel from "../models/connection.schema";

class ConnectionController {
  private connections: Connection[] = [];

  public async addConnection(connection: Connection): Promise<Connection> {
    const newConnection = new ConnectionModel(connection);
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
