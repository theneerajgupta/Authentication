import express, { Request, Response } from 'express';
import simpleAuthRoutes from './routes/simpleAuthRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/simple-auth', simpleAuthRoutes);

app.get('/', (_req: Request, res: Response) => {
  res.send("Hello from ts-node express backend!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});