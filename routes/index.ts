import express from 'express';
import userRouter from './userRoutes'
import programRouter from './programRoutes'


const router = express.Router();

router.use('/user', userRouter);
router.use('/program', programRouter);


export default router;


