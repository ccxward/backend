import StaticProgramModel from "../models/staticProgramModel";
import ItemProgramModel from "../models/itemProgramModel";


async function getStaticProgramFromDatabase() {
  try {
    const staticProgram = await StaticProgramModel.find();   
    return staticProgram;
  } catch (error) {
    throw error;
  }
}

async function getAllItemsFromDatabase() {
  try {
    const item = await ItemProgramModel.find();   
    return item;
  } catch (error) {
    throw error;
  }
}

async function deleteItemFromDatabase(itemId: string): Promise<boolean> {
  try {
    const result = await ItemProgramModel.deleteOne({ _id: itemId});
    return result.deletedCount > 0; // Returns true if a item was deleted, false otherwise
  } catch (error) {
    console.error('Error deleting item from database:', error);
    throw error;
  }
}

export{getStaticProgramFromDatabase, getAllItemsFromDatabase, deleteItemFromDatabase};