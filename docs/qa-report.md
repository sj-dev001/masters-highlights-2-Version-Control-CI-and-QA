# QA Report

## Project Tested

Study Sprint Planner

## Test Environment

- Browser: Chrome, Edge, or Firefox
- Node.js: Version 22 recommended
- Operating system: Windows, macOS, or Linux

## Automated Checks

| Check | Command | Expected Result |
| --- | --- | --- |
| Unit tests | `npm test` | All Vitest tests pass |
| Linter | `npm run lint` | No ESLint errors |
| Type check | `npm run typecheck` | No TypeScript errors |
| Build | `npm run build` | Production build completes |
| Deploy | GitHub Actions | GitHub Pages deployment succeeds after push to `main` |
| Full check | `npm run check` | Lint, type check, tests, and build all pass |

## Manual QA Checklist

- The homepage loads without errors.
- The default tasks appear in the task list.
- A user can add a task with a name and priority.
- A user cannot add a task with fewer than 3 characters.
- Checking a task updates the completed count.
- Deleting a task removes it from the list and updates the totals.
- Progress percentage updates correctly.
- The reset button restores the starter tasks.
- The layout remains readable on a phone-sized screen.
- The deployed GitHub Pages URL loads the app correctly.

## Peer Review Simulation

Example review comments:

- "The task summary function is clear and has useful tests."
- "Please rename this variable so beginners can understand its purpose."
- "The new feature works, but the README should mention how to test it."
- "Can you add one test for an empty task list?"

## Common Mistakes to Avoid

- Committing directly to `main` during team work.
- Writing commit messages like `stuff` or `final final`.
- Ignoring failing CI checks.
- Changing code without running tests.
- Forgetting to pull the latest version before starting work.
- Leaving merge conflict markers in files.
- Copying code without understanding what it does.

## QA Result

The project is ready for academic demonstration when `npm run check` passes locally, the GitHub Actions workflow passes on GitHub, and the GitHub Pages deployment opens successfully.
