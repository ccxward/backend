
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('Connected to MongoDB cluster. Hooray!');
  } catch (error) {
    console.error('Error connecting to MongoDB cluster:', error);
  }
};

export default connectDB;