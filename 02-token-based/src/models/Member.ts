import mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface IMember extends Document {
    username: string;
    email: string;
    password: string;
}

const MemberSchema: Schema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const Member = mongoose.model<IMember>("Member", MemberSchema);