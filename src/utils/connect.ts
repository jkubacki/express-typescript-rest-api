import mongoose, { Error } from "mongoose";
import config from "config";
import logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    logger.info("Connected to mongodb");
  } catch (error: unknown) {
    // eslint-disable-next-line no-console
    logger.error(`Not connected to mongodb ${(error as Error).message}`);

    process.exit(1);
  }
}

export default connect;
