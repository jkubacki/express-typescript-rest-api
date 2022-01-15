/* eslint-disable no-console */
import express, { NextFunction, Request, Response } from "express";

const app = express();

app.use(express.json());

const middleware =
  ({ name }: { name: string }) =>
  (req: Request, res: Response, next: NextFunction) => {
    res.locals.name = name;
    next();
  };

app.use(middleware({ name: "Kuba" }));

const handleGetBookOne = (
  req: Request<
    { bookId: string; suthorId: string },
    unknown,
    { name: string },
    unknown
  >,
  res: Response,
  next: NextFunction
) => {
  console.log("handleGetBookOne", req.params);

  next();
};

const handleGetBookTwo = (req: Request, res: Response) => {
  console.log("handleGetBookTwo", req.params);
  console.log("added by middleware:", res.locals.name);

  return res.send(req.params);
};

app.get("/api/books/:bookId/:authorId", [handleGetBookOne, handleGetBookTwo]);

async function throwsError() {
  throw new Error("Boom!");
}

app.get("/error", async (req: Request, res: Response) => {
  try {
    await throwsError();
    res.sendStatus(200);
  } catch (e) {
    res.status(400).send("Something bad happened");
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("Application listening at http://localhost:3000");
});
