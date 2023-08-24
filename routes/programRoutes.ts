import express from 'express';
import { createStaticProgram, modifyStaticProgram, getStaticProgram, addItemProgram, modifyItemProgram, getAllItems, deleteItem } from '../controllers/programController';

const programRouter = express.Router();

//// --- for the items in the program
programRouter.get('/get_all_items', getAllItems);
programRouter.post('/add_item', addItemProgram);
programRouter.put('/modify_item/:_id', modifyItemProgram);
programRouter.delete('/delete_item/:_id', deleteItem);

//// --- for the static-program:
programRouter.get('/get_static_program', getStaticProgram)
programRouter.put('/modify_static_program/:_id', modifyStaticProgram)

////only use in emergencies:
//programRouter.post('/create_static_program', createStaticProgram);



export default programRouter;