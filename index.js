import dotenv from 'dotenv';
dotenv.config();

import app from './src/app.js';
import { connectDB } from './src/bd.js';


connectDB();
app.listen(process.env.PORT, () => {
    console.log('Server on port', process.env.PORT);
});