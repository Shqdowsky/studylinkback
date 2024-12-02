import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import router from "./router.js";
import fileupload from "express-fileupload";
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const PORT = 5000;
const url = process.env.MONGODB_URI;
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static("documents"))
app.use('/', router);

async function startApp(){
    try{
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    }catch(e){
        console.log(e);
    }
}

startApp();
