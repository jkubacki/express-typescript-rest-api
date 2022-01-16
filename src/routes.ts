import { Express, Request, Response } from "express";
import createuserHandler from "./user/user.controller";
import validateResource from "./middleware/validateResource";
import { createUserSchema } from "./user/user.schema";
import {
  createSessionHandler,
  getUserSessionsHandler,
} from "./session/session.controller";
import { createSessionSchema } from "./session/session.schema";
import requireUser from "./middleware/requireUser";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.post("/api/users", validateResource(createUserSchema), createuserHandler);

  app.post(
    "/api/sessions",
    validateResource(createSessionSchema),
    createSessionHandler
  );

  app.get("/api/sessions", requireUser, getUserSessionsHandler);
}
export default routes;
