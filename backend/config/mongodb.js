import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("🍃 MongoDB Connected");
  });

  mongoose.connection.on("error", (err) => {
    console.log("❌ MongoDB Error: ", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("⚠️ MongoDB Disconnected");
  });

  await mongoose.connect(`${process.env.MONGODB_URI}/ForeverEcom`);
};

export default connectDB;
