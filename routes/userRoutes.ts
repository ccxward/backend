import express from 'express';
import { loginUser, addNewUser, deleteUser, getAllUsers, modifyPassword } from '../controllers/userController';

const userRouter = express.Router();

userRouter.post('/login', loginUser);
userRouter.post('/add_user', addNewUser);
userRouter.delete('/delete_user/:account_name', deleteUser);
userRouter.get('/get_all_users', getAllUsers);
userRouter.put('/modify_password/:account_name', modifyPassword)

export default userRouter;