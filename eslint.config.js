// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

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
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "no-console": "error",
      "array-callback-return": "error",
      "no-await-in-loop": "warn",
      "no-constructor-return": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "error",
      "no-unassigned-vars": "error",
      "no-unreachable-loop": "error",
      "no-use-before-define": "error",
      "no-useless-assignment": "warn",
      "require-atomic-updates": "error",
      "no-duplicate-imports": "warn",
      "no-inner-declarations": "error",
      "no-promise-executor-return": "error",
      "@angular-eslint/component-class-suffix": ["error", { "suffixes": ["Component"] }],
      "@angular-eslint/directive-class-suffix": ["error", { "suffixes": ["Directive"] }],
      "@angular-eslint/no-empty-lifecycle-method": "warn",
      "@angular-eslint/use-lifecycle-interface": "warn",
      "@angular-eslint/no-output-native": "error",
      "@angular-eslint/prefer-on-push-component-change-detection": "warn",
      "@angular-eslint/no-input-rename": "warn",
      "@angular-eslint/no-output-rename": "warn"
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      "@angular-eslint/template/prefer-control-flow": "error",
      "@angular-eslint/template/prefer-self-closing-tags": "warn",
      "@angular-eslint/template/valid-aria": "error",
      "@angular-eslint/template/role-has-required-aria": "warn",
      "@angular-eslint/template/mouse-events-have-key-events": "warn",
      "@angular-eslint/template/no-autofocus": "error",
      "@angular-eslint/template/no-inline-styles": "warn",
      "@angular-eslint/template/no-distracting-elements": "warn"
    },
  }
);
