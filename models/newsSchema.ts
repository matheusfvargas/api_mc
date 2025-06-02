import mongoose from "mongoose"

export const NewsSchema = new mongoose.Schema({
    titulo: {type:String},
    chapeu: {type:String},
    
})