import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import { connectDB } from './bd.js';

// Conectar a la base de datos
connectDB();

// Determinar el puerto
const PORT = process.env.PORT || 4000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});

// Exportar la app para entornos como Vercel
export default app;
