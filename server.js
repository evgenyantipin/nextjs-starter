const express = require("express");
const next = require("next");
const compression = require("compression");
const cookieParser = require("cookie-parser");

process.env.NODE_ENV = process.env.NODE_ENV || "production";
process.env.PORT = process.env.PORT || 3003;

const app = next({ dev: process.env.NODE_ENV === "development" });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(cookieParser());
  server.use(compression());

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT, (err) => {
    if (err) {
      throw err;
    }
    console.log(
      `> Ready on http://localhost:${process.env.PORT} [${process.env.NODE_ENV}]`
    );
  });
});
