import express from "express";
import config from "config";

const port = config.get<number>("port");
const app = express();

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Application listening at http://localhost:${port}`);
});
