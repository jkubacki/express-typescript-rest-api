import express from "express";
import config from "config";
import connect from "./utils/connect";

const port = config.get<number>("port");
const app = express();

app.listen(port, async () => {
  // eslint-disable-next-line no-console
  console.log(`Application listening at http://localhost:${port}`);

  await connect();
});
