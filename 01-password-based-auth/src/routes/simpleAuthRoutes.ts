import { Router } from "express";
import * as simpleAuthController from '../controllers/simpleAuthController';

const router = Router();

router.post('/register', simpleAuthController.register);
router.post('/login', simpleAuthController.login);
router.get('/users', simpleAuthController.users);

export default router;