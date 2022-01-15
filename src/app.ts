import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/api/books/:bookId/:authorId", (req: Request, res: Response) => {
  return res.send(req.params);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("Application listening at http://localhost:3000");
});
