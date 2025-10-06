import express, { type Request, type Response } from "express";
import { connectDB } from "./config/db";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

connectDB();

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
    res.send("Hello from Express + TypeScript!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
