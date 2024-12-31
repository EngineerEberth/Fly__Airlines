import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import { connectDB } from './bd.js';

// Conectar a la base de datos
connectDB();

// Exportar la app para que Vercel la utilice
export default app;
