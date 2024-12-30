import mongoose from "mongoose";

const avionSchema = new mongoose.Schema({
    matricula: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /^[A-Z0-9-]+$/, // Ejemplo de validación para matrícula
    },
    modelo: {
        type: String,
        required: true,
        trim: true, 
    },
    fabricante: {
        type: String,
        required: true,
        trim: true,
    },
    capacidadPasajeros: {
        type: Number,
        required: true,
        min: 1, // Asume al menos 1 asiento
    },
    capacidadCargaKg: {
        type: Number,
        required: true,
        min: 0, // Peso mínimo
    },
    anoFabricacion: {
        type: Number,
        required: true,
        min: 1950, // Año de fabricación mínimo razonable
        max: new Date().getFullYear(), // Año actual como límite máximo
    },
    estado: {
        type: String,
        enum: ['Operativo', 'En Mantenimiento', 'Fuera de Servicio'], // Estados posibles
        default: 'Operativo',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
}, {
    timestamps: true, 
});

export default mongoose.model('Avion', avionSchema);
