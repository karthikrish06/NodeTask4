import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
// mongoose.connect("mongodb+srv://vijayeswarybe:sanvi1012@cluster0.y5ahztj.mongodb.net/node_day5")
export default mongoose