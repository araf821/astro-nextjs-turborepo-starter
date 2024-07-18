/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
};
