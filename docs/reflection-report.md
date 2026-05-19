# Reflection Report

This project introduced practical software engineering habits through a simple React and TypeScript Study Sprint Planner app. The main goal was to make professional workflows understandable for high school students by connecting each tool to a visible result. Git was used to track project history, create branches, and support collaboration through pull requests. This helped show that version control is not only for saving files, but also for communicating changes clearly with a team.

Continuous Integration was configured with GitHub Actions so that every push or pull request can automatically run quality checks. The workflow installs dependencies, runs ESLint, executes Vitest unit tests, and verifies that the Vite app builds successfully. Pushes to the main branch can also deploy the finished site to GitHub Pages, which gives students a real public result from their engineering workflow.

Quality Assurance was practiced through automated unit tests, linting, a manual QA checklist, and peer review examples. The tests focus on important task logic such as creating tasks, toggling completion, sorting by priority, and calculating progress. The linter supports readable and consistent TypeScript, while the QA checklist encourages students to test the app from a user’s point of view.

Overall, the project is beginner-friendly but realistic. Students can run the app, make changes, create branches, review each other’s work, see CI results on GitHub, and publish the app online. The experience builds confidence with tools that are commonly used in real software development teams.
