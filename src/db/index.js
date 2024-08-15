import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://tushargithub21:tk4tushar@cluster0.cpgk2ez.mongodb.net/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log('MONGODB connection error', error);
        process.exit(1)
    }
}

export default connectDB;