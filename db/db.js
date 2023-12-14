import mongoose from "mongoose";
import mongo_uri from "../config/config.js";


const connectDB = async () => {
  try {
    await mongoose.connect(mongo_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
}
connectDB()


export default connectDB;