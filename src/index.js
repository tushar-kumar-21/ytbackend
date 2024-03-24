// require('dotenv').config({path:'./env'})
import mongoose from 'mongoose';
import dotenv from "dotenv";
import { app } from './app.js';

dotenv.config({
    path: './env'
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log('MONGODB connection error', error);
        process.exit(1)
    }
}

connectDB().then().catch((err) => {
    console.log("MONGO db connection faild !!!!", err);
})