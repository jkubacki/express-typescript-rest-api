/* eslint-disable import/prefer-default-export */
/* eslint-disable no-underscore-dangle */
import { Request, Response } from "express";
import { createProduct } from "./product.service";
import { CreateProductInput } from "./product.schema";

export async function createProductHandler(
  req: Request<unknown, unknown, CreateProductInput["body"]>,
  res: Response
) {
  const userId = res.locals.user._id;
  const { body } = req;
  const product = await createProduct({ ...body, user: userId });
  return res.send(product);
}
