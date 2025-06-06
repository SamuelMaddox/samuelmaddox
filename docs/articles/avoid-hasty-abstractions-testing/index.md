---
sidebar_position: 2
---

# Avoid Hasty Abstractions Testing

_AUTHOR: Kent C. Dodds_

_POSTED: April 7th, 2019_

_LINK: [https://kentcdodds.com/blog/aha-testing](https://kentcdodds.com/blog/aha-testing)_

The [AHA Programming Principle](../avoid-hasty-abstractions-programming.md) stands for "Avoid Hasty Abstraction." I have specific feelings about how this applies to writing maintainable tests. Most of the tests that I've seen in the wild have been wildly on one side of the spectrum of abstraction: ANA (Absolutely No Abstraction), or completely DRY (Don't Repeat Yourself). (I made up ANA just now).

![The Spectrum of Abstraction](avoid-hasty-abstractions-testing-img1.png)

Finding a sweet spot in the middle of the spectrum of abstraction is key to developing maintainable tests.

## ANA Testing

The best example of "Absolutely No Abstraction" I've seen in testing is for ExpressJS route handlers. For you to understand what I mean when I say "ANA is bad for testing" I'm going to give you a typical test file and ask you to pretend you're going to maintain this codebase and these tests. It's important for you to understand how this route works. You're relieved that there are tests in place which will help you make sure you're not going to break something. So now you're going to use the tests to understand the nuances of the route handler.

Try to read this test and understand the one nuance between the two of them.

:::warning
Don't spend too long on this...
:::

```tsx
import * as blogPostController from "../blog-post";

// load the application-wide mock for the database.
// I guess that means this is AANA (Almost Absolutely No Abstraction)
// but I didn't want to write out a whole db mock for this blog post 😅
jest.mock("../../lib/db");

test("lists blog posts for the logged in user", async () => {
  const req = {
    locale: {
      source: "default",
      language: "en",
      region: "GB",
    },
    user: {
      guid: "0336397b-e29d-4b63-b94d-7e68a6fa3747",
      isActive: false,
      picture: "http://placehold.it/32x32",
      age: 30,
      name: {
        first: "Francine",
        last: "Oconnor",
      },
      company: "ACME",
      email: "francine.oconnor@ac.me",
      latitude: 51.507351,
      longitude: -0.127758,
      favoriteFruit: "banana",
    },
    body: {},
    cookies: {},
    query: {},
    params: {
      bucket: "photography",
    },
    header(name) {
      return {
        Authorization: "Bearer TEST_TOKEN",
      }[name];
    },
  };
  const res = {
    clearCookie: jest.fn(),
    cookie: jest.fn(),
    end: jest.fn(),
    locals: {
      content: {},
    },
    json: jest.fn(),
    send: jest.fn(),
    sendStatus: jest.fn(),
    set: jest.fn(),
  };
  const next = jest.fn();

  await blogPostController.loadBlogPosts(req, res, next);

  expect(res.json).toHaveBeenCalledTimes(1);
  expect(res.json).toHaveBeenCalledWith({
    posts: expect.arrayContaining([
      expect.objectContaining({
        title: "Test Post 1",
        subtitle: "This is the subtitle of Test Post 1",
        body: "This is the body of Test Post 1",
      }),
    ]),
  });
});

test("returns an empty list when there are no blog posts", async () => {
  const req = {
    locale: {
      source: "default",
      language: "en",
      region: "GB",
    },
    user: {
      guid: "0336397b-e29d-4b63-b94d-7e68a6fa3747",
      isActive: false,
      picture: "http://placehold.it/32x32",
      age: 30,
      name: {
        first: "Francine",
        last: "Oconnor",
      },
      company: "ACME",
      email: "francine.oconnor@ac.me",
      latitude: 31.230416,
      longitude: 121.473701,
      favoriteFruit: "banana",
    },
    body: {},
    cookies: {},
    query: {},
    params: {
      bucket: "photography",
    },
    header(name) {
      return {
        Authorization: "Bearer TEST_TOKEN",
      }[name];
    },
  };
  const res = {
    clearCookie: jest.fn(),
    cookie: jest.fn(),
    end: jest.fn(),
    locals: {
      content: {},
    },
    json: jest.fn(),
    send: jest.fn(),
    sendStatus: jest.fn(),
    set: jest.fn(),
  };
  const next = jest.fn();

  await blogPostController.loadBlogPosts(req, res, next);

  expect(res.json).toHaveBeenCalledTimes(1);
  expect(res.json).toHaveBeenCalledWith({
    posts: [],
  });
});
```

Did you find the difference? Yeah! We expect to find a post in the first one and not in the second one! Cool! Great job. But... what causes that? Why does `blogPostController.loadBlogPosts(req, res, next)` call res.json with a blog post in the first one and not in the second one?

If you didn't figure that out, don't feel bad and don't worry, I'll show you later. If you did, you're probably really good at "Where's Wally" and that's my point. Tests like this make it harder than it needs to be to understand and maintain the tests.

Now imagine that there are twenty such tests in a single file. You think it's terrible? Yes, it's pretty bad. Never seen tests like this before? You're lucky! I've seen it a lot. Here's how it gets this way:

1. Engineer Joe joins a team
2. Joe needs to add a test
3. Joe copies a previous test that looks like what they need and modifies it for their use case.
4. Reviewers observe that the tests pass and assume Joe knows what they're talking about.
5. PR is merged.

Here's your litmus test:

> **How easy is it to determine the difference between assertions of two similar tests and what causes that difference?**

Absolutely No Abstraction testing makes this very difficult.

## DRY Testing

I don't have time at the moment to give you a good example of a `DRY` test. Just know that often what happens when people apply `DRY` to anything they typically wind up being harder to maintain due to this process:

1. Engineer Joe joins a team
2. Joe needs to add a test
3. Joes copies a previous test that looks basically exactly like what they need and adds another if statement to the 4. testing utility for their case.
4. Reviewers observe that the tests pass and assume Joe knows what they're talking about.
5. PR is merged.

Another thing that I see a lot in DRY testing is the overuse of `describe` and `it` nesting + `beforeEach`. The more you nest and use shared variables between tests, the harder it is to follow the logic.

## AHA Testing

That first test is absolutely screaming for abstraction (which is the guiding principle for AHA programming). So let's write a thoughtful abstraction for that test. Now try to figure out what makes the difference in these tests:

```tsx
import * as blogPostController from "../blog-post";

// load the application-wide mock for the database.
jest.mock("../../lib/db");

function setup(overrides = {}) {
  const req = {
    locale: {
      source: "default",
      language: "en",
      region: "GB",
    },
    user: {
      guid: "0336397b-e29d-4b63-b94d-7e68a6fa3747",
      isActive: false,
      picture: "http://placehold.it/32x32",
      age: 30,
      name: {
        first: "Francine",
        last: "Oconnor",
      },
      company: "ACME",
      email: "francine.oconnor@ac.me",
      latitude: 51.507351,
      longitude: -0.127758,
      favoriteFruit: "banana",
    },
    body: {},
    cookies: {},
    query: {},
    params: {
      bucket: "photography",
    },
    header(name) {
      return {
        Authorization: "Bearer TEST_TOKEN",
      }[name];
    },
    ...overrides,
  };

  const res = {
    clearCookie: jest.fn(),
    cookie: jest.fn(),
    end: jest.fn(),
    locals: {
      content: {},
    },
    json: jest.fn(),
    send: jest.fn(),
    sendStatus: jest.fn(),
    set: jest.fn(),
  };
  const next = jest.fn();

  return { req, res, next };
}

test("lists blog posts for the logged in user", async () => {
  const { req, res, next } = setup();

  await blogPostController.loadBlogPosts(req, res, next);

  expect(res.json).toHaveBeenCalledTimes(1);
  expect(res.json).toHaveBeenCalledWith({
    posts: expect.arrayContaining([
      expect.objectContaining({
        title: "Test Post 1",
        subtitle: "This is the subtitle of Test Post 1",
        body: "The is the body of Test Post 1",
      }),
    ]),
  });
});

test("returns an empty list when there are no blog posts", async () => {
  const { req, res, next } = setup();
  req.user.latitude = 31.230416;
  req.user.longitude = 121.473701;

  await blogPostController.loadBlogPosts(req, res, next);

  expect(res.json).toHaveBeenCalledTimes(1);
  expect(res.json).toHaveBeenCalledWith({
    posts: [],
  });
});
```

Now can you tell? What's the difference between the first and the second test? In the first our user is in London and in the second our user is in Shanghai! Gee, sure would've been nice if our co-workers had told us we were working on a location-based blogging platform (hey... now that's an interesting product idea 🤔).

By adding just a little mindful abstraction, we've been able to make it much more clear what actually matters in the difference of the inputs and outputs leading to tests which make a LOT more sense and are WAY easier to maintain.

## AHA Testing with React

In a react world, I will sometimes have a renderFoo function that acts like the setup function here. Here's a simple example:

```tsx
import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../login-form";

function renderLoginForm(props) {
  render(<LoginForm {...props} />);
  const usernameInput = screen.getByLabelText(/username/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByText(/submit/i);
  return {
    usernameInput,
    passwordInput,
    submitButton,
    changeUsername: (value) => userEvent.type(usernameInput, value),
    changePassword: (value) => userEvent.type(passwordInput, value),
    submitForm: () => userEvent.click(submitButton),
  };
}

test("submit calls the submit handler", () => {
  const handleSubmit = jest.fn();
  const { changeUsername, changePassword, submitForm } = renderLoginForm({
    onSubmit: handleSubmit,
  });
  const username = "chucknorris";
  const password = "ineednopassword";
  changeUsername(username);
  changePassword(password);
  submitForm();
  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith({ username, password });
});
```

:::warning
I would consider this pre-mature abstraction if you've only got two or three tests in the file that is using it and those tests are short. But if you've got some nuance you're testing (like error states for example), then this kind of abstraction is great.
:::

## Nesting

I'd recommend you give [Avoid Nesting in Tests](avoid-nesting-when-your-testing) a read.

## jest-in-case and test.each

If you're writing tests for a pure function, you're in luck because those are often the easiest to test for. You can seriously simplify your tests by using a simple abstraction that calls out VERY clearly the outputs and inputs.

For (contrived) example:

```tsx
import add from "../add";

test("adds one and two to equal three", () => {
  expect(add(1, 2)).toBe(3);
});

test("adds three and four to equal seven", () => {
  expect(add(3, 4)).toBe(7);
});

test("adds one hundred and two to equal one hundred two", () => {
  expect(add(100, 2)).toBe(102);
});
```

That's pretty simple to follow, but it can be improved with jest-in-case:

```tsx
import cases from "jest-in-case";
import add from "../add";

cases(
  "add",
  ({ first, second, result }) => {
    expect(add(first, second)).toBe(result);
  },
  [
    { first: 1, second: 2, result: 3 },
    { first: 3, second: 4, result: 7 },
    { first: 100, second: 2, result: 102 },
  ]
);
```

I probably wouldn't bother doing this for this simple example, but what's cool about it is that you can add more test cases very easily by simply adding more elements to that array.

This can also be applied to impure functions and modules as well, though it takes a little bit more work.

I personally prefer [jest-in-case](https://github.com/atlassian/jest-in-case) but Jest has a built-in `test.each` functionality that you may find useful.

## Conclusion

Certainly our tests could've been improved by providing better names and/or comments as well, but our simple `setup` abstraction (by the way, that's called a "Test Object Factory") doesn't really need them. So my point is: **it takes less work to write and maintain tests that have mindful abstractions applied to them.**

I hope that's helpful! Good luck!
