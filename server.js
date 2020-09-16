const polka = require("polka");
const next = require("next");
const cookieParser = require("cookie-parser");

process.env.NODE_ENV = process.env.NODE_ENV || "production";
process.env.PORT = process.env.PORT || 80;

const app = next({ dev: process.env.NODE_ENV === "development" });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = polka();
  server.use(cookieParser());
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT, err => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on http://localhost:${process.env.PORT} [${process.env.NODE_ENV}]`);
  });

});
