import app from './app.js'
import {connectDB} from './bd.js'
connectDB()
app.listen(4000)
console.log('Server on port',4000);