---
sidebar_position: 1
---

# The Merits of Mocking

_AUTHOR: Kent C. Dodds_

_POSTED: November 5th, 2018_

_LINK: [https://kentcdodds.com/blog/the-merits-of-mocking](https://kentcdodds.com/blog/the-merits-of-mocking)_

> _"The more your tests resemble the way your software is used, the more confidence they can give you."_  — me

**One of the biggest challenges people face with testing is knowing what to test.** There are lots of reasons for that, but one big, flashing-lights reason is mocking. Many people don't know when to add a mock version of code or have their test run the actual code directly. These are challenges I'll help you work through in the JavaScript Mocking Fundamentals module of my Testing JavaScript course.

**Mocking lets you fake it so you can make it.** If you couldn't have a fake version of certain modules or services, testing the checkout process of an app would cost you a lot of money in credit card fees. Talk about paying a high price for confidence! 🤑 So instead, we make a fake version of that credit card charging service to avoid paying the fees.

But mocking comes with a cost of its own.

**Mocking severs the real-world connection between what you're testing and what you're mocking.** Even if we have confidence that our code works with our fake version of the credit card service, we can't have 100% confidence that our code will work in production with the real version of the credit card service.

**When you mock something, you're making a trade-off.** You're trading confidence for something else. For me, that something else is usually practicality — meaning I wouldn't be able to test this thing at all, or it may be pretty difficult/messy, without mocking. (Like in our credit card example.)

**In my UI unit and integration tests, I have a rule.** I never make actual network calls; instead, I'll mock the server response by mocking the module responsible for making the network calls. I'll also mock animation libraries to avoid waiting for animations before elements are removed from the page. Other than that, most of my UI tests are using the real production code. For E2E tests, I avoid mocking anything (with the exception of the backend hitting fake or test services and not actual credit card services, for example).

**Saving a few milliseconds per test?** That's not a good reason to mock. People like shallow rendering — component mocking to the max — because it's faster. That's true, but we're talking milliseconds faster. If it takes a long time to render your entire component tree, sounds to me like you have a real performance bug in your software that needs to be addressed. I realize that time adds up (50ms per test \* 1000 tests = 50 seconds). But the less you mock, the fewer tests you need, and trading confidence for a minute or two faster test suite is a bad trade. 😵
