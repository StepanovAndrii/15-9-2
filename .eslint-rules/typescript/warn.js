/**
 * @type {import("eslint").Linter.RulesRecord}
 */
const rules = {
    "no-console": "warn",
    "no-await-in-loop": "warn",
    "no-duplicate-imports": "warn",
    "no-useless-assignment": "warn",
    "@angular-eslint/no-input-rename": "warn",
    "@angular-eslint/no-output-rename": "warn",
    "@angular-eslint/use-lifecycle-interface": "warn",
    "@angular-eslint/no-empty-lifecycle-method": "warn",
    "@angular-eslint/prefer-on-push-component-change-detection": "warn"
};

module.exports = { rules };