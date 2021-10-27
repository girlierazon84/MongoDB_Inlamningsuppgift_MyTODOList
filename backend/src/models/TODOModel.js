import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const dbCollection = process.env.MONGODB_COLLECTION

const TODOSchema = new mongoose.Schema({
    todo: String,
    status: String,
    assignedTo: String
}, {
    timestamps: true
})

const TODOModel = new mongoose.model(dbCollection, TODOSchema)

export default TODOModel