import dotenv from 'dotenv';

// Cargar dotenv al inicio
dotenv.config();
import mongoose from "mongoose";
export const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("Conexión a la base de datos exitosa");
    } catch (error) {
        console.log('Error al conectar a la base de datos'); // Cambiar este mensaje
        console.error(error);
    }
}