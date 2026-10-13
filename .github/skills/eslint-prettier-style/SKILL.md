---
name: eslint-prettier-style
description: "Apply this repository's ESLint and Prettier conventions when writing, reviewing, or formatting JavaScript, TypeScript, React, JSX/TSX, or Vue code."
---

# ESLint and Prettier Style Constraints

Use these constraints when creating or editing code covered by this repository's ESLint and Prettier configuration. Prefer fixing code to suppressing or weakening a rule.

## Formatting

- End statements with semicolons.
- Use double quotes, including in JSX attributes.
- Indent with two spaces; do not use tabs.
- Keep lines within 200 characters where practical.
- Include trailing commas wherever Prettier supports them.
- Put spaces inside object literal braces.
- Keep the closing `>` of HTML and JSX elements on the same line as the final attribute.
- Always wrap arrow-function parameters in parentheses, including a single parameter.
- Quote object property names only when required.
- Preserve the existing file's line-ending convention.

## JavaScript and TypeScript

- Prefer `const` when a binding is not reassigned; do not use `var`.
- Remove unused variables and imports. Names beginning with `_` are permitted for unused function arguments, variables, or caught errors.
- Avoid `any`; ESLint reports it as a warning, not an error.
- Use `interface` rather than `type` for type definitions where the consistent-type-definitions rule applies.
- Do not add empty interfaces.
- Avoid `console` calls; `console.warn` and `console.error` are allowed. Console use is a warning.
- Do not leave `debugger` or `alert` calls in production code; each is a warning.
- Do not add unnecessary ESLint disable comments. Unused disable directives are errors.
- Keep imports unique; duplicate imports are errors.

## React, JSX, and Hooks

- Follow React's JSX correctness rules: use defined components, valid JSX properties, unique keys, and PascalCase component names.
- Use fragments only when necessary, and prefer the configured fragment syntax (`<>...</>`).
- Omit unnecessary curly braces around JSX prop values and children when the value is a simple string.
- Use self-closing tags for components or elements without children.
- Escape text characters in JSX instead of writing unescaped entities.
- Do not pass children through the `children` prop or combine `dangerouslySetInnerHTML` with children.
- Follow the Rules of Hooks. Hook rule violations are errors.
- Keep Hook dependency arrays accurate; exhaustive-dependency violations are warnings and should be addressed rather than ignored.
- Provide appropriate alternative text, valid anchors, and valid ARIA properties and roles.

## Vue

- Follow the Vue plugin's recommended flat configuration.
- For Vue files, use the configured TypeScript parser and the same console, debugger, and alert guidance as other production code.

## Tests and Configuration Files

- Test files matching `*.test.{js,jsx,ts,tsx,mjs}` and files under `__tests__` allow `any` and TypeScript non-null assertions. Do not assume these exceptions apply to production files.
- Test files and configuration files may use the configured browser, ES2022, Node, and Jest globals.
- Configuration files matching `*.config.js`, `*.config.ts`, or `*.config.mjs` may use `require`; console, debugger, and alert remain warnings.

## Scope and Validation

- These conventions apply alongside the repository's recommended ESLint, TypeScript, `eslint-config-love`, and Vue rules; do not treat this list as replacing those presets.
- Do not edit generated output, build artifacts, coverage/cache directories, `node_modules`, or declaration files (`*.d.ts`) unless explicitly asked.
- Before finishing code changes, run the relevant lint and formatting checks used by the affected project. Fix newly introduced errors and warnings where practical; do not change shared lint configuration just to silence a finding.
