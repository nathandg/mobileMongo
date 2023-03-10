import mongoose, { Connection } from "mongoose";
import { environment } from "./app";

type MongooseConnection = Connection

const connectDB = async (isTest: boolean): Promise<MongooseConnection> => {
  
  const MONGO_URI = isTest ? environment.MONGO_URI_TEST : environment.MONGO_URI;

  try {
    const connection = await mongoose.connect(MONGO_URI, {});
    console.log(`MongoDB Connected: ${connection.connection.host}`)
    return connection.connection;
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;