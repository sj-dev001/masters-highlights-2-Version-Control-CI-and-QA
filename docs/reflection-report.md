# Reflection Report

This project introduced practical software engineering habits through a simple Study Sprint Planner app. The main goal was to make professional workflows understandable for high school students by connecting each tool to a visible result. Git was used to track project history, create branches, and support collaboration through pull requests. This helped show that version control is not only for saving files, but also for communicating changes clearly with a team.

Continuous Integration was configured with GitHub Actions so that every push or pull request can automatically run quality checks. The workflow installs dependencies, runs ESLint, executes Jest unit tests, and verifies that the app builds successfully. This demonstrates how teams can catch problems early before code is merged into the main branch.

Quality Assurance was practiced through automated unit tests, linting, a manual QA checklist, and peer review examples. The tests focus on important task logic such as creating tasks, toggling completion, sorting by priority, and calculating progress. The linter supports readable and consistent JavaScript, while the QA checklist encourages students to test the app from a user’s point of view.

Overall, the project is beginner-friendly but realistic. Students can run the app, make changes, create branches, review each other’s work, and see CI results on GitHub. The experience builds confidence with tools that are commonly used in real software development teams.
