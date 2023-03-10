import { Schema, model, Document, Model } from "mongoose";
import Connection from "./connection.model";

const connectionsSchema: Schema = new Schema<Connection>({
  name: { type: String, required: true },
  mongoUri: { type: String, required: true },
  isFavorite: { type: Boolean, required: true },
})


export default model<Connection & Document>("Connection", connectionsSchema);
