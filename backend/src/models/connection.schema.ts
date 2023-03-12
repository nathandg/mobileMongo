import { Document, Model, model, Schema } from "mongoose";

import { IConnection } from "./connection.model";

const connectionsSchema: Schema = new Schema<IConnection>({
  name: { type: String, required: true },
  mongoUri: { type: String, required: true },
  isFavorite: { type: Boolean, default: false },
  userId: { type: String, required: true },
});

export interface ConnectionDocument extends IConnection, Document {}
export type TypeConnectionModel = Model<ConnectionDocument>;

export default model<IConnection & Document>("Connection", connectionsSchema);
