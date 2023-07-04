import { Request, Response } from "express";
import * as userManager from "./manager";

export const login = async (req: Request, res: Response) => {
  res.json(await userManager.login(req.body.userId));
};

export const createUser = async (req: Request, res: Response) => {
  res.json(await userManager.createUser(req.body));
};

export const getUser = async (req: Request, res: Response) => {
  res.json(await userManager.getUser(req.params.id));
};

export const updateUser = async (req: Request, res: Response) => {
  res.json(await userManager.updateUser(req.params.id, req.body));
};

export const deleteUser = async (req: Request, res: Response) => {
  res.json(await userManager.deleteUser(req.params.id));
};
