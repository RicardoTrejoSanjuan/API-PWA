import { Mongoose } from "mongoose";
import { Schema } from 'mongoose';

export const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    birdate: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    },
    skill: {
        type: String,
        required: true,
    }
})