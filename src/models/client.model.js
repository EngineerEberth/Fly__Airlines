import mongoose from "mongoose";

// Esquema para el modelo de Usuario
const usuarioSchema = new mongoose.Schema({
    nombreCompleto: {
        type: String,
        required: true,
        trim: true, // Elimina espacios en blanco al principio y al final
    },
    email: {
        type: String,
        required: true,
        unique: true, // Asegura que el email sea único
        trim: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, // Expresión regular para validar email
    },
    telefono: {
        type: String,
        trim: true,
        match: /^\+?[0-9\s]+$/, // Validación para número telefónico con o sin prefijo de país
    },
    fechaNacimiento: {
        type: Date,
        required: true,
    },
    numeroPasaporte: {
        type: String,
        required: true,
        unique: true, // Asegura que el número de pasaporte sea único
        trim: true,
    },
    nacionalidad: {
        type: String,
        required: true,
        trim: true,
    },
    estado: {
        type: String,
        enum: ['Activo', 'Inactivo'], // Estado que solo puede ser 'Activo' o 'Inactivo'
        default: 'Activo',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Relación con el modelo de 'User'
        required: true,
    },
}, {
    timestamps: true, // Timestamps para createdAt y updatedAt
});

export default mongoose.model('Usuario', usuarioSchema);
