const withOptimizedImages = require("next-optimized-images");
const withSourceMaps = require("@zeit/next-source-maps");

require("dotenv").config();

const nextRuntimeDotenv = require("next-runtime-dotenv");

const withConfig = nextRuntimeDotenv({
  // path: '.env',
  public: ["SENTRY_DNS"],
  // server: ["GITHUB_TOKEN"]
});

module.exports = withConfig(
  withSourceMaps(
    withOptimizedImages({
      experimental: {
        modern: true,
        polyfillsOptimization: true,
      },

      webpack: (config, { dev, isServer }) => {
        if (!isServer) {
          config.resolve.alias["@sentry/node"] = "@sentry/browser";
        }

        return config;
      },
    })
  )
);
