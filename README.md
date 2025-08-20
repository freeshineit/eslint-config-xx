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

`.eslintrc.js`

```js
module.exports = {
  extends: 'xx',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // '@typescript-eslint/space-before-function-paren': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/strict-boolean-expressions': 'off',
    // '@typescript-eslint/no-confusing-void-expression': 'off',
    // '@typescript-eslint/triple-slash-reference': 'off',
    // '@typescript-eslint/indent': 'off',
    // '@typescript-eslint/await-thenable': 'off',
    // 'multiline-ternary': 'off',
    // '@typescript-eslint/no-unused-vars': 1, // warn
    // 'react-hooks/exhaustive-deps': 2 // error
  },
};
```

### prettier config

`.prettierrc.js`

```js
module.exports = {
  ...require('eslint-config-xx/prettier.config'),
};
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
  "include": ["./index.js", "./.prettierrc.cjs"],
  "exclude": ["node_modules"]
}
```
