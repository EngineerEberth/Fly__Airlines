import mongoose from "mongoose";

const pilotoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true, 
    },
    
    licencia: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /^[A-Z]{2}-\d{6}$/, 
    },
    
    rango: {
        type: String,
        required: true,
        enum: ['Capitán', 'Copiloto'], // Enum para definir rangos posibles
    },
    nacionalidad: {
        type: String,
        required: true,
        trim: true,
    },
    horasVuelo: {
        type: Number,
        required: true,
        min: 0, // Valor mínimo en horas de vuelo
    },
    experiencia: {
        type: String,
        default: '',
        trim: true, // Descripción de la experiencia, si aplica
    },
    estado: {
        type: String,
        enum: ['Activo', 'Inactivo'],
        default: 'Activo',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
}, {
    timestamps: true, 
});

export default mongoose.model('Piloto', pilotoSchema);
