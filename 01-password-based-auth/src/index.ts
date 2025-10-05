import express, { Request, Response } from 'express';
import simpleAuthRoutes from './routes/simpleAuthRoutes';
import userRoutes from './routes/userRoutes';

import { connectDB } from './config/db';

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());

app.use('/simple-auth', simpleAuthRoutes);
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
