    import mongoose from "mongoose";

    const destinoSchema = new mongoose.Schema({
        nombre: {
            type: String,
            required: true,
            trim: true, 
        },
        codigoIATA: {
            type: String,
            required: true,
            maxlength: 3, 
        },
        pais: {
            type: String,
            required: true,
            trim: true,
        },
        continente: {
            type: String,
            required: true,
            trim: true,
        },
        descripcion: {
            type: String,
            default: '',
            trim: true, 
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


    export default mongoose.model('Destino', destinoSchema); 