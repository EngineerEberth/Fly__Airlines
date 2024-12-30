import express from 'express'
import morgan from 'morgan';
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from 'cors'
import destinyRoutes from './routes/destiny.routes.js'
import pilotRoutes from './routes/pilot.routes.js'
import planeRoutes from './routes/plane.routes.js'
import clientRoutes from './routes/client.routes.js'

const app=express();
app.use(cors({
    origin:'http://localhost:5173',
    credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json())
app.use(cookieParser())
app.use('/api',authRoutes)
app.use('/api',destinyRoutes)
app.use('/api',pilotRoutes)
app.use('/api',planeRoutes)
app.use('/api',clientRoutes)
export default app;