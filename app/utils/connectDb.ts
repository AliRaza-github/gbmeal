import mongoose from "mongoose";

const connectDb = async () => {
  try {
    //@ts-ignore
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB is connected.");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    throw new Error("Database connection failed.");
  }
};

export default connectDb;
