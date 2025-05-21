## Case Insensitive Tab Completion

By default, Zsh "Tab Completion" may be case sensitive. To make it case insensitive when typing lower case letters, open your `~/.zshrc` file in an editor and append the following lines:

```bash
autoload -Uz compinit && compinit
zstyle ':completion:*' matcher-list 'm:{a-z}={A-Za-z}'
```
