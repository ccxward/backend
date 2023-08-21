"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secretKey = process.env.JWT_SECRET_KEY;
// Token expiration time: (I set this for 3 hours, so people can use it for all of church )
const tokenExpiration = '3h';
function generateAuthToken(user) {
    if (!secretKey) {
        throw new Error('JWT secret key not defined in environment variables.');
    }
    const payload = {
        id: user.id,
        account_name: user.account_name,
    };
    const token = jsonwebtoken_1.default.sign(payload, secretKey, { expiresIn: tokenExpiration });
    return token;
}
exports.default = generateAuthToken;
