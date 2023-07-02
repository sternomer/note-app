import { Request, Response } from "express";
import * as notesManager from "./manager";

export const createNote = async (req: Request, res: Response) => {
  res.json(await notesManager.createNote(req.body.content));
};

export const getNote = async (req: Request, res: Response) => {
  res.json(await notesManager.getNote(req.params.id));
};

export const updateNote = async (req: Request, res: Response) => {
  res.json(await notesManager.updateNote(req.params.id, req.body.content));
};

export const deleteNote = async (req: Request, res: Response) => {
  res.json(await notesManager.deleteNote(req.params.id));
};
