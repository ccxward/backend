import mongoose, { Document, Schema } from 'mongoose';

// Define the user document type
interface UserDocument extends Document {
  account_name: string;
  password: string;
}

//connecting to the account database
const userConnection = mongoose.createConnection(process.env.MONGODB_URI as string, {dbName: 'account'} );

// Define the user schema
const userSchema = new Schema({
  account_name: String,
  password: String,
});

// Create the User model ('account' is the name of the collection in mongoDB)
const UserModel = userConnection.model<UserDocument>('User', userSchema, 'account');

export default UserModel;