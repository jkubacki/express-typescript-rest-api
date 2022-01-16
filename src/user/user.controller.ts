import { Request, Response } from "express";
import { omit } from "lodash";
import { createUser } from "./user.service";
import logger from "../utils/logger";
import { CreateUserInput } from "./user.schema";

export default async function createuserHandler(
  req: Request<unknown, unknown, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    res.send(omit(user.toJSON(), "password"));
    return null;
  } catch (e: unknown) {
    logger.error(e as Error);
    return res.status(409).send((e as Error).message);
  }
}
