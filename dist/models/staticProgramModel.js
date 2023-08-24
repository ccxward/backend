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
// Define the staticProgram schema
const staticProgramSchema = new mongoose_1.Schema({
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
}, {
    //make sure and get the collection name!!
    collection: 'static',
});
// Create the staticProgram model and connect to the 'static' collection in mongoDB
const StaticProgramModel = programConnection.model('StaticProgram', staticProgramSchema, 'static');
exports.default = StaticProgramModel;
