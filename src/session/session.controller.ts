/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import config from "config";
import { Request, Response } from "express";
import { validatePassword } from "../user/user.service";
import { signJwt } from "../utils/jwt.utils";
import { createSession, findSessions, updateSession } from "./session.service";

export async function createSessionHandler(req: Request, res: Response) {
  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send("Invalid email or password");
  }

  // eslint-disable-next-line no-underscore-dangle
  const session = await createSession(user._id, req.get("user-agent") || "");

  const accessToken = signJwt(
    { ...user, session: session._id },
    "accessTokenPrivateKey",
    { expiresIn: config.get("accessTokenTtl") }
  );

  const refreshToken = signJwt(
    { ...user, session: session._id },
    "refreshTokenPrivateKey",
    { expiresIn: config.get("refreshTokenTtl") }
  );

  return res.send({ accessToken, refreshToken });
}

export async function getUserSessionsHandler(req: Request, res: Response) {
  const userId = res.locals.user._id;

  const sessions = await findSessions({ user: userId, valid: true });

  return res.send(sessions);
}

export async function deleteSessionsHandler(req: Request, res: Response) {
  const sessionId = res.locals.user.session;

  await updateSession({ _id: sessionId }, { valid: false });

  return res.send({
    accessToken: null,
    refreshToken: null,
  });
}
