import { connect, ConnectOptions } from "mongoose";

interface IConnectOptions extends ConnectOptions {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
}

const connectOptions: IConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connection = { isConnected: false };

const dbConnect = async () => {
  const dbUrl: string = process.env.DB_URL || "";

  if (connection.isConnected) return;

  try {
    const response = await connect(dbUrl, connectOptions);
    connection.isConnected = true;
    console.log("Database connected succesfully!!");
  } catch (err) {
    console.log("Database connection failed\n ", err);
    connection.isConnected = false;
  }
};

export default dbConnect;
