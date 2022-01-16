import { DocumentDefinition } from "mongoose";
import UserModel, { UserDocument } from "./user.model";

// eslint-disable-next-line import/prefer-default-export
export async function createUser(
  input: DocumentDefinition<
    Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
  >
) {
  try {
    return await UserModel.create(input);
  } catch (e: unknown) {
    throw e as Error;
  }
}
