import mongoose from 'mongoose'

const urlSchema = new mongoose.Schema({
    originalUrl : {type: String, required: true},
    shortUrl : {type: String, required: true, unique: true},
    clicks : {type: Number, default: 0},
    date : {type: Date, default: Date.now()}
})

export const Url = mongoose.model('Url', urlSchema)