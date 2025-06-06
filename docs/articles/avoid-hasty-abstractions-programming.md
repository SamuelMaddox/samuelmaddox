---
sidebar_position: 5
---

# Avoid Hasty Abstractions Programming

_AUTHOR: Kent C. Dodds_

_POSTED: June 22nd, 2020_

_LINK: [https://kentcdodds.com/blog/aha-programming](https://kentcdodds.com/blog/aha-programming)_

## DRY

[DRY (an acronym for "Don't Repeat Yourself")](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), is an old software principle that Wikipedia sums up like this:

> "Every piece of knowledge must have a single, unambiguous, authoritative representation within a system"

This is generally a good practice that I typically subscribe to (though less dogmatically than that definition seems to encourage). The biggest problem I've had with [code duplication](https://en.wikipedia.org/wiki/Duplicate_code) (aka copy/paste, it's basically the antithesis of DRY) is discovering a bug in one place, fixing it, then realizing that same bug was elsewhere and having to fix it there as well.

Once, I inherited a codebase that made very heavy use of code duplication and one time I had to fix a bug in eight different places! 😱 Talk about irritating! Abstracting that code into a function that could be called anywhere it was needed would've helped out a LOT.

## WET

There's another concept that people have referred to as WET programming which stands for "Write Everything Twice." That's similarly dogmatic and over prescriptive. Conlin Durbin has defined this as:

> "You can ask yourself "Haven't I written this before?" two times, but never three."

In that same codebase I mentioned above, there was some over-abstraction that was even more harmful than duplication. It was AngularJS code and for several AngularJS controllers, the code passed `this` to a function which would monkey-patch methods and properties onto `this` in a way enhancing the controller instance with certain abilities. A sort of pseudo-inheritance thing I guess. It was SUPER confusing, hard to follow, and I was terrified to make any changes to that area of the codebase.

The code was reused in lots more than three places, but the abstraction was bad and I wished that the code had been duplicated instead.

## AHA 💡

AHA (pronounced "Aha!" like you just made a discovery) is an acronym I got from Cher Scarlett which stands for

> Avoid Hasty Abstractions

The way I think of this principle is beautifully described by Sandi Metz who wrote:

> "prefer duplication over the wrong abstraction"

Here's another important related principle that I want to add:

> "Optimize for change first"

I think the key is that we don't know what the future of code will be. We could spend weeks optimizing code for performance, or coming up with the best API for our new abstraction, only to find out the next day that we made incorrect assumptions and the API needs a complete rework or the feature the code was written for is no longer needed. We don't know for sure. All we can really be sure of is that things will probably change, and if they never do then we wont touch the code anyway so who cares what it looks like?

Now, don't get me wrong, I'm not suggesting anarchy. I'm just suggesting that we should be mindful of the fact that we don't really know what requirements will be placed upon our code in the future.

So I'm fine with code duplication until you feel pretty confident that you know the use cases for that duplicate code. What parts of the code are different that would make good arguments to your function? After you've got a few places where that code is running, the commonalities will scream at you for abstraction and you'll be in the right frame of mind to provide that abstraction.

If you abstract early though, you'll think the function or component is perfect for your use case and so you just bend the code to fit your new use case. This goes on several times until the abstraction is basically your whole application in if statements and loops 😂😭

A few years ago, I was hired to review a company's codebase and I used a tool called jsinspect to identify chunks of copy/pasted code to show them opportunities for abstraction. They had a bunch of duplicated code and from my perspective looking in, it was obvious what the abstractions should look like.

**I think the big takeaway** about "AHA Programming" is that you shouldn't be dogmatic about when you start writing abstractions but instead write the abstraction when it feels right and don't be afraid to duplicate code until you get there.

## Conclusion

I feel like a measured and pragmatic approach to software principles is important. That's why I prefer `AHA` over `DRY` or `WET`. It's intended to help you be mindful of your abstractions without giving hard-fast rules to when it is or isn't ok to abstract some code into a function or module.

I hope that's helpful to you. Good luck!
