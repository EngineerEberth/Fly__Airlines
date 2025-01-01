import dotenv from 'dotenv';

// Cargar dotenv al inicio
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import authRoutes from "./src/routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import destinyRoutes from './src/routes/destiny.routes.js';
import pilotRoutes from './src/routes/pilot.routes.js';
import planeRoutes from './src/routes/plane.routes.js';
import clientRoutes from './src/routes/client.routes.js';

const app = express();
app.use(cors({
    origin: process.env.CLIENT_URL, // CLIENT_URL se define en .env
    credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Ruta raíz para mostrar que el servidor está activo
app.get('/', (req, res) => {
    res.send('¡Bienvenido al backend de Fly Airlines!');
});

// Ruta de prueba
app.get('/api/test', (req, res) => {
    res.json({ message: 'API funcionando correctamente' });
});

// Rutas principales
app.use('/api', authRoutes);
app.use('/api', destinyRoutes);
app.use('/api', pilotRoutes);
app.use('/api', planeRoutes);
app.use('/api', clientRoutes);

export default app;
