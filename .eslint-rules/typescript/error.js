/**
 * @type {import("eslint").Linter.RulesRecord}
 */
const rules = {
    "semi": [
        "error", "always"
    ],
    "no-self-compare": "error",
    "no-unassigned-vars": "error",
    "no-unreachable-loop": "error",
    "no-use-before-define": "error",
    "array-callback-return": "error",
    "no-constructor-return": "error",
    "no-inner-declarations": "error",
    "require-atomic-updates": "error",
    "no-promise-executor-return": "error",
    "no-template-curly-in-string": "error",
    "@angular-eslint/no-output-native": "error",
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
    "@angular-eslint/component-class-suffix": [
        "error", {
            "suffixes": ["Component"] 
        }
    ],
    "@angular-eslint/directive-class-suffix": [
        "error", {
            "suffixes": ["Directive"]
        }
    ]
};

module.exports = { rules };