import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginReact from "eslint-plugin-react";

export default defineConfig([
  globalIgnores(['./src/components/ui/*', './cypress/*']),
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat['jsx-runtime'],
  eslintConfigPrettier,
  {
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
]);
