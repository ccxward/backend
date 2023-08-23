"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
// Call the connectDB function to establish the mongoDB connection
(0, database_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Enable CORS for all routes
app.use((0, cors_1.default)());
//body parser middleware
app.use(body_parser_1.default.json());
app.use('/backend', index_1.default);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
