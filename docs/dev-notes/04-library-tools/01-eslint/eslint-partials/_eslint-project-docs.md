# ESLint

## What is ESLint

[ESLint](https://eslint.org/) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

## No Enums Custom Rule

Our eslint config defines a custom rule that forbids the use of `enums`. The reason for this rule is best explained by this article: [Why you should use string literal unions over enums in TypeScript](../99-articles/why-you-should-use-string-literal-unions/index.md).

## Print Full Config

If you want to see the final rule set, all plugins, and names of all extended configs, use one of the following commands:

- Using npx: `npx eslint --print-config src/file.tsx > tmp.config.json`

- Using pnpx: `pnpx eslint --print-config src/file.tsx > tmp.config.json`

## Disable Node

To disable a line of code do the following:

```js
// Explanation of why there is a disable statement
// eslint-disable-next-line no-console
console.log("bar");
```

To disable a block of code do the following:

```js
// Explanation of why there is a disable statement
/* eslint-disable no-console */
console.log("bar");
/* eslint-enable no-console */
```

## Disable Linting Conventions

Please follow these 2 conventions When disabling a line or block of code:

**Convention 1** - Only disable the offending rule, not all of eslint. Example:

**Good** = `/* eslint disable no-console */`
**Bad** = `/* eslint disable */`

**Convention 2** - Provide a description explaining why the rule is disabled

The description must come after the configuration and needs to be separated from the configuration by two or more consecutive - characters. For example:

```js
// eslint-disable-next-line no-console -- Here's a description about why this configuration is necessary.
console.log("hello");

/* eslint-disable-next-line no-console --
 * Here's a very long description about why this configuration is necessary
 * along with some additional information
 **/
console.log("hello");
```

## Ignore root files or directories

See ESLint documentation on [Ignoring Files and Directories](https://eslint.org/docs/latest/use/configure/ignore)
