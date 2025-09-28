import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const MONGODBURL = process.env.MONGODB_URL;
    const conn = await mongoose.connect(MONGODBURL);
    console.log(`MongoDB connected on ${mongoose.connection.host}`);
  } catch (error) {
    console.log(` MongoDB error: ${error}`);
  }
};

export default connectDB;
