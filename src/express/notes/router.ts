import express from "express";
import * as noteController from "./controller";
import * as noteValidator from "./validator.schema";
import { ValidateRequest, wrapMiddleware } from "../utils/joi";

const notesRouter = express.Router();

notesRouter.post(
  "/",
  ValidateRequest(noteValidator.createNoteSchema),
  wrapMiddleware(noteController.createNote)
);
notesRouter.get(
  "/:id",
  ValidateRequest(noteValidator.getNoteSchema),
  wrapMiddleware(noteController.getNote)
);
notesRouter.patch(
  "/:id",
  ValidateRequest(noteValidator.updateNoteSchema),
  wrapMiddleware(noteController.updateNote)
);
notesRouter.delete(
  "/:id",
  ValidateRequest(noteValidator.deleteNoteSchema),
  wrapMiddleware(noteController.deleteNote)
);
export default notesRouter;
