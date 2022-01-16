import mongoose, { Error } from "mongoose";
import config from "config";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
  } catch (error: unknown) {
    // eslint-disable-next-line no-console
    console.error(`Not connected to db ${(error as Error).message}`);

    process.exit(1);
  }
}

export default connect;
