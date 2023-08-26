"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAllItems = exports.deleteItem = exports.getAllItems = exports.modifyItemProgram = exports.addItemProgram = exports.getStaticProgram = exports.modifyStaticProgram = exports.createStaticProgram = void 0;
const staticProgramModel_1 = __importDefault(require("../models/staticProgramModel"));
const itemProgramModel_1 = __importDefault(require("../models/itemProgramModel"));
const programUtils_1 = require("../utils/programUtils");
async function getStaticProgram(req, res) {
    try {
        const staticProgram = await (0, programUtils_1.getStaticProgramFromDatabase)();
        return res.json(staticProgram);
    }
    catch (error) {
        console.error('Error retrieving the static program:', error);
        return res.status(500).json({ message: 'An error occurred while retrieving the static program' });
    }
}
exports.getStaticProgram = getStaticProgram;
;
async function createStaticProgram(req, res) {
    const { preside_title, preside_fname, preside_lname, conduct_title, conduct_fname, conduct_lname, chorister_title, chorister_fname, chorister_lname, organ_title, organ_fname, organ_lname, open_hymn, open_hymn_link, invocation_title, invocation_fname, invocation_lname, sac_hymn, sac_hymn_link, special_program, close_hymn, close_hymn_link, benediction_title, benediction_fname, benediction_lname, } = req.body;
    try {
        // Create a new static Program  
        const newStaticProgram = new staticProgramModel_1.default({
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
    }
    catch (error) {
        console.error('Error adding static program:', error);
        return res.status(500).json({ message: 'An error occurred while adding static program' });
    }
}
exports.createStaticProgram = createStaticProgram;
;
async function modifyStaticProgram(req, res) {
    const { preside_title, preside_fname, preside_lname, conduct_title, conduct_fname, conduct_lname, chorister_title, chorister_fname, chorister_lname, organ_title, organ_fname, organ_lname, open_hymn, open_hymn_link, invocation_title, invocation_fname, invocation_lname, sac_hymn, sac_hymn_link, special_program, close_hymn, close_hymn_link, benediction_title, benediction_fname, benediction_lname, } = req.body;
    const programId = req.params._id;
    try {
        // Find the existing program by its ID
        const existingProgram = await staticProgramModel_1.default.findById(programId);
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
    }
    catch (error) {
        console.error('Error modifying static program:', error);
        return res.status(500).json({ message: 'An error occurred while modifying static program' });
    }
}
exports.modifyStaticProgram = modifyStaticProgram;
async function addItemProgram(req, res) {
    const { item, item_title, item_fname, item_lname, item_description, item_link, } = req.body;
    try {
        // Create a new item for the Program  
        const newItemProgram = new itemProgramModel_1.default({
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
    }
    catch (error) {
        console.error('Error adding item to the program:', error);
        return res.status(500).json({ message: 'An error occurred while adding item to the program' });
    }
}
exports.addItemProgram = addItemProgram;
;
async function modifyItemProgram(req, res) {
    const { item, item_title, item_fname, item_lname, item_description, item_link, } = req.body;
    const itemId = req.params._id;
    try {
        // Find the existing item by its ID
        const existingItem = await itemProgramModel_1.default.findById(itemId);
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
    }
    catch (error) {
        console.error('Error modifying item for the program:', error);
        return res.status(500).json({ message: 'An error occurred while modifying item for the program' });
    }
}
exports.modifyItemProgram = modifyItemProgram;
async function getAllItems(req, res) {
    try {
        const items = await (0, programUtils_1.getAllItemsFromDatabase)();
        return res.json(items);
    }
    catch (error) {
        console.error('Error retrieving items:', error);
        return res.status(500).json({ message: 'An error occurred while retrieving items' });
    }
}
exports.getAllItems = getAllItems;
;
async function deleteItem(req, res) {
    const itemId = req.params._id;
    try {
        // Delete item based on ID
        const result = await (0, programUtils_1.deleteItemFromDatabase)(itemId);
        if (result) {
            return res.json({ message: 'Item deleted successfully' });
        }
        else {
            return res.status(404).json({ message: 'Item not found' });
        }
    }
    catch (error) {
        console.error('Error deleting Item:', error);
        return res.status(500).json({ message: 'An error occurred while deleting item' });
    }
}
exports.deleteItem = deleteItem;
async function updateAllItems(req, res) {
    try {
        // Delete all existing items
        await itemProgramModel_1.default.deleteMany({});
        // Add new items from the request body
        const newItems = req.body;
        await itemProgramModel_1.default.insertMany(newItems);
        return res.status(200).json({ message: 'Items updated successfully' });
    }
    catch (error) {
        console.error('Error updating items:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
exports.updateAllItems = updateAllItems;
