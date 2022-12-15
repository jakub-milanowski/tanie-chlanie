/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "eslint:recommended"
  ],
  plugins: ["@typescript-eslint", "import", "simple-import-sort"],
  globals: {
    JSX: "readonly"
  },
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module",
    project: ["./tsconfig.json"]
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/comma-dangle": ["error", "never"],
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true }],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-unsafe-return": "warn",
    "@typescript-eslint/no-implicit-any-catch": "warn",
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        allowTemplateLiterals: true
      }
    ],
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true
      }
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "react/function-component-definition": [
      "warn",
      {
        namedComponents: "arrow-function"
      }
    ],
    "prefer-const": "warn"
  },
  overrides: [
    {
      files: ["./app/**/*.js", "./app/**/*.ts", "./app/**/*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // `react` first, `next` second, then packages starting with a character
              ["^react$", "^next", "^[a-z]"],
              // Packages starting with `@`
              ["^@"],
              // Packages starting with `~`
              ["^~"],
              // Imports starting with `../`, then imports starting with `./`
              ["^\\.\\.(?!/?$)", "^\\.\\./?$", "^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              // Style imports
              ["^.+\\.s?css$"],
              // Side effect imports
              ["^\\u0000"]
            ]
          }
        ]
      }
    }
  ]
};
