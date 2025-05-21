# Testing File Structure

I have found that files containing many tests become impossible to parse. It's difficult, if not impossible, to parse what has been tested and what has not. Since learning to [Avoid Nesting When You're Testing](TODO: need link to article) I have found I use `describe()` and `beforeEach()` a lot less. Not using these functions has allowed me to organize tests by folders and files (where files contain no more than 5 tests, though usually less). Seeing a list of filenames in a file tree has helped me get a better sense of what has and has not been tested.

```txt
📁 __tests__
| 📁 username
| | 📄 should-not-contain-invalid-characters.test.ts
| | 📄 should-have-min-length.test.ts
| | 📄 should-have-max-length.test.ts
| 📁 password
| | 📄 should-not-contain-invalid-characters.test.ts
| | 📄 should-have-min-length.test.ts
| | 📄 should-have-max-length.test.ts
```
