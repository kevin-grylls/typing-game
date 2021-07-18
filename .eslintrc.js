module.exports = {
 env: {
  browser: true,
  es2021: true,
 },
 extends: [
  "eslint:recommended",
  "plugin:prettier/recommended",
  "plugin:jest-dom/recommended",
 ],
 parserOptions: {
  ecmaVersion: 12,
  sourceType: "module",
 },
 plugins: ["prettier", "jest", "jest-dom"],
 rules: {},
};
