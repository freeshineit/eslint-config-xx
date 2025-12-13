## eslint-config-xx

![Download](https://img.shields.io/npm/dm/eslint-config-xx.svg)
![Version](https://img.shields.io/npm/v/eslint-config-xx.svg)
![License](https://img.shields.io/npm/l/eslint-config-xx.svg)

Support js/ts/jsx/tsx and export prettier config

## install

```bash
yarn install eslint-config-xx -D
```

### eslint config

`eslint.config.js`

```js
// import js from '@eslint/js';
// import globals from 'globals';
// import reactHooks from 'eslint-plugin-react-hooks';
// import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import configs from 'eslint-config-xx';

export default defineConfig([
  globalIgnores(['dist']),
  ...configs,
  // {
  //   files: ['**/*.{js,jsx}'],
  //   extends: [js.configs.recommended, reactHooks.configs['recommended-latest'], reactRefresh.configs.vite],
  //   languageOptions: {
  //     ecmaVersion: 2020,
  //     globals: globals.browser,
  //     parserOptions: {
  //       ecmaVersion: 'latest',
  //       ecmaFeatures: { jsx: true },
  //       sourceType: 'module',
  //     },
  //   },
  //   rules: {
  //     'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
  //   },
  // },
]);
```

### prettier config

`prettier.config.mjs`

```js
import configs from 'eslint-config-xx/prettier.config.mjs';

export default configs;
```

### js 项目

Parsing error: project was set to `true` but couldn't find any tsconfig.json relative

在根目录下新建`tsconfig.json`

```json
{
  "compilerOptions": {
    "module": "esnext",
    "target": "ES2015",
    "lib": ["es6", "dom", "es2016", "es2017"],
    "sourceMap": true,
    "allowJs": true,
    "outDir": "dist",
    "moduleResolution": "node",
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "jsx": "react-jsx"
  },
  "include": ["./eslint.config.js", "./prettier.config.mjs"],
  "exclude": ["node_modules"]
}
```
