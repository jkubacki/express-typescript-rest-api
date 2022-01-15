import { Request, Response } from "express";

type BookHandlerParams = { bookId: string; suthorId: string };
type BookHandlerBody = { name: string };
function getBookHandler(
  req: Request<BookHandlerParams, unknown, BookHandlerBody, unknown>,
  res: Response
) {
  return res.send(req.params);
}

export default getBookHandler;
