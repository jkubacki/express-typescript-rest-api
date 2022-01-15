/* eslint-disable no-console */
import express, { NextFunction, Request, Response } from "express";
import helmet from 'helmet'
import routes from "./routes";

const app = express();

app.use(helmet());
app.use(express.json());

const middleware =
  ({ name }: { name: string }) =>
  (req: Request, res: Response, next: NextFunction) => {
    res.locals.name = name;
    next();
  };

app.use(middleware({ name: "Kuba" }));

routes(app);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("Application listening at http://localhost:3000");
});
