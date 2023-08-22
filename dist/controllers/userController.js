"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyPassword = exports.checkAccountExists = exports.deleteUser = exports.addNewUser = exports.loginUser = exports.getAllUsers = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const generateAuthToken_1 = __importDefault(require("../utils/generateAuthToken"));
const userUtils_1 = require("../utils/userUtils");
const userModel_1 = __importDefault(require("../models/userModel"));
async function addNewUser(req, res) {
    const { account_name, password } = req.body;
    try {
        // Check if the account name already exists
        const accountExists = await checkAccountExists(account_name);
        if (accountExists) {
            return res.status(400).json({ message: 'Account name already exists' });
        }
        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt_1.default.hash(password, saltRounds);
        // Create a new user with a hashed password:
        const newUser = new userModel_1.default({
            account_name,
            password: hashedPassword,
        });
        // Save the user to the database
        await newUser.save();
        return res.status(201).json({ message: 'User added successfully' });
    }
    catch (error) {
        console.error('Error adding user:', error);
        return res.status(500).json({ message: 'An error occurred while adding user' });
    }
}
exports.addNewUser = addNewUser;
;
async function loginUser(req, res) {
    const { account_name, password } = req.body;
    try {
        // Retrieve user data from the database
        const user_data = await (0, userUtils_1.getUserDataFromDatabase)(account_name);
        if (!user_data) {
            return res.status(401).json({ message: 'User not found' });
        }
        // Compare the provided password with the stored password hash
        const passwordMatch = await bcrypt_1.default.compare(password, user_data.password);
        if (passwordMatch) {
            // Passwords match, generate authentication token
            const token = (0, generateAuthToken_1.default)(user_data);
            // Send a success response with the token and user information
            return res.json({ message: 'Login successful', token, account_name });
        }
        else {
            // Oops! Passwords do not match
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    }
    catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'An error occurred during login' });
    }
}
exports.loginUser = loginUser;
async function deleteUser(req, res) {
    const { account_name } = req.params;
    try {
        // Delete user based on account name
        const result = await (0, userUtils_1.deleteUserFromDatabase)(account_name);
        if (result) {
            return res.json({ message: 'User deleted successfully' });
        }
        else {
            return res.status(404).json({ message: 'User not found' });
        }
    }
    catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({ message: 'An error occurred while deleting user' });
    }
}
exports.deleteUser = deleteUser;
const getAllUsers = async (req, res) => {
    try {
        const users = await (0, userUtils_1.getAllUsersFromDatabase)();
        return res.json(users);
    }
    catch (error) {
        console.error('Error retrieving users:', error);
        return res.status(500).json({ message: 'An error occurred while retrieving users' });
    }
};
exports.getAllUsers = getAllUsers;
async function checkAccountExists(account_name) {
    try {
        const user_data = await (0, userUtils_1.getUserDataFromDatabase)(account_name);
        return user_data; // Return true if user_data exists, false if not
    }
    catch (error) {
        console.error('Error checking account name:', error);
    }
}
exports.checkAccountExists = checkAccountExists;
async function modifyPassword(req, res) {
    const { account_name } = req.params;
    const { newPassword } = req.body;
    try {
        // Find the user by account_name
        const user = await userModel_1.default.findOne({ account_name });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt_1.default.hash(newPassword, saltRounds);
        user.password = hashedPassword;
        // Save the modified user
        await user.save();
        return res.json({ message: 'Password modified successfully' });
    }
    catch (error) {
        console.error('Error modifying user password:', error);
        return res.status(500).json({ message: 'An error occurred while modifying password' });
    }
}
exports.modifyPassword = modifyPassword;
