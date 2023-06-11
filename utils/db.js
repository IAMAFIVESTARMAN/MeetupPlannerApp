import mongoose from "mongoose";

if (!process.env.MONGO) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error("Connection Failed");
  }
};

export default connect;
