"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProgramFromDatabase = void 0;
const staticProgramModel_1 = __importDefault(require("../models/staticProgramModel"));
async function getStaticProgramFromDatabase() {
    try {
        const staticProgram = await staticProgramModel_1.default.find();
        return staticProgram;
    }
    catch (error) {
        throw error;
    }
}
exports.getStaticProgramFromDatabase = getStaticProgramFromDatabase;
