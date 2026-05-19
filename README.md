# Version Control, CI, and QA Student Project

This project introduces high school students to practical software engineering workflows using Git, GitHub, Continuous Integration, GitHub Pages deployment, automated testing, linting, type checking, and basic Quality Assurance.

Students build and maintain a small **Study Sprint Planner**: a React + TypeScript app for planning a short learning sprint. The app lets learners add tasks, assign priorities, mark tasks complete, delete tasks, reset demo data, and view total, completed, and progress summary metrics. The codebase is intentionally compact, visually polished with Tailwind CSS, and structured so students can practice the same professional habits teams use in real projects.

The aim is not only to make a working app. Students use the app as a shared codebase for practicing version control, pull requests, CI checks, QA documentation, and GitHub Pages deployment.

## Live App

https://sj-dev001.github.io/masters-highlights-2-Version-Control-CI-and-QA/

## Learning Goals

- Use Git to save project history with meaningful commits.
- Collaborate through branches, pull requests, and peer review.
- Run automated checks with GitHub Actions.
- Write Vitest unit tests for important logic.
- Use TypeScript checks to catch type errors before deployment.
- Use ESLint to catch common TypeScript and React mistakes.
- Deploy a production build to GitHub Pages.
- Practice QA with checklists, reviews, and reports.

## Project Structure

```text
.
├── .github/workflows/ci.yml
├── .gitignore
├── docs/
│   ├── git-tutorial.md
│   ├── qa-report.md
│   ├── reflection-report.md
│   ├── screenshots.md
│   └── submission-checklist.md
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   └── tasks.ts
├── tests/
│   └── tasks.test.ts
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

Key areas:

- `src/App.tsx` contains the Study Sprint Planner interface and React state.
- `src/tasks.ts` contains task data, summary calculations, sorting, creation, toggling, and deletion helpers.
- `tests/tasks.test.ts` verifies the task helper behavior with Vitest.
- `docs/` contains the student-facing Git, QA, screenshot, checklist, and reflection materials.
- `.github/workflows/ci.yml` runs the quality checks and deploys the built site to GitHub Pages.

## Run the Project Locally

Install Node.js first, then run:

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal. Usually it is:

```text
http://localhost:5173
```

## Run Quality Checks

```bash
npm test
npm run lint
npm run typecheck
npm run build
```

Or run everything at once:

```bash
npm run check
```

## GitHub Repository Setup

Create a new empty GitHub repository, then connect this local project:

```bash
git init
git add .
git commit -m "Initial project setup"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

After pushing, open the repository on GitHub. The CI and deployment workflow should appear under the **Actions** tab.

## GitHub Pages Setup

This project is ready to deploy with GitHub Pages through GitHub Actions.

1. Push the repository to GitHub.
2. Open **Settings** in the GitHub repository.
3. Go to **Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push to `main`.
6. Open the completed workflow run and copy the deployed site URL.

The Vite config automatically uses the repository name as the base path when running in GitHub Actions.

## Suggested Branching Strategy

Use a simple classroom-friendly workflow:

- `main`: stable version of the project.
- `feature/add-task-filter`: one new feature branch.
- `fix/progress-count`: one bug fix branch.
- `docs/update-readme`: documentation updates.

Example:

```bash
git checkout -b feature/add-task-filter
git add .
git commit -m "Add task filter controls"
git push -u origin feature/add-task-filter
```

Then open a pull request on GitHub, ask a peer to review it, fix any feedback, and merge it into `main`.

## Example Commit Messages

- `Add Study Sprint Planner layout`
- `Create task summary calculation`
- `Add unit tests for task progress`
- `Configure GitHub Actions CI`
- `Document QA checklist`

## Collaboration Workflow

1. Each student creates a branch for their own change.
2. Students commit small, clear updates.
3. Students push their branch to GitHub.
4. A pull request is opened.
5. A classmate reviews the pull request using the QA checklist.
6. CI must pass before merging.
7. The team pulls the latest `main` branch.

```bash
git checkout main
git pull origin main
```

## Merge Conflict Practice

Two students can edit the same line in `index.html`, then try to merge both branches. Git will mark the conflict. Students should:

1. Open the conflicted file.
2. Choose the correct final text.
3. Remove conflict markers such as `<<<<<<<`, `=======`, and `>>>>>>>`.
4. Test the app.
5. Commit the resolved file.

```bash
git add index.html
git commit -m "Resolve homepage title conflict"
```

## Continuous Integration

The workflow file is located at [.github/workflows/ci.yml](./.github/workflows/ci.yml). It runs automatically on pushes and pull requests.

The CI pipeline:

- Checks out the repository.
- Installs Node.js.
- Installs dependencies.
- Runs ESLint.
- Runs TypeScript type checks.
- Runs Vitest tests.
- Builds the app.
- Deploys the `dist` folder to GitHub Pages after successful pushes to `main`.

## QA Materials

- Git tutorial: [docs/git-tutorial.md](./docs/git-tutorial.md)
- QA report: [docs/qa-report.md](./docs/qa-report.md)
- Reflection report: [docs/reflection-report.md](./docs/reflection-report.md)
- Screenshot guide: [docs/screenshots.md](./docs/screenshots.md)
- Submission checklist: [docs/submission-checklist.md](./docs/submission-checklist.md)

## Future Improvements

- Add local storage so tasks stay after refreshing.
- Add task categories for different subjects.
- Add accessibility checks to CI.
- Add coverage reports for tests.
