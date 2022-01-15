import express, { NextFunction, Request, Response } from "express";

const app = express();

app.use(express.json());

const middleware =
  ({ name }: { name: string }) =>
  (req: Request, res: Response, next: NextFunction) => {
    req.name = name;
    next();
  };

app.use(middleware({ name: "Kuba" }));

const handleGetBookOne = (req: Request, res: Response, next: NextFunction) => {
  console.log("handleGetBookOne", req.params);

  next();
};

const handleGetBookTwo = (req: Request, res: Response) => {
  console.log("handleGetBookTwo", req.params);
  console.log("added by middleware:", req.name);

  return res.send(req.params);
};

app.get("/api/books/:bookId/:authorId", [handleGetBookOne, handleGetBookTwo]);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("Application listening at http://localhost:3000");
});
