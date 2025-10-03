import type { Request, Response } from "express";
import * as simpleAuthService from '../services/simpleAuthService';

export async function register(req: Request, res: Response) {
    try {
        await simpleAuthService.registerUser(req.body.email, req.body.password);
        res.send("User registered");
    } catch (err: any) {
        res.status(400).send(err.message);
    }
}

export async function login(req: Request, res: Response) {
    try {
        await simpleAuthService.loginUser(req.body.email, req.body.password);
        res.send("Logged in!");
    } catch (err: any) {
        res.status(400).send(err.message);
    }
}

export function users(_req: Request, res: Response) {
    res.json(simpleAuthService.getUsers());
}