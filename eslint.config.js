// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

const typescriptErrorRules = require("./.eslint-rules/typescript/error");
const typescriptWarnRules = require("./.eslint-rules/typescript/warn");
const htmlErrorRules = require("./.eslint-rules/html/error");
const htmlWarnRules = require("./.eslint-rules/html/warn");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      ...typescriptErrorRules.rules,
      ...typescriptWarnRules.rules
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      ...htmlErrorRules.rules,
      ...htmlWarnRules.rules
    },
  }
);
