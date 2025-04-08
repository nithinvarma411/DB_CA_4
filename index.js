import connectDB from "./db.js";
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';


const app = express();
app.use(express.json());

import routes from './routes.js'

app.use("/api", routes);

app.listen(3000, async () => {
    try {
        await connectDB()
        console.log("app listening");
        
    } catch (error) {
        console.error(error);
    }
})