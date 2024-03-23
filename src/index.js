// require('dotenv').config({path:'./env'})
import connectDB from './db/index.js';
import dotenv from "dotenv";
import { app } from './app.js';

dotenv.config({
    path: './env'
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });

connectDB().then().catch((err) => {
    console.log("MONGO db connection faild !!!!", err);
})