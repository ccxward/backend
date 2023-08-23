
import express from 'express';
import connectDB from './config/database'; 
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import router from './routes/index';

const app = express();


// Call the connectDB function to establish the mongoDB connection
connectDB(); 

app.use(express.static(path.join(__dirname, 'public')));

// Enable CORS for all routes
app.use(cors());
//body parser middleware
app.use(bodyParser.json());

app.use('/backend', router);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});