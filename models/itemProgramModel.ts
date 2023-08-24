import mongoose, { Document, Schema } from 'mongoose';

// Define the itemProgram document type
interface itemProgramDocument extends Document {
  item: string,
  item_title: string,
  item_fname: string,
  item_lname: string,
  item_description: string,
  item_link: string, 
}

//connecting to the mongoDB collection 'program'
const programConnection = mongoose.createConnection(process.env.MONGODB_URI as string, { dbName: 'program' });

// Define the itemProgram schema
const itemProgramSchema = new Schema({
  item: String,
  item_title: String,
  item_fname: String,
  item_lname: String,
  item_description: String,
  item_link: String, 
 },{
  //make sure and get the collection name!!
  collection: 'item',
});

// Create the itemProgram model and connect to the 'item' collection in mongoDB
const ItemProgramModel = programConnection.model<itemProgramDocument>('itemProgram', itemProgramSchema, 'item');

export default ItemProgramModel;