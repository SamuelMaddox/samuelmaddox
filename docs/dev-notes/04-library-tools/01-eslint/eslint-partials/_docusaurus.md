## Docusaurus

### Docusaurus `.gitignore`

Add the following ignore file path to your `eslint.config.mjs` config.

```ts title="eslint.config.mjs {2-4,8}
const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));
const docusaurusGitignorePath = fileURLToPath(
  new URL("docusaurus/.gitignore", import.meta.url)
);

export default defineConfig([
  includeIgnoreFile(gitignorePath),
  includeIgnoreFile(docusaurusGitignorePath),
  /* ... */
]);
```

### Docusaurus plugin

:::warning
This plugin doesn't appear to be compatible with the [Flat Configuration](https://eslint.org/docs/latest/use/configure/configuration-files) format of ESLint v9, and the rules it defines are not that important for most use cases
:::

:::tip
Review the [Docusaurus ESLint Plugin Documentation](https://docusaurus.io/docs/api/misc/@docusaurus/eslint-plugin) for changes.
:::
