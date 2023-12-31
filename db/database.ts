import { connect, ConnectOptions, models } from "mongoose";

interface IConnectOptions extends ConnectOptions {
  useNewUrlParser: boolean;
}

const connectOptions: IConnectOptions = {
  useNewUrlParser: true,
};

const connection = { isConnected: false };

const dbConnect = async () => {
  const dbUrl: string = process.env.DB_URL || "";

  if (connection.isConnected) {
    console.log("DB already connected!!");
    return;
  }

  try {
    await connect(dbUrl, connectOptions);
    connection.isConnected = true;
    console.log("Database connected succesfully!!");
  } catch (err) {
    console.log("Database connection failed\n ", err);
    connection.isConnected = false;
  }
};

export default dbConnect;
