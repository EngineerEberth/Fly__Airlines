import mongoose from "mongoose";
export const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("Conexión a la base de datos exitosa");
    } catch (error) {
        console.log('DB is connected');
        console.log(error);
    }
}