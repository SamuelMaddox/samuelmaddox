# Pre-Commit Hooks

## Install Husky

:::tip
Review the [Official Husky Installation Instructions](https://typicode.github.io/husky/get-started.html) for changes.
:::

Install husky using the following command:

```terminal
pnpm add --save-dev husky
```

Then initialize husky:

```terminal
pnpx husky init
```

## Install Lint-Staged

:::tip
Review the [Official Lint-Staged Installation README.md](https://github.com/lint-staged/lint-staged) for changes.
:::

Install lint-staged using the following command:

```terminal
pnpm add --save-dev husky
```

## Configure

Add a `.lintstagedrc.json` file and add the following, and maybe consider adding a `tsc` script if it's not included in the build script:

```json title=".lintstagedrc.json"
{
  "*": ["pnpm prettier", "pnpm eslint"]
}
```

Modify the `.husky/pre-commit` file to the following:

```txt title=".husky/pre-commit"
pnpx linst-staged
```

## Project Documentation

### 1. Update `01-scripts.md` Documentation

Add the following to the `docusaurus/docs/01-scripts.md` documentation

```md title="docusaurus/docs/01-scripts.md"
| `pnpm run prepare` | This script runs automatically after you install dependencies. It triggers Husky’s installation process, which sets up Git hooks locally.|
```

### 2. Create `94-pre-commit hooks` Documentation

TODO: Readme

---

````markdown title="docusaurus/docs/94-pre-commit-hooks"
# Pre-Commit Hooks

:::warning
Committing can seem to take a while if using the Git GUI in VS Code. This is because pre-commit hooks are running in the background before the commit is executed. If you're committing in the terminal you'll see the pre-commit hooks running.
:::

## About Pre-Commit Hooks

A **pre-commit** hook is a script that runs automatically before a commit is finalized in Git. It’s used to catch issues early (like lint errors or formatting problems) by running checks or commands before code is committed. If the script fails, the commit is blocked.

## About Husky

:::info
[Official Husky Installation Instructions](https://typicode.github.io/husky/get-started.html)
:::

**Husky** is a tool that makes it easy to manage Git hooks (like pre-commit) in JavaScript projects. It lets you define scripts that run at various points in the Git workflow (e.g., before commits, before pushes) by placing executable files in the `.husky` directory.

The `"prepare": "husky"` script in your `package.json` ensures Husky is set up after every install; which in turns ensures git hooks are configured for you locally on your machine.

## About Lint-Staged

:::info
[Official Lint-Staged Installation README.md](https://github.com/lint-staged/lint-staged)
:::

**lint-staged** is a tool that runs linters (or any scripts) only on files that are staged for commit. This makes pre-commit checks fast and efficient, since only changed files are checked, not the whole codebase.

## Configure Git Hooks

- The `.husky/pre-commit` file contains the script that runs `lint-staged`.
- The `lintstagedrc.json` file describes what scripts to run for what glob patterns.

## Bypassing Pre-Commit Hooks

you can bypass `pre-commit` hooks using the `--no-verify` option. Example:

```shell
`git commit -m "yolo" --no-verify`
```
````
