import mongoose, { Connection } from "mongoose";
import { environment } from "./app";

type MongooseConnection = Connection;

const connectDB = async (): Promise<MongooseConnection> => {
  try {
    const connection = await mongoose.connect(environment.MONGO_URI, {});
    console.log(`MongoDB Connected: ${connection.connection.host}`);
    return connection.connection;
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
