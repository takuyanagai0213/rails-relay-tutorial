const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: ".",
        tsConfigPath: "./tsconfig.extend.json",
      },
    },
  ],
  eslint: {
    enable: false,
  },
  typescript: {
    enableTypeChecking: false,
  },
  babel: {
    passPerPreset: true,
    plugins: [
      [
        "relay",
        {
          artifactDirectory: "./src/__relay_artifacts__",
        },
      ],
    ],
  },
};
