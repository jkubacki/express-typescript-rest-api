import { Request, Response } from "express";

type bookHandlerParams = { bookId: string; suthorId: string };
type bookHandlerBody = { name: string };
function getBookHandler(
  req: Request<bookHandlerParams, unknown, bookHandlerBody, unknown>,
  res: Response
) {
  return res.send(req.params);
}

export default getBookHandler;
