import { FormEvent, useMemo, useState } from "react";
import {
  Priority,
  calculateSummary,
  createTask,
  sortTasksByPriority,
  starterTasks,
  toggleTask
} from "./tasks";

const priorityOptions: Priority[] = ["High", "Medium", "Low"];

function App() {
  const [tasks, setTasks] = useState(starterTasks);
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState<Priority>("Medium");
  const summary = useMemo(() => calculateSummary(tasks), [tasks]);
  const sortedTasks = useMemo(() => sortTasksByPriority(tasks), [tasks]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setTasks((currentTasks) => [...currentTasks, createTask(taskName, priority)]);
      setTaskName("");
      setPriority("Medium");
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Unable to add task.");
    }
  }

  return (
    <main className="app-shell">
      <section className="hero" aria-labelledby="page-title">
        <div>
          <p className="eyebrow">React + TypeScript + CI + QA</p>
          <h1 id="page-title">Study Sprint Planner</h1>
          <p className="intro">
            A classroom app for practicing professional workflows with Git branches, tests,
            linting, pull requests, and GitHub Pages deployment.
          </p>
        </div>
        <div className="hero-panel" aria-label="Project quality status">
          <span className="status-dot" aria-hidden="true" />
          <strong>Deploy Ready</strong>
          <p>Every pull request can run lint, tests, build, and deployment checks.</p>
        </div>
      </section>

      <section className="dashboard" aria-label="Planner dashboard">
        <article className="summary-card">
          <span className="summary-label">Total Tasks</span>
          <strong>{summary.total}</strong>
        </article>
        <article className="summary-card">
          <span className="summary-label">Completed</span>
          <strong>{summary.completed}</strong>
        </article>
        <article className="summary-card">
          <span className="summary-label">Progress</span>
          <strong>{summary.progress}%</strong>
        </article>
      </section>

      <section className="workspace" aria-label="Task workspace">
        <form className="task-form" onSubmit={handleSubmit}>
          <h2>Add a learning task</h2>
          <label>
            Task name
            <input
              type="text"
              maxLength={60}
              placeholder="Example: Review Git branches"
              required
              value={taskName}
              onChange={(event) => setTaskName(event.target.value)}
            />
          </label>
          <label>
            Priority
            <select
              value={priority}
              onChange={(event) => setPriority(event.target.value as Priority)}
            >
              {priorityOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <button type="submit">Add Task</button>
        </form>

        <div className="task-list-panel">
          <div className="panel-header">
            <h2>Current sprint</h2>
            <button type="button" onClick={() => setTasks(starterTasks)}>
              Reset Demo
            </button>
          </div>
          <ul className="task-list">
            {sortedTasks.map((task) => (
              <li className={`task-item ${task.completed ? "is-complete" : ""}`} key={task.id}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  aria-label={`Mark ${task.name} as complete`}
                  onChange={() => setTasks((currentTasks) => toggleTask(currentTasks, task.id))}
                />
                <span>{task.name}</span>
                <span className={`priority priority-${task.priority.toLowerCase()}`}>
                  {task.priority}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default App;
