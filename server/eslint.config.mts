// eslint.config.mts
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JavaScript & TypeScript shared settings
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      // optional: soften rules for backend projects
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      
    },
  },

  // Apply recommended JS rules
  js.configs.recommended,

  // Apply recommended TypeScript rules
  ...tseslint.configs.recommended,
]);
