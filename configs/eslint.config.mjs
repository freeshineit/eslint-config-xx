// eslint.config.js
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import pluginPrettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import love from 'eslint-config-love';
import tseslint from 'typescript-eslint';
import prettierConfig from './prettier.config.mjs';

// 合并所有配置
export default [
  {
    ignores: ['**/dist/**', '**/build/**', '**/node_modules/**', '**/.next/**', '**/out/**', '**/coverage/**', '**/.turbo/**', '**/.cache/**', '**/*.d.ts'],
  },

  // 基础配置
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,

  // React / TS / Import / Prettier 配置
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    plugins: {
      ...love.plugins,
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11yPlugin,
      import: importPlugin,
      prettier: pluginPrettier,
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
        ...globals.node,
        React: 'readonly',
        JSX: 'readonly',
      },
    },

    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },

    rules: {
      // ========== React 规则 ==========
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
      'react/jsx-key': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-undef': 'error',
      'react/jsx-pascal-case': 'error',
      'react/jsx-fragments': ['error', 'syntax'],
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
      'react/self-closing-comp': 'error',
      'react/no-unescaped-entities': 'error',
      'react/no-children-prop': 'error',
      'react/no-danger-with-children': 'error',
      'react/no-deprecated': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-find-dom-node': 'error',
      'react/no-is-mounted': 'error',
      'react/no-render-return-value': 'error',
      'react/no-string-refs': 'error',
      'react/no-unknown-property': 'error',

      // ========== React Hooks 规则 ==========
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // ========== JSX Accessibility 规则 ==========
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-is-valid': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-proptypes': 'error',
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/role-supports-aria-props': 'error',

      // ========== TypeScript 规则 ==========
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

      // ========== Import 规则 ==========
      'import/no-duplicates': 'error',
      'import/no-unresolved': 'off', // TypeScript 已经处理了

      // ========== 基础 ESLint 规则 ==========
      'no-unused-vars': 'off', // 使用 TypeScript 的版本
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
      'comma-dangle': 'off',
      '@typescript-eslint/comma-dangle': 'off',
      // Prettier
      'prettier/prettier': ['error', prettierConfig],
    },

    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
      node: {
        extensions: ['.js', '.mjs', '.cjs', '.jsx', '.ts', '.tsx'],
      },
    },
  },

  // ========== 测试文件配置 ==========
  {
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/__tests__/**'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },

  // ========== 配置文件特殊规则 ==========
  {
    files: ['*.config.js', '*.config.ts', '*.config.mjs'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
];
