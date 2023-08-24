import mongoose, { Document, Schema } from 'mongoose';

// Define the staticProgram document type
interface staticProgramDocument extends Document {
  preside_title: string,
  preside_fname: string,
  preside_lname: string,
  conduct_title: string,
  conduct_fname: string,
  conduct_lname: string,
  chorister_title: string,
  chorister_fname: string,
  chorister_lname: string,
  organ_title: string,
  organ_fname: string,
  organ_lname: string,
  open_hymn: string,
  open_hymn_link: string,
  invocation_title: string,
  invocation_fname: string,
  invocation_lname: string,
  sac_hymn: string,
  sac_hymn_link: string,
  special_program: string,
  close_hymn: string,
  close_hymn_link: string,
  benediction_title: string,
  benediction_fname: string,
  benediction_lname: string,

}

//connecting to the mongoDB collection 'program'
const programConnection = mongoose.createConnection(process.env.MONGODB_URI as string, { dbName: 'program' });

// Define the staticProgram schema
const staticProgramSchema = new Schema({
  preside_title: String,
  preside_fname: String,
  preside_lname: String,
  conduct_title: String,
  conduct_fname: String,
  conduct_lname: String,
  chorister_title: String,
  chorister_fname: String,
  chorister_lname: String,
  organ_title: String,
  organ_fname: String,
  organ_lname: String,
  open_hymn: String,
  open_hymn_link: String,
  invocation_title: String,
  invocation_fname: String,
  invocation_lname: String,
  sac_hymn: String,
  sac_hymn_link: String,
  special_program: String,
  close_hymn: String,
  close_hymn_link: String,
  benediction_title: String,
  benediction_fname: String,
  benediction_lname: String,
 },{
  //make sure and get the collection name!!
  collection: 'static',
});

// Create the staticProgram model and connect to the 'static' collection in mongoDB
const StaticProgramModel = programConnection.model<staticProgramDocument>('StaticProgram', staticProgramSchema, 'static');

export default StaticProgramModel;