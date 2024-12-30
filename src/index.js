import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import { connectDB } from './bd.js';


connectDB();
app.listen(process.env.PORT, () => {
    console.log('Server on port', process.env.PORT);
});