// config.js
import dotenv from 'dotenv';

// Cargar dotenv al inicio
dotenv.config();
export const TOKEN_SECRET = process.env.SECRET_KEY; // Asegúrate de que esto apunte a la clave secreta correcta
console.log('Valor de SECRET_KEY:', process.env.SECRET_KEY);
console.log('Valor de TOKEN_SECRET:', TOKEN_SECRET);