import { Request, Response } from 'express';
// import bcrypt from 'bcrypt';
// import generateAuthToken from '../utils/generateAuthToken';
import StaticProgramModel from '../models/staticProgramModel'
import { getStaticProgramFromDatabase } from '../utils/programUtils';

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

export {createStaticProgram, modifyStaticProgram, getStaticProgram};
