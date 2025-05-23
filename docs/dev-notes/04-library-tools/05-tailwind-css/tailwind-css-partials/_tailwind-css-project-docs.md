# Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

:::tip
Verify that designs utilize Tailwind defaults; except for where this application has overwritten or extended Tailwind's preflight or theme defaults. Custom spacing, sizing, colors, typography, etc, should rarely be needed
Useful Links:

- [https://tailwindcss.com/docs/preflight](https://tailwindcss.com/docs/preflight)
- [https://tailwindcss.com/docs/preflight#extending-preflight](https://tailwindcss.com/docs/preflight#extending-preflight)
- [https://tailwindcss.com/docs/theme](https://tailwindcss.com/docs/theme)
- [https://tailwindcss.com/docs/theme#customizing-your-theme](https://tailwindcss.com/docs/theme#customizing-your-theme)
- [https://tailwindcss.com/docs/adding-custom-styles](https://tailwindcss.com/docs/adding-custom-styles)

:::

## clsx() Utility

:::info
Source: [clsx() Tailwind Support](https://github.com/lukeed/clsx?tab=readme-ov-file#tailwind-support)
:::

The [`clsx()`](https://github.com/lukeed/clsx) utility is useful for constructing `className` strings conditionally. You may find the `clsx/lite` module useful within Tailwind contexts. This is especially true if/when your application only composes classes in this pattern:

```ts
import clsx from "clsx/lite";

clsx("text-base", props.active && "text-primary", props.className);
```

The [Tailwind CSS IntelliSense VS Code Extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) requires the following setting to be configured in VS Code `settings.json` in order for class autocompletion to continue working when using `clsx()`

```json
{
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

This setting has been added to the shared workspace settings file: `.vscode/settings.json`

## Official Prettier Plugin

[`prettier-plugin-tailwindcss`](https://www.npmjs.com/package/prettier-plugin-tailwindcss) automatically sorts classes based on their [recommended class order](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted). Refer to plugin's documentation if it doesn't work for classes in function calls or template literals, or if it does something that the team finds annoying.

## 🚧 Unofficial ESLint Plugin

:::warning
As of 04/08/2025

- There is no official ESLint plugin released for Tailwind CSS.
- There is the unofficial but decently popular [`eslint-plugin-tailwindcss`](https://www.npmjs.com/package/eslint-plugin-tailwindcss). However it is NOT YET compatible with Tailwind v4.0
- `@eslint/css` has a language option for custom TailwindCSS syntax. However, it has not been updated for TailwindCSS 4.0. That section of the config might need to be commented out until the language option has been updated

:::

🚧 TODO: More comments may be useful here if/when this plugin works for Tailwind v4.0. Or maybe this section isn't needed.

## 🚧 Theme Configuration

🟡 TODO: Verify the link to this article and its assets work once this readme snippet is transferred to the project readme.

Our theme was created by following the [Tailwind Theme Setup Guide](docs/guides/tailwind-theme-setup.md)

## Using Color Utilities

:::info
Source: [https://tailwindcss.com/docs/colors#using-color-utilities](https://tailwindcss.com/docs/colors#using-color-utilities)
:::

Use color utilities like `bg-white`, `border-pink-300`, and `text-gray-950` to set the different color properties of elements in your design:

| Utility         | Description                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| bg-\*           | Sets the [background color](https://tailwindcss.com/docs/background-color) of an element                      |
| text-\*         | Sets the [text color](https://tailwindcss.com/docs/text-color) of an element                                  |
| decoration-\*   | Sets the [text decoration color](https://tailwindcss.com/docs/text-decoration-color) of an element            |
| border-\*       | Sets the [border color](https://tailwindcss.com/docs/border-color) of an element                              |
| outline-\*      | Sets the [outline color](https://tailwindcss.com/docs/outline-color) of an element                            |
| shadow-\*       | Sets the color of [box shadows](https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color)             |
| inset-shadow-\* | Sets the color of [inset box shadows](https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color) |
| ring-\*         | Sets the color of [ring shadows](https://tailwindcss.com/docs/box-shadow#setting-the-ring-color)              |
| inset-ring-\*   | Sets the color of [inset ring shadows](https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color)  |
| accent-\*       | Sets the [accent color](https://tailwindcss.com/docs/accent-color) of form controls                           |
| caret-\*        | Sets the [caret color](https://tailwindcss.com/docs/caret-color) in form controls                             |
| fill-\*         | Sets the [fill color](https://tailwindcss.com/docs/fill) of SVG elements                                      |
| stroke-\*       | Sets the [stroke color](https://tailwindcss.com/docs/stroke) of SVG elements                                  |

## Using Theme Variables

:::info
Source: [https://tailwindcss.com/docs/theme#theme-variable-namespaces](https://tailwindcss.com/docs/theme#theme-variable-namespaces)
:::

Theme variables are defined in namespaces and each namespace corresponds to one or more utility class or variant APIs.

| Namespace         | Utility classes                                                       |
| ----------------- | --------------------------------------------------------------------- |
| --color-\*        | Color utilities like bg-red-500, text-sky-300, and many more          |
| --font-\*         | Font family utilities like font-sans                                  |
| --text-\*         | Font size utilities like text-xl                                      |
| --font-weight-\*  | Font weight utilities like font-bold                                  |
| --tracking-\*     | Letter spacing utilities like tracking-wide                           |
| --leading-\*      | Line height utilities like leading-tight                              |
| --breakpoint-\*   | Responsive breakpoint variants like sm:\*                             |
| --container-\*    | Container query variants like @sm:\* and size utilities like max-w-md |
| --spacing-\*      | Spacing and sizing utilities like px-4, max-h-16, and many more       |
| --radius-\*       | Border radius utilities like rounded-sm                               |
| --shadow-\*       | Box shadow utilities like shadow-md                                   |
| --inset-shadow-\* | Inset box shadow utilities like inset-shadow-xs                       |
| --drop-shadow-\*  | Drop shadow filter utilities like drop-shadow-md                      |
| --blur-\*         | Blur filter utilities like blur-md                                    |
| --perspective-\*  | Perspective utilities like perspective-near                           |
| --aspect-\*       | Aspect ratio utilities like aspect-video                              |
| --ease-\*         | Transition timing function utilities like ease-out                    |
| --animate-\*      | Animation utilities like animate-spin                                 |
