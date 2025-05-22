# Tailwind CSS Setup <!-- omit in toc -->

- [Installation](#installation)
- [VS Code Extension](#vs-code-extension)
- [clsx() Utility](#clsx-utility)
- [Official Prettier Plugin](#official-prettier-plugin)
- [Unofficial ESLint Plugin](#unofficial-eslint-plugin)
- [Tailwind Readme Snippet](#tailwind-readme-snippet)

## Installation

Follow the [Tailwind CSS installation instructions](https://tailwindcss.com/docs/installation/framework-guides) for your chosen framework or build system

or

Follow the [Tailwind CSS upgrade guide](https://tailwindcss.com/docs/upgrade-guide)

## VS Code Extension

Add the following to the `.vscode/extensions.json` file.

```json
{
  "recommendations": [
    . . .
    "bradlc.vscode-tailwindcss"
  ]
}
```

## clsx() Utility

> [!TIP]
> Source: [clsx() Tailwind Support](https://github.com/lukeed/clsx?tab=readme-ov-file#tailwind-support)

[`clsx()`](https://github.com/lukeed/clsx) is a useful utility for constructing `className` strings conditionally. Install it by using this command:

```terminal
pnpm add --save clsx
```

Then add the following property to the `.vscode/settings.json` file. This will allow the Tailwind VS Code extension to continue working:

```json
{
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

## Official Prettier Plugin

> [!NOTE]
> Source: [`prettier-plugin-tailwindcss`](https://www.npmjs.com/package/prettier-plugin-tailwindcss)

Install `prettier-plugin-tailwindcss` by using this command:

```terminal
pnpm add --save-dev --save-exact prettier-plugin-tailwindcss
```

Then add the plugin to the `.prettierrc` file:

```json
{
  "plugins": ["🟡...Other Plguins", "prettier-plugin-tailwindcss"],
  "tailwindStylesheet": "{🟡 PATH_TO_CSS_FILE_ENTRY_POINT_THAT_IMPORTS_TAILWIND}",
  "tailwindFunctions": ["clsx"]
}
```

## Unofficial ESLint Plugin

> [!WARNING]
> As of 04/08/2025
>
> - There is no official ESLint plugin released for Tailwind CSS.
> - There is the unofficial but decently popular [`eslint-plugin-tailwindcss`](https://www.npmjs.com/package/eslint-plugin-tailwindcss). However it is NOT YET compatible with Tailwind v4.0
> - `@eslint/css` has a language option for custom TailwindCSS syntax. However, it has not been updated for TailwindCSS 4.0. That section of the config might need to be commented out until the language option has been updated

Install `@eslint/eslintrc` by running this command:

```terminal
pnpm add --save-dev eslint-plugin-tailwindcss
```

Update the `eslint.config.mjs` file with the following:

```ts
// ...
import { tailwindSyntax } from "@eslint/css/syntax";
import tailwind from "eslint-plugin-tailwindcss";

// ...

export default defineConfig([
  // ...
   {
    files: ["**/*.{js,jsx,ts,tsx,mjs,cjs,mts,cts}"],
    extends: [
      // ...
      // TODO: Does this work yet for TailwindCSS v4.0?
      tailwind.configs["flat/recommended"],
    ],
    rules: { ... },
  },
  // TODO: Does this work yet for TailwindCSS v4.0?
  {
    files: ["**/*.css"],
    // ...
    languageOptions: {
      tolerant: true, // 🟡 This may be required due to custom syntax that TailwindCSS uses
      customSyntax: tailwindSyntax, // 🟡 This has not been updated yet for TailwindCSS v4.0
    },
  },
]);
```

## Tailwind Readme Snippet

In the project's `README.md` file add everything from the [Tailwind CSS Readme Snippet](../readme-snippets/tailwind-readme.md)

🔑 Also transfer the `./tailwind-theme-setup.md` file and it's assets into a `docs/guides` directory within your project. The readme snippet links to this.
