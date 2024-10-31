import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const mongo_Url = process.env.MONGOURL

export default mongoose.connect(mongo_Url)
        .then(()=>console.log("Database connected successfully"))
        .catch((e)=>console.log(e))