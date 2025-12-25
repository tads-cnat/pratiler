import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import noUnsatinized from 'eslint-plugin-no-unsanitized';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import security from 'eslint-plugin-security';
import sonarjs from 'eslint-plugin-sonarjs';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      'no-unsatinized': noUnsatinized,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      security,
      sonarjs,
    },
    rules: {
      ...js.configs.recommended.rules,
      complexity: ['warn', 10],
      'consistent-return': 'warn',
      'default-case': 'warn',
      eqeqeq: ['error', 'always'],
      'max-depth': ['warn', 4],
      'max-lines': ['warn', { max: 300 }],
      'max-lines-per-function': ['warn', { max: 120, skipBlankLines: true, skipComments: true }],
      'max-params': ['warn', 4],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-duplicate-imports': 'warn',
      'no-else-return': 'warn',
      'no-empty': ['error', { allowEmptyCatch: false }],
      'no-eval': 'error',
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error',
      'no-nested-ternary': 'warn',
      'no-new-func': 'error',
      'no-shadow': 'error',
      'no-undef-init': 'error',
      'no-unsatinized/method': 'error',
      'no-unsatinized/property': 'error',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-useless-catch': 'error',
      'no-with': 'error',
      ...react.configs['jsx-runtime'].rules,
      ...react.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      ...reactHooks.configs.recommended.rules,
      'security/detect-buffer-noassert': 'error',
      'security/detect-child-process': 'warn',
      'security/detect-eval-with-expression': 'error',
      'security/detect-new-buffer': 'error',
      'security/detect-non-literal-regexp': 'error',
      'security/detect-object-injection': 'warn',
      'security/detect-unsafe-regex': 'error',
      'sonarjs/cognitive-complexity': ['warn', 15],
      'sonarjs/no-collapsible-if': 'warn',
      'sonarjs/no-duplicate-string': ['warn', { threshold: 3 }],
      'sonarjs/no-duplicated-branches': 'warn',
      'sonarjs/no-identical-functions': 'warn',
      'sonarjs/no-redundant-boolean': 'warn',
      'sonarjs/no-small-switch': 'warn',
    },
  },
];
