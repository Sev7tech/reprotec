import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import pluginReact from 'eslint-plugin-react'
import prettierPlugin from 'eslint-plugin-prettier'
import tailwindPlugin from 'eslint-plugin-tailwindcss'
import { fixupPluginRules } from '@eslint/compat'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: ['**/node_modules', '**/.next'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
      globals: {
        ...globals.node,
        ...globals.jest,
        React: 'readonly',
        ...globals.browser
      }
    },
    plugins: {
      import: importPlugin,
      'react-hooks': fixupPluginRules(reactHooksPlugin),
      prettier: prettierPlugin,
      react: pluginReact,
      '@typescript-eslint': tseslint,
      tailwindcss: tailwindPlugin
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      'no-console': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index']
          ],
          'newlines-between': 'always'
        }
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' }
      ],
      'prettier/prettier': [
        'error',
        { semi: false, endOfLine: 'auto', singleQuote: true }
      ],
      'tailwindcss/classnames-order': 'error',
      'tailwindcss/no-custom-classname': 'warn',
      'react/react-in-jsx-scope': 'off'
    }
  }
]
