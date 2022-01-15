import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/health", (req: Request, res: Response) => res.sendStatus(200));
app.get("/ab*cd", (req: Request, res: Response) => res.send("/ab*cd"));
app.get("/abc/", (req: Request, res: Response) => res.send("/abc"));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("Application listening at http://localhost:3000");
});
