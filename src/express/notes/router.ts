import express from "express";

const notesRouter = express.Router();

notesRouter.post("/:userId");
notesRouter.get("/:id");
notesRouter.patch("/:id");

export default notesRouter;
