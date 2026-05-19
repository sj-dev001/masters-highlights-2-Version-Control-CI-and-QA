# Git and GitHub Tutorial

## 1. Initialize the Repository

```bash
git init
git status
```

`git init` starts version control. `git status` shows which files are changed, staged, or ready to commit.

## 2. Stage and Commit Changes

```bash
git add .
git commit -m "Add first version of the planner app"
```

Staging chooses files for the next snapshot. A commit saves that snapshot with a message.

## 3. Connect to GitHub

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git branch -M main
git push -u origin main
```

The remote is the GitHub copy of the project. Pushing uploads local commits.

## 4. Create a Branch

```bash
git checkout -b feature/add-empty-state
```

A branch lets you work on one idea without changing the stable `main` branch.

## 5. Pull the Latest Changes

```bash
git checkout main
git pull origin main
```

Pull before starting new work so your computer has the latest team changes.

## 6. Open a Pull Request

Push your branch:

```bash
git push -u origin feature/add-empty-state
```

Then open GitHub and create a pull request. Ask a peer to review:

- Is the code easy to understand?
- Do the tests pass?
- Does the feature work in the browser?
- Is the documentation updated if needed?

## 7. Resolve a Merge Conflict

If Git shows conflict markers, edit the file and keep the correct final version:

```text
<<<<<<< HEAD
Current version
=======
Incoming version
>>>>>>> feature-branch
```

After fixing the file:

```bash
git add .
git commit -m "Resolve merge conflict"
```

## Beginner Commit Message Examples

- `Add task form markup`
- `Style planner dashboard`
- `Fix progress percentage calculation`
- `Add tests for task sorting`
- `Update QA report`
