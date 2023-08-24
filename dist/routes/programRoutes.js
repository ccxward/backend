"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const programController_1 = require("../controllers/programController");
const programRouter = express_1.default.Router();
programRouter.get('/get_static_program', programController_1.getStaticProgram);
programRouter.put('/modify_static_program/:_id', programController_1.modifyStaticProgram);
////only use in emergencies:
//programRouter.post('/create_static_program', createStaticProgram);
exports.default = programRouter;
