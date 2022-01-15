import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  // return res.send("Hello World");
  // return res.json({
  //   foo: "bar",
  //   hello: "world",
  // });
  return res.redirect("http://example.com");
});

app.post("/api/data", (req: Request, res: Response) => {
  // eslint-disable-next-line no-console
  console.log(req.body);
  return res.sendStatus(200);
});

app.all("/api/all", (req: Request, res: Response) => {
  return res.sendStatus(200);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("Application listening at http://localhost:3000");
});