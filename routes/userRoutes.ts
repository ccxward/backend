import express from 'express';
import { loginUser, addNewUser, deleteUser, getAllUsers, checkAccountExists } from '../controllers/userController';

const userRouter = express.Router();

userRouter.post('/login', loginUser);
userRouter.post('/add_user', addNewUser);
userRouter.delete('/delete_user/:account_name', deleteUser);
userRouter.get('/get_all_users', getAllUsers);
userRouter.get('/check_account_exists/:account_name', checkAccountExists)

export default userRouter;