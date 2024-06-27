import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb Connected");
  } catch (error) {
    console.log("Error in connecting MONGODB", error.message);
  }
};

export default connectMongoDB;
