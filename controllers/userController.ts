import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import generateAuthToken from '../utils/generateAuthToken';
import { getUserDataFromDatabase, getAllUsersFromDatabase, deleteUserFromDatabase } from '../utils/userUtils';
import UserModel from '../models/userModel'


async function addNewUser(req: Request, res: Response) { 
  const { account_name, password } = req.body;
  try {
    // Check if the account name already exists
    const accountExists = await checkAccountExists(account_name);
if (accountExists) {
      return res.status(400).json({ message: 'Account name already exists' });
    }


    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user with a hashed password:
    const newUser = new UserModel({
      account_name,
      password: hashedPassword, 
    });

    // Save the user to the database
    await newUser.save();

    return res.status(201).json({ message: 'User added successfully' });
  } catch (error) {
    console.error('Error adding user:', error);
    return res.status(500).json({ message: 'An error occurred while adding user' });
  }
};

async function loginUser(req: Request, res: Response) {
  const { account_name, password } = req.body;

  try {

    // Retrieve user data from the database
    const user_data = await getUserDataFromDatabase(account_name);
    if (!user_data) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Compare the provided password with the stored password hash
    const passwordMatch = await bcrypt.compare(password, user_data.password);

    if (passwordMatch) {
      // Passwords match, generate authentication token
      const token = generateAuthToken(user_data);

      // Send a success response with the token and user information
      return res.json({ message: 'Login successful', token, account_name });
    } else {
      // Oops! Passwords do not match
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'An error occurred during login' });
  }
}

async function deleteUser(req: Request, res: Response) {
  const { account_name } = req.params;
  try {
    // Delete user based on account name
    const result = await deleteUserFromDatabase(account_name);
    if (result) {
      return res.json({ message: 'User deleted successfully' });
    } else {
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    return res.status(500).json({ message: 'An error occurred while deleting user' });
  }
}

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsersFromDatabase(); 
    return res.json(users);
  } catch (error) {
    console.error('Error retrieving users:', error);
    return res.status(500).json({ message: 'An error occurred while retrieving users' });
  }
};


async function checkAccountExists(account_name: string) {  
  try {
    const user_data = await getUserDataFromDatabase(account_name);
    return user_data; // Return true if user_data exists, false if not
  } catch (error) {
    console.error('Error checking account name:', error);
  }
}

async function modifyPassword(req: Request, res: Response) {
  const { account_name } = req.params;
  const { newPassword } = req.body;
try {
    // Find the user by account_name
    const user = await UserModel.findOne({ account_name });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
        // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    user.password = hashedPassword

    // Save the modified user
    await user.save();

    return res.json({ message: 'Password modified successfully' });
  } catch (error) {
    console.error('Error modifying user password:', error);
    return res.status(500).json({ message: 'An error occurred while modifying password' });
  }
}



export { loginUser, addNewUser, deleteUser, checkAccountExists, modifyPassword };