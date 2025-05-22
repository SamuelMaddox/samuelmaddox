# CI/CD Setup

- Azure app configuration
  - environment variables
  - feature flags
- versioning and git branch strategy
  - https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development
- conventional commits
  - https://www.conventionalcommits.org/en/v1.0.0/
  - https://www.npmjs.com/package/commitizen
  - https://commitizen-tools.github.io/commitizen/
  - https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits
- Example of a CONTRIBUTING.md file: https://github.com/commitizen/cz-cli/blob/HEAD/CONTRIBUTING.md

### Software Environments

brainstorming about pipelines and versioning

- simple environments, dev, qa, uat, staging, prod
- complex environments, feat1, feat2, etc (dynamically many feature env maybe?), dev, qa, uat, staging, prod
  - qa on stories should be be done in feat environments before approval, and dev/qa environments are for general experimenting or testing.
- in any repo, every time a PR is completed into main, an artifact is built and stored somewhere
- a single pipeline is responsible for deploy a full stack environment using those artifacts
- artifacts need to be versioned somehow, and preferable all artifacts share same version. is there tagging for artifacts? some artifacts may be used for multiple versions
- pipeline needs to be configurable as to what version to use for each environment. azure app configuration service maybe?
- feature artifacts on pr creation (maybe? require manual approval before build?)
  - what about version? if they can be tagged with multiple version then they should be in sync with other repo feature builds maybe? shared branch names?
- auto deletion of stale artifacts. criteria for what constitutes "stale" is TBD

### Environment Configuration

- local environment and higher environments. Maybe local can switch between a normal dev environment and a feature dev environment
- what about secrets?
- feature flag management?

### GitHub Actions & GitHub Rulesets

[Deleting a branch used for a pull request](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request#deleting-a-branch-used-for-a-pull-request)

[About rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)

[Available Rules for rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets)

Ruleset I picked

- [x] Restrict Creations
- [x] Restrict Deletions
- [x] Require Linear History
- [x] Require a pull request before merging
  - [x] Required Approvals
  - [x] Dismiss stale pull request approvals when new commits are pushed
  - [x] Require approval of the most recent reviewable push
  - [x] Require conversation resolution before merging
  - [x] Request pull request review from Copilot
- [x] Block force pushes

### Build Pipeline

- Should fail if feature branch has diverged from main
  - Some definitions.
    - PR branch is `ahead` of main means there are commits in the PR branch that are NOT in the main branch
    - PR branch is `behind` of main means there are commits in main that are NOT in the PR branch
    - PR branch has `diverged` from main when the PR branch is both `ahead` of and `behind` the main branch.
  - Interesting fact, PR status checks or build validations run on a special merge commit that represents what the result would be if the PR branch were merged into the base branch (e.g., main). This means it's possible for a status check to pass locally when ran for a PR branch, but fail in the PR status check.
    - Adding a check to ensure that branches have not diverged helps prevent situations where status checks pass locally but fail in the pipeline due to differences between the feature branch and the main branch.
- If feature branch is ahead of the main branch, it should be safe to use the artifact that was built during the PR yes? Don't need to build again after merge?

### VS Code Extensions

add these as a recommended extension if using github actions

- `github.vscode-github-actions`
- `github.vscode-pull-request-github`

### Docusaurus

- Update `url` and `baseUrl` properties in the `docusaurus.config.ts` file
- https://docusaurus.io/docs/deployment
  - This link should also be included in the project documentation
- maybe this? https://docusaurus.io/docs/deployment#deploying-to-github-pages
- `docusaurus.config.ts`
  - `showLastUpdateTime` requires access to git history during the build, so will not work correctly with shallow clones (a common default for CI systems)

### Idea

What if PR's are auto deployed to the same dev environment but at a route named `/repo/branch-name`? basically thinking about deploy feature branches before merged. what about BE deploys? local should be configure if it's normal dev or feature dev.
