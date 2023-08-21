import UserModel from '../models/userModel';

async function getUserDataFromDatabase(account_name: string): Promise<any> {
  try {
    const user_data = await UserModel.findOne({ account_name });
    return user_data; 
  } catch (error) {
    console.error('Error retrieving user data:', error);
    throw error;
  }
}

async function getAccountNamesFromDatabase(): Promise<string[]> {
  try {
    const accountNames = await UserModel.find().distinct('account_name');
    return accountNames; // An array of account names
  } catch (error) {
    console.error('Error retrieving account names from database:', error);
    throw error;
  }
}


async function getAllUsersFromDatabase() {
  try {
    const users = await UserModel.find();
   const usersWithoutHashedPasswords = users.map(user => ({
      account_name: user.account_name,
      password: user.password, 
    }));
    return usersWithoutHashedPasswords;
  } catch (error) {
    throw error;
  }
}

async function deleteUserFromDatabase(accountName: string): Promise<boolean> {
  try {
    const result = await UserModel.deleteOne({ account_name: accountName });
    return result.deletedCount > 0; // Returns true if a user was deleted, false otherwise
  } catch (error) {
    console.error('Error deleting user from database:', error);
    throw error;
  }
}


export { getUserDataFromDatabase, getAccountNamesFromDatabase, getAllUsersFromDatabase, deleteUserFromDatabase};