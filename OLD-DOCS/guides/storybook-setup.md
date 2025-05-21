# Storybook Setup <!-- omit in toc -->

- [Setup](#setup)
  - [Install Storybook](#install-storybook)
  - [Update Script Name](#update-script-name)
  - [Remove Example Stories](#remove-example-stories)
  - [Remove Onboarding Addon](#remove-onboarding-addon)
  - [Update ESLint Config](#update-eslint-config)
  - [Setup Storybook Addons](#setup-storybook-addons)
  - [CSS and Tailwind Integration](#css-and-tailwind-integration)
  - [Autodocs By Default](#autodocs-by-default)
- [Storybook Readme Snippet](#storybook-readme-snippet)
- [TODO: ---](#todo----)
- [TODO: CI/CD Publish Storybook](#todo-cicd-publish-storybook)
- [TODO: TESTING](#todo-testing)

## Setup

### Install Storybook

Using `pnpm` commands, follow Storybook's [installation instructions](https://storybook.js.org/docs/get-started/install). Storybook also includes [framework specific](https://storybook.js.org/docs/get-started/frameworks) instructions that are worth reviewing.

> [!WARNING]
> TODO: This now installs vitest, coverage-v8, and playwright packages if none are found. What happens if playwright or testing library exists before adding storybook?

### Update Script Name

In the `package.json`, modify the storybook scripts to the following:

```json
  "storybook": "storybook dev --no-open -p 6006",
  "storybook:build": "storybook build"
```

### Remove Example Stories

Delete `src/stories`

### Remove Onboarding Addon

Remove `addon-onboarding` by following the [uninstalling addon-onboarding documentation](https://github.com/storybookjs/storybook/tree/next/code/addons/onboarding#uninstalling).

### Update ESLint Config

Remove the following from the `package.json`:

```json
  "eslintConfig": {
    "extends": [
      "plugin:storybook/recommended"
    ]
  }
```

According to the [eslint-plugin-storybook documentation](https://github.com/storybookjs/eslint-plugin-storybook), add the following to the `eslint.config.mjs` file:

```js
import storybook from "eslint-plugin-storybook";

export default defineConfig([
  // ...
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs,cjs,mts,cts}"],
    extends: [
      // ...
      storybook.configs["flat/recommended"],
    ],
    // ...
  },
  // ...
]);
```

### Setup Storybook Addons

> [!TIP]
>
> - [Automatically Install Addons](https://storybook.js.org/docs/addons/install-addons#automatic-installation)

Run the following commands to install the [A11Y](https://storybook.js.org/addons/@storybook/addon-a11y) and [Themes](https://storybook.js.org/addons/@storybook/addon-themes) addons:

```terminal
pnpm dlx storybook@latest add @storybook/addon-a11y
pnpm dlx storybook@latest add @storybook/addon-themes
```

### CSS and Tailwind Integration

> [!WARNING]
> As of 2/10/2025 the Tailwind Integration Guide has NOT been updated for tailwind v4.0. Use it as a general approximation as to what to do, but be cautious of following it verbatim.

CSS intergration, especially for global styles, might need to reference the [Styling and CSS documentation](https://storybook.js.org/docs/configure/styling-and-css)

If using Tailwind CSS then follow the [Tailwind Integration Guide](https://storybook.js.org/recipes/tailwindcss).

⚠️ If you followed our Tailwind Theme setup instructions found in the [Tailwind Setup](./tailwind-setup.md) then for the Storybook Tailwind Integration you should use the [`withThemeByDataAttribute`](https://github.com/storybookjs/storybook/blob/next/code/addons/themes/docs/api.md#withthemebydataattribute) for Storybook decorators instead of the [`withThemeByClassName`](https://github.com/storybookjs/storybook/blob/next/code/addons/themes/docs/api.md#withthemebyclassname)

```ts
const preview: Preview = {
  . . .

  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
      attributeName: "data-theme",
    }),
  ],

  . . .
};
```

### Autodocs By Default

Add the following to the `.storybook/preview.ts` file:

```ts
const preview: Preview = {
  . . .
  tags: ["autodocs"],
};
```

## Storybook Readme Snippet

In the project's `README.md` file add everything from the [Storybook Readme Snippet](../readme-snippets/storybook-readme.md)

## TODO: ---

---

---

---

---

TODO: would `"@storybook/addon-interactions"` be useful?

## TODO: CI/CD Publish Storybook

https://storybook.js.org/docs/sharing/publish-storybook

## TODO: TESTING

> [!WARNING]
> i'm a little skeptical about how this works and if it's actually a good idea or not. feels like it might muddy up stories, and isn't fully integratedable with normal unit tests? might be better to stick with testing library and/or playwright? More research and experimenting is needed. Though the stories being imported into normal tests might be worth a look as they both often setup the same component state
>
> - https://storybook.js.org/docs/writing-tests/import-stories-in-tests/stories-in-unit-tests
> - https://storybook.js.org/docs/writing-tests/import-stories-in-tests/stories-in-end-to-end-tests#with-playwright

TODO: stories can be imported into tests https://storybook.js.org/docs/writing-tests/import-stories-in-tests/stories-in-unit-tests

TODO: component tests can be written using storybook. Storybook utilizes jest, testing library, and playwright for this. https://storybook.js.org/docs/writing-tests/component-testing

- https://jestjs.io/
- https://testing-library.com/
- https://playwright.dev/

TODO: story tests can run in the CI/CD layer using the Test runner https://storybook.js.org/docs/writing-tests/test-runner

TODO: accessibility tests can run in the CI/CD layer if the Test Runner is used: https://storybook.js.org/docs/writing-tests/accessibility-testing#automate-accessibility-tests-with-test-runner

TODO: I see something about a11y being able to fail CI during violations? what's that about?
