import mongoose, { Schema, Document, Types } from "mongoose"

export interface ITask extends Document {
    name: string
    description: string
}

export const TaskSchema : Schema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    }
})

const Task = mongoose.model<ITask>("Task", TaskSchema)
export default Task