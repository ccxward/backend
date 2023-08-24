"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
//connecting to the mongoDB collection 'program'
const programConnection = mongoose_1.default.createConnection(process.env.MONGODB_URI, { dbName: 'program' });
// Define the itemProgram schema
const itemProgramSchema = new mongoose_1.Schema({
    item: String,
    item_title: String,
    item_fname: String,
    item_lname: String,
    item_description: String,
    item_link: String,
}, {
    //make sure and get the collection name!!
    collection: 'item',
});
// Create the itemProgram model and connect to the 'item' collection in mongoDB
const ItemProgramModel = programConnection.model('itemProgram', itemProgramSchema, 'item');
exports.default = ItemProgramModel;
