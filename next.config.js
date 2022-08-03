require("dotenv").config();

// const nextRuntimeDotenv = require("next-runtime-dotenv");

// const withConfig = nextRuntimeDotenv({
//   // path: '.env',
//   public: ["SENTRY_DNS"],
//   // server: ["GITHUB_TOKEN"]
// });

const withPreact = require("next-plugin-preact");

module.exports = withPreact({
  /* regular next.js config options here */
});
