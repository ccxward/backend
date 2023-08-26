import express from 'express';
import { createStaticProgram, modifyStaticProgram, getStaticProgram, addItemProgram, modifyItemProgram, getAllItems, deleteItem , updateAllItems} from '../controllers/programController';

const programRouter = express.Router();

//// --- for the items in the program
programRouter.get('/get_all_items', getAllItems);
programRouter.put('/update_items', updateAllItems);


//// --- for the static-program:
programRouter.get('/get_static_program', getStaticProgram)
programRouter.put('/modify_static_program/:_id', modifyStaticProgram)

////only use in emergencies:
//programRouter.post('/create_static_program', createStaticProgram);

//// I probably won't use these:
// programRouter.post('/add_item', addItemProgram);
// programRouter.put('/modify_item/:_id', modifyItemProgram);
// programRouter.delete('/delete_item/:_id', deleteItem);


export default programRouter;