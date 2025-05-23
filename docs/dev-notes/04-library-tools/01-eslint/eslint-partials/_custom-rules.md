## Custom Rules

:::tip
Article: [Why you should use string literal unions over enums in TypeScript](/articles/why-you-should-use-string-literal-unions-over-enums-in-typescript)
:::

Add the following custom rules to your `eslint.config.mjs` config.

```js title="eslint.config.mjs" {7-18}
/* ... */
export default defineConfig([
  includeIgnoreFile(gitignorePath),
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs,cjs,mts,cts}"],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-alert": "error",
      "no-restricted-syntax": [
        "error",
        {
          selector: "TSEnumDeclaration",
          message:
            "Enums are forbidden. Use string union types instead. Example: type Suit = 'HEARTS' | 'DIAMONDS' | 'SPADES' | 'CLUBS';",
        },
      ],
    },
  },
  /* ... */
]);
```
