import express from 'express';
import { createStaticProgram, modifyStaticProgram, getStaticProgram } from '../controllers/programController';

const programRouter = express.Router();

programRouter.get('/get_static_program', getStaticProgram)
programRouter.put('/modify_static_program/:_id', modifyStaticProgram)

////only use in emergencies:
//programRouter.post('/create_static_program', createStaticProgram);



export default programRouter;