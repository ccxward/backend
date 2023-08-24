"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItemFromDatabase = exports.getAllItemsFromDatabase = exports.getStaticProgramFromDatabase = void 0;
const staticProgramModel_1 = __importDefault(require("../models/staticProgramModel"));
const itemProgramModel_1 = __importDefault(require("../models/itemProgramModel"));
async function getStaticProgramFromDatabase() {
    try {
        const staticProgram = await staticProgramModel_1.default.find();
        return staticProgram;
    }
    catch (error) {
        throw error;
    }
}
exports.getStaticProgramFromDatabase = getStaticProgramFromDatabase;
async function getAllItemsFromDatabase() {
    try {
        const item = await itemProgramModel_1.default.find();
        return item;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllItemsFromDatabase = getAllItemsFromDatabase;
async function deleteItemFromDatabase(itemId) {
    try {
        const result = await itemProgramModel_1.default.deleteOne({ _id: itemId });
        return result.deletedCount > 0; // Returns true if a item was deleted, false otherwise
    }
    catch (error) {
        console.error('Error deleting item from database:', error);
        throw error;
    }
}
exports.deleteItemFromDatabase = deleteItemFromDatabase;
