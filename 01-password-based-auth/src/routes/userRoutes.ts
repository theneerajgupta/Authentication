import { Router } from "express";
import type { Request, Response } from "express";
import { User } from "../models/User";

const router = Router();

// ✅ 1. Create/Add a new user
router.post('/addUser', async (req: Request, res: Response) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.json(user);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

// ✅ 2. Get all users
router.get('/users', async (_req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ 3. Get a user by ID
router.get('/users/:id', async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

// ✅ 4. Update a user by ID
router.put('/users/:id', async (req: Request, res: Response) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(updatedUser);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

// ✅ 5. Delete a user by ID
router.delete('/users/:id', async (req: Request, res: Response) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

export default router;
