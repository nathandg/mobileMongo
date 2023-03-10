import { Document, Model, model, Schema } from "mongoose";

import Connection from "./connection.model";

const connectionsSchema: Schema = new Schema<Connection>({
  name: { type: String, required: true },
  mongoUri: { type: String, required: true },
  isFavorite: { type: Boolean, required: true },
});

export interface ConnectionDocument extends Connection, Document {}
export type TypeConnectionModel = Model<ConnectionDocument>;

export default model<Connection & Document>("Connection", connectionsSchema);
