module.exports = {
  src: "./",
  language: "typescript",
  schema: "./schema.graphql",
  exclude: [
    "**/node_modules/**",
    "**/__relay_artifacts/**",
    "**/__generated__/**",
    "relay-compiler-directives.graphql",
  ],
  artifactDirectory: "./src/__relay_artifacts__",
  typegenPhase: "Compat",
  customScalars: {
    URL: "string",
    Upload: "File | Blog",
    ISO8601DateTime: "string",
    ISO8601Date: "string",
  },
};
