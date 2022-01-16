/* eslint-disable import/prefer-default-export */

import SessionModel from "./session.model";

export async function createSession(userId: string, userAgent: string) {
  const session = await SessionModel.create({ user: userId, userAgent });

  return session.toJSON();
}
