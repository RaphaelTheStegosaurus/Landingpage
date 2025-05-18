import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: { js, "react-x": reactX, "react-dom": reactDom },
    extends: ["js/recommended", ...tseslint.configs.stylisticTypeChecked],
    rules: {
      ...reactX.configs["recommended-typescript"].rules,
      ...reactDom.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
