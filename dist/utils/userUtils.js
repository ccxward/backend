"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserFromDatabase = exports.getAllUsersFromDatabase = exports.getAccountNamesFromDatabase = exports.getUserDataFromDatabase = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
async function getUserDataFromDatabase(account_name) {
    try {
        const user_data = await userModel_1.default.findOne({ account_name });
        return user_data;
    }
    catch (error) {
        console.error('Error retrieving user data:', error);
        throw error;
    }
}
exports.getUserDataFromDatabase = getUserDataFromDatabase;
async function getAccountNamesFromDatabase() {
    try {
        const accountNames = await userModel_1.default.find().distinct('account_name');
        return accountNames; // An array of account names
    }
    catch (error) {
        console.error('Error retrieving account names from database:', error);
        throw error;
    }
}
exports.getAccountNamesFromDatabase = getAccountNamesFromDatabase;
async function getAllUsersFromDatabase() {
    try {
        const users = await userModel_1.default.find();
        const usersWithoutHashedPasswords = users.map(user => ({
            account_name: user.account_name,
            password: user.password,
        }));
        return usersWithoutHashedPasswords;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllUsersFromDatabase = getAllUsersFromDatabase;
async function deleteUserFromDatabase(accountName) {
    try {
        const result = await userModel_1.default.deleteOne({ account_name: accountName });
        return result.deletedCount > 0; // Returns true if a user was deleted, false otherwise
    }
    catch (error) {
        console.error('Error deleting user from database:', error);
        throw error;
    }
}
exports.deleteUserFromDatabase = deleteUserFromDatabase;
