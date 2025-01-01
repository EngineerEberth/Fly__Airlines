import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import { connectDB } from './bd.js';

// Conectar a la base de datos
connectDB();

// Solo ejecutar el servidor si no estamos en Vercel
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en puerto ${PORT}`);
    });
}

// Exportar la app para que Vercel la utilice
export default app;