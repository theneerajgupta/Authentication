import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) throw new Error("MONGO_URI not found in .env");

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("[ SUCCESS ] connected to mongo atlas");
    } catch (err: any) {
        console.error("[ ERROR ] mongo atlas not connected");
        process.exit(1);
    }
};