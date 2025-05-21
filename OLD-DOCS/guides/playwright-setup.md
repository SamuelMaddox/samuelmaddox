# Playwright Setup

- vs code debugger setup, share launch configuration using the `.vscode` folder
- how to view code coverage
- accessibility testing, (a11y)
  - https://playwright.dev/docs/accessibility-testing
- testing articles

## Old Readme

````md
## Testing

### React Testing Library

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/#the-problem)

### Run Tests

By default, Jest will only run the tests related to files changed since the last commit. To run tests use the following command:

```terminal
yarn test
```

To display individual test results with the test suite hierarchy run this command:

```terminal
yarn test:verbose
```

### View Test Coverage

> NOTE: Tests run much slower with coverage so it is recommended to run it separately from your normal workflow.

To create or update a test coverage report run the following command:

```terminal
yarn test:coverage
```

This will display coverage in the terminal. It will also create a coverage report at `./coverage/lcov-report/index.html`. This can be opened in the browser. Note that coverage reports are ignored by `git`
````
