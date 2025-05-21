# Prettier

:::tip
Review the [Official Prettier Installation Instructions](https://prettier.io/docs/en/install) for changes.
:::

## Installation

Install prettier using the following command:

```terminal
pnpm add --save-dev --save-exact prettier
```

Then install `prettier-plugin-organize-imports`

```terminal
pnpm add --save-dev prettier-plugin-organize-imports
```

Finally, create a `.prettierrc` file and add the following:

```json title="prettierrc"
{
  "plugins": ["prettier-plugin-organize-imports"]
}
```

## Script

Add the following scripts to the project's `package.json` file:

```json
"prettier": "prettier --write ./",
"prettier:check": "prettier --check ./",
```

## VS Code Extension

Add the following to the `.vscode/extensions.json` file.

```json title=".vscode/extensions.json"
{
  "recommendations": [
    . . .
    "esbenp.prettier-vscode",
  ]
}
```

## VS Code Settings

:::tip
Most IDE's can be configured to format files on save according to the prettier style guide.
:::

Add the following to the `.vscode/settings.json` file.

```json title=".vscode/settings.json"
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## Project Documentation

### 1. Update `01-scripts.md` Documentation

Add the following to the `docusaurus/docs/01-scripts.md` documentation

```md title="docusaurus/docs/01-scripts.md"
| `pnpm run prettier` | Format files to conform to the Prettier Style Guide |
| `pnpm run prettier:check` | Check if files conforms to the Prettier Style Guide without making changes. Exits with an error status if files require re-formatting |
```

### 2. Update `98-vs-code-extensions.md` Documentation

Add the follow to the `docusaurus/docs/98-vs-code-extensions.md` documentation

```md title="docusaurus/docs/98-vs-code-extensions.md"
| [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) | Used to automatically format code files to a consistent style |
```

### 3. Create `96-prettier.md` Documentation

````markdown title="docusaurus/docs/96-prettier.md"
# Prettier

## What is Prettier

Prettier is used to format our code to conform to a consistent style.

## Prettier Ignore Node

In some cases prettier will reformat code that we don't want reformated. We can use `// prettier-ignore` to exclude the next node from formatting. For example:

```js
matrix(1, 0, 0, 0, 1, 0, 0, 0, 1);
```

will be transformed to:

```js
// Prettier forces this to be a single line, which makes this harder to read
// prettier-ignore
matrix(
  1, 0, 0,
  0, 1, 0,
  0, 0, 1
)
```

## Prettier Disable Conventions

When disabling a line or block of code please provide a note explaining why the rule is disabled
````
