import { Request, Response } from 'express';
import StaticProgramModel from '../models/staticProgramModel';
import ItemProgramModel from '../models/itemProgramModel';
import { getStaticProgramFromDatabase, getAllItemsFromDatabase, deleteItemFromDatabase } from '../utils/programUtils';

async function getStaticProgram(req: Request, res: Response) { 
  try {
    const staticProgram = await getStaticProgramFromDatabase(); 
    return res.json(staticProgram);
  } catch (error) {
    console.error('Error retrieving the static program:', error);
    return res.status(500).json({ message: 'An error occurred while retrieving the static program' });
  }
};

async function createStaticProgram(req: Request, res: Response) { 
 const{ 
  preside_title,
  preside_fname,
  preside_lname,
  conduct_title,
  conduct_fname,
  conduct_lname,
  chorister_title,
  chorister_fname,
  chorister_lname,
  organ_title,
  organ_fname,
  organ_lname,
  open_hymn,
  open_hymn_link,
  invocation_title,
  invocation_fname,
  invocation_lname,
  sac_hymn,
  sac_hymn_link,
  special_program,
  close_hymn,
  close_hymn_link,
  benediction_title,
  benediction_fname,
  benediction_lname,} = req.body;


 
  try {

    // Create a new static Program  
    const newStaticProgram = new StaticProgramModel({
  preside_title,
  preside_fname,
  preside_lname,
  conduct_title,
  conduct_fname,
  conduct_lname,
  chorister_title,
  chorister_fname,
  chorister_lname,
  organ_title,
  organ_fname,
  organ_lname,
  open_hymn,
  open_hymn_link,
  invocation_title,
  invocation_fname,
  invocation_lname,
  sac_hymn,
  sac_hymn_link,
  special_program,
  close_hymn,
  close_hymn_link,
  benediction_title,
  benediction_fname,
  benediction_lname,
    });

    // Save the new staticProgram info to the database
    await newStaticProgram.save();

    return res.status(201).json({ message: 'Static Program successfully added. ProgramID: ', programId: newStaticProgram._id });
  } catch (error) {
    console.error('Error adding static program:', error);
    return res.status(500).json({ message: 'An error occurred while adding static program' });
  }
};

async function modifyStaticProgram(req: Request, res: Response) { 
 const{ 
  preside_title,
  preside_fname,
  preside_lname,
  conduct_title,
  conduct_fname,
  conduct_lname,
  chorister_title,
  chorister_fname,
  chorister_lname,
  organ_title,
  organ_fname,
  organ_lname,
  open_hymn,
  open_hymn_link,
  invocation_title,
  invocation_fname,
  invocation_lname,
  sac_hymn,
  sac_hymn_link,
  special_program,
  close_hymn,
  close_hymn_link,
  benediction_title,
  benediction_fname,
  benediction_lname,} = req.body;


   const programId = req.params._id;
   try{
        // Find the existing program by its ID
    const existingProgram = await StaticProgramModel.findById(programId);

    if (!existingProgram) {
      return res.status(404).json({ message: 'Program not found' });
    }
existingProgram.preside_title = preside_title;
existingProgram.preside_fname = preside_fname;
existingProgram.preside_lname = preside_lname;
existingProgram.conduct_title = conduct_title;
existingProgram.conduct_fname = conduct_fname;
existingProgram.conduct_lname = conduct_lname;
existingProgram.chorister_title = chorister_title;
existingProgram.chorister_fname = chorister_fname;
existingProgram.chorister_lname = chorister_lname;
existingProgram.organ_title = organ_title;
existingProgram.organ_fname = organ_fname;
existingProgram.organ_lname = organ_lname;
existingProgram.open_hymn = open_hymn;
existingProgram.open_hymn_link = open_hymn_link;
existingProgram.invocation_title = invocation_title;
existingProgram.invocation_fname = invocation_fname;
existingProgram.invocation_lname = invocation_lname;
existingProgram.sac_hymn = sac_hymn;
existingProgram.sac_hymn_link = sac_hymn_link;
existingProgram.special_program = special_program;
existingProgram.close_hymn = close_hymn;
existingProgram.close_hymn_link = close_hymn_link;
existingProgram.benediction_title = benediction_title;
existingProgram.benediction_fname = benediction_fname;
existingProgram.benediction_lname = benediction_lname;

        // Save the modified program
    await existingProgram.save();

    return res.status(200).json({ message: 'Static Program successfully modified' });
  } catch (error) {
    console.error('Error modifying static program:', error);
    return res.status(500).json({ message: 'An error occurred while modifying static program' });
  }
}


async function addItemProgram(req: Request, res: Response) { 
 const{ 
    item,
  item_title,
  item_fname,
  item_lname,
  item_description,
  item_link, } = req.body; 
  try {

    // Create a new item for the Program  
    const newItemProgram = new ItemProgramModel({
     item,
  item_title,
  item_fname,
  item_lname,
  item_description,
  item_link,
    });

    // Save the new ItemProgram info to the database
    await newItemProgram.save();

    return res.status(201).json({ message: 'Item for the Program successfully added. ProgramID: ', programId: newItemProgram._id });
  } catch (error) {
    console.error('Error adding item to the program:', error);
    return res.status(500).json({ message: 'An error occurred while adding item to the program' });
  }
};

async function modifyItemProgram(req: Request, res: Response) { 
 const{ 
  item,
  item_title,
  item_fname,
  item_lname,
  item_description,
  item_link,} = req.body;

   const itemId = req.params._id;
   try{
        // Find the existing item by its ID
    const existingItem = await ItemProgramModel.findById(itemId);

    if (!existingItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
existingItem.item = item;
existingItem.item_title = item_title;
existingItem.item_fname = item_fname;
existingItem.item_lname = item_lname;
existingItem.item_description = item_description;
existingItem.item_link = item_link;
        // Save the modified item
    await existingItem.save();

    return res.status(200).json({ message: 'Program Item successfully modified' });
  } catch (error) {
    console.error('Error modifying item for the program:', error);
    return res.status(500).json({ message: 'An error occurred while modifying item for the program' });
  }
}


async function getAllItems(req: Request, res: Response) { 
  try {
    const items = await getAllItemsFromDatabase(); 
    return res.json(items);
  } catch (error) {
    console.error('Error retrieving items:', error);
    return res.status(500).json({ message: 'An error occurred while retrieving items' });
  }
};


async function deleteItem(req: Request, res: Response) {

  const itemId = req.params._id;

  try {
    // Delete item based on ID
    const result = await deleteItemFromDatabase(itemId);
    if (result) {
      return res.json({ message: 'Item deleted successfully' });
    } else {
      return res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    console.error('Error deleting Item:', error);
    return res.status(500).json({ message: 'An error occurred while deleting item' });
  }
}

async function updateAllItems(req: Request, res: Response) {
  try{

    // Delete all existing items
    await ItemProgramModel.deleteMany({});

     // Add new items from the request body
    const newItems = req.body;
    await ItemProgramModel.insertMany(newItems);
    return res.status(200).json({ message: 'Items updated successfully' });
  }catch(error){
    console.error('Error updating items:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }

}

export {createStaticProgram, modifyStaticProgram, getStaticProgram, addItemProgram, modifyItemProgram, getAllItems, deleteItem, updateAllItems};
