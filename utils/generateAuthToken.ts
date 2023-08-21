import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


const secretKey = process.env.JWT_SECRET_KEY; 
// Token expiration time: (I set this for 3 hours, so people can use it for all of church )
const tokenExpiration = '3h'; 

interface UserPayload {
  id: number;
  account_name: string;
}

function generateAuthToken(user: UserPayload): string {
  if (!secretKey) {
  throw new Error('JWT secret key not defined in environment variables.');
}
  const payload: UserPayload = {
    id: user.id,
    account_name: user.account_name,
  };

  const token = jwt.sign(payload, secretKey, { expiresIn: tokenExpiration });
  return token;
}

export default generateAuthToken;