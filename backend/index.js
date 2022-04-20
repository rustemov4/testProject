import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import cors from 'cors'
const PORT = 5000
const app = express()
app.use(express.json())
const options = {
    origin: 'http://localhost:3000'
  };

app.use(cors(options))
const DB_URL = 'mongodb+srv://user:user@cluster0.zcu6x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use('/api',router)
async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}
startApp()