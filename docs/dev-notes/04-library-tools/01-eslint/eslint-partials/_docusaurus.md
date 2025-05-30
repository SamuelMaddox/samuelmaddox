## Docusaurus

### Docusaurus `.gitignore`

Merge the `./docusaurus/.gitignore` into the root `.gitignore` so that eslint properly ignores the ignored docusaurus files. Example:

```txt title=".gitignore"
# ...

# Docusaurus
/docusaurus/node_modules
/docusaurus/build
.docusaurus
.cache-loader

```

### Docusaurus plugin

:::warning
This plugin doesn't appear to be compatible with the [Flat Configuration](https://eslint.org/docs/latest/use/configure/configuration-files) format of ESLint v9, and the rules it defines are not that important for most use cases
:::

:::tip
Review the [Docusaurus ESLint Plugin Documentation](https://docusaurus.io/docs/api/misc/@docusaurus/eslint-plugin) for changes.
:::
