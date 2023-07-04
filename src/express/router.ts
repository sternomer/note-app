import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import notesRouter from "./notes/router";
import userRouter from "./user/router";
import loginRouter from "./login/router";
// import { isAuthenticate } from "./middleware/authenticate";

export const app = express();
app.use(express.json()); // deprecated
app.use(morgan("dev"));
app.use(cors());



app.use("/api/login", loginRouter);
// app.use(isAuthenticate);

app.use("/api/notes", notesRouter);
app.use("/api/user", userRouter);

app.use("*", (_req: Request, res: Response) => {
  res.status(404).send("Invalid Route");
});

app.use((err: any, _req: Request, res: Response, _next: any) => {
  res.status(500).send(err.message);
});

export default app;
