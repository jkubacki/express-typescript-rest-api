import { Express, Request, Response } from "express";

async function throwsError() {
  throw new Error("Boom!");
}

function routes(app: Express) {
  type requestParams = { bookId: string; suthorId: string };
  type requestBody = { name: string };
  app.get(
    "/api/books/:bookId/:authorId",
    (
      req: Request<requestParams, unknown, requestBody, unknown>,
      res: Response
    ) => {
      return res.send(req.params);
    }
  );

  app.get("/error", async (req: Request, res: Response) => {
    try {
      await throwsError();
      res.sendStatus(200);
    } catch (e) {
      res.status(400).send("Something bad happened");
    }
  });
}
export default routes;
