module.exports = {
  root: true, // So parent files don't get applied
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    "plugin:import/recommended",
    "plugin:import/typescript",
    "airbnb-typescript",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 7,
  },
  plugins: ["eslint-plugin-react-hooks", "@typescript-eslint/eslint-plugin"],

  rules: {
    "consistent-this": ["error", "self"],
    curly: ["error", "all"],
    // Just as bad as "max components per file"
    "max-classes-per-file": "off",
    // Too interruptive
    "no-alert": "error",
    // Stylistic opinion
    "arrow-body-style": "off",
    // Allow warn and error for dev environments
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-param-reassign": "off", // It's fine.
    // Airbnb use warn https://github.com/airbnb/javascript/blob/63098cbb6c05376dbefc9a91351f5727540c1ce1/packages/eslint-config-airbnb-base/rules/style.js#L97
    // but eslint recommands error
    "func-names": "error",
    "no-constant-condition": "error",
    // Use the proptype inheritance chain
    "no-prototype-builtins": "off",
    "no-underscore-dangle": "error",
    "nonblock-statement-body-position": "error",
    "prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
    // Destructuring harm grep potential.
    "prefer-destructuring": "off",

    // disabled type-aware linting due to performance considerations
    "@typescript-eslint/dot-notation": "off",
    "dot-notation": "error",
    // disabled type-aware linting due to performance considerations
    "@typescript-eslint/no-implied-eval": "off",
    "no-implied-eval": "error",
    // disabled type-aware linting due to performance considerations
    "@typescript-eslint/no-throw-literal": "off",
    "no-throw-literal": "error",
    // disabled type-aware linting due to performance considerations
    "@typescript-eslint/return-await": "off",
    "no-return-await": "error",

    // Not sure why it doesn't work
    "import/named": "off",
    // Missing yarn workspace support
    "import/no-extraneous-dependencies": "off",
    // The code is already coupled to webpack. Prefer explicit coupling.
    "import/no-webpack-loader-syntax": "off",

    "react-hooks/exhaustive-deps": ["error", { additionalHooks: "useEnhancedEffect" }],
    "react-hooks/rules-of-hooks": "error",
    // airbnb is using .jsx
    "react/jsx-filename-extension": ["off"],
  },
  overrides: [
    {
      files: ["src/**/*.js"],
      rules: {
        "react/prop-types": "off",
      },
    },
    {
      files: ["src/**/*.js", "src/**/*.tsx"],
      rules: {
        // This most often reports data that is defined after the component definition.
        // This is safe to do and helps readability of the demo code since the data is mostly irrelevant.
        "@typescript-eslint/no-use-before-define": "off",
      },
    },
    {
      files: ["*.d.ts"],
      rules: {
        "import/export": "off", // Not sure why it doesn't work
      },
    },
    {
      files: ["*.tsx"],
      excludedFiles: "*.spec.tsx",
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
};
