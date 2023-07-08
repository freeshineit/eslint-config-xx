## eslint-config-xx

![Download](https://img.shields.io/npm/dm/eslint-config-xx.svg)
![Version](https://img.shields.io/npm/v/eslint-config-xx.svg)
![License](https://img.shields.io/npm/l/eslint-config-xx.svg)

Support js/ts/jsx/tsx and export prettier config
## install

```bash
yarn install eslint-config-xx -D
```
### use

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
}

```

### prettier

`.prettierrc.js`
```js
module.exports = {
  ...require('eslint-config-xx/prettier.config'),
}
```
