import StaticProgramModel from "../models/staticProgramModel";


async function getStaticProgramFromDatabase() {
  try {
    const staticProgram = await StaticProgramModel.find();   
    return staticProgram;
  } catch (error) {
    throw error;
  }
}

export{getStaticProgramFromDatabase};