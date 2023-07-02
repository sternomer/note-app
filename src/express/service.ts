import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import notesRouter from "./notes/router";

export const app = express();
app.use(express.json()); // deprecated
app.use(morgan("dev"));
app.use(cors());

app.use('/api/notes',notesRouter)

app.use("*", (_req: Request, res: Response) => {
  res.status(404).send("Invalid Route");
});

app.use((err: any, _req: Request, res: Response, _next: any) => {
  res.status(500).send(err.message);
});


// app.use((err: Error, _req: Request, res: Response, _next: any) => {
//   res.status(err.code || 500).send(err.message);
// });

export default app;
