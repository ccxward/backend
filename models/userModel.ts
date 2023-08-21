import mongoose, { Document, Schema } from 'mongoose';

// Define the user schema
const userSchema = new Schema({
  account_name: String,
  password: String,
},{
  //make sure and get the collection name!!
  collection: 'account',
});

// Create the User model
const UserModel = mongoose.model<UserDocument>('User', userSchema);

// Define the user document type
interface UserDocument extends Document {
  account_name: string;
  password: string;
  // Other user properties...
}

export default UserModel;