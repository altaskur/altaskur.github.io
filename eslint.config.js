import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import airbnb from "eslint-config-airbnb";
import importPlugin from "eslint-plugin-import";


/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,tsx}"] },

  // Configuración del entorno (navegador y Node.js)
  { languageOptions: { globals: globals.browser } },

  // Reglas recomendadas de ESLint, TypeScript y Airbnb
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  airbnb, // Integración de Airbnb

  // Plugins requeridos por Airbnb
  { plugins: { import: importPlugin } },

];
