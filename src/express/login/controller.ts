import { Request,Response } from "express";
import * as loginManager from "./manager";

export const login = async (req: Request, res: Response) => {
    res.json(await loginManager.login(req.body.username, req.body.password));
    }
