// eslint.config.mjs (backend)

import js from "@eslint/js";
import globals from "globals";
import eslintPluginImport from "eslint-plugin-import";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      js,
      import: eslintPluginImport,
    },
    extends: ["js/recommended"],
    rules: {
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
        },
      ],
    },
    languageOptions: {
      globals: globals.node,
    },
    env: {
      node: true,
    },
  },
]);
