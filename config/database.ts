
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string,{dbName: 'account',});
    console.log('Connected to MongoDB. Hooray!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectDB;