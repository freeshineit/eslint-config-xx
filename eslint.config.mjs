// eslint.config.js
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import { configs } from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import love from 'eslint-config-love';

// 合并所有配置
export default [
  // 基础配置
  js.configs.recommended,
  ...configs.recommended,
  prettier,

  // React 配置
  {
    files: ['**/*.{js,mjs,jsx,ts,tsx}'],
    ignores: ['**/dist/**', '**/build/**'],

    plugins: {
      ...love.plugins,
      react,
      'react-hooks': reactHooks,
      prettier: pluginPrettier,
      import: importPlugin,
    },

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2022,
      },
    },

    rules: {
      // ========== React 规则 ==========
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-closing-bracket-location': 'error',
      'react/jsx-closing-tag-location': 'error',
      'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],
      'react/jsx-equals-spacing': ['error', 'never'],
      'react/jsx-first-prop-new-line': ['error', 'multiline'],
      'react/jsx-fragments': ['error', 'syntax'],
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-pascal-case': 'error',
      'react/jsx-props-no-multi-spaces': 'error',
      'react/jsx-tag-spacing': 'error',
      'react/no-children-prop': 'error',
      'react/no-danger-with-children': 'error',

      // ========== React Hooks 规则 ==========
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // ========== TypeScript 规则 ==========
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',

      // ========== 基础 ESLint 规则 ==========
      'no-unused-vars': 'off', // 使用 TypeScript 的版本
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
      // Prettier
      'prettier/prettier': 'error',
    },

    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json', // Adjust path if your tsconfig.json is elsewhere
        },
      },
    },
  },

  // 禁用所有与 Prettier 冲突的规则
  // {
  //   files: ['**/*.{js,mjs,jsx,ts,tsx}'],
  //   rules: {
  //     ...love.rules,
  //     ...prettier.rules,
  //   },
  //   settings: {
  //     react: {
  //       version: 'detect',
  //     },
  //     'import/resolver': {
  //       typescript: {
  //         project: './tsconfig.json', // Adjust path if your tsconfig.json is elsewhere
  //       },
  //     },
  //   },
  // },
];
