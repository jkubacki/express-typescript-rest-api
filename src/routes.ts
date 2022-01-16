import { Express, Request, Response } from "express";
import createuserHandler from "./user/user.controller";
import validateResource from "./middleware/validateResource";
import { createUserSchema } from "./user/user.schema";
import {
  createSessionHandler,
  deleteSessionsHandler,
  getUserSessionsHandler,
} from "./session/session.controller";
import { createSessionSchema } from "./session/session.schema";
import requireUser from "./middleware/requireUser";
import { createProductHandler } from "./product/product.controller";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.post("/api/users", validateResource(createUserSchema), createuserHandler);

  app.post(
    "/api/sessions",
    validateResource(createSessionSchema),
    createSessionHandler
  );

  app.get("/api/sessions", requireUser, getUserSessionsHandler);

  app.delete("/api/sessions", requireUser, deleteSessionsHandler);

  app.post("/api/products", requireUser, createProductHandler);
}
export default routes;
