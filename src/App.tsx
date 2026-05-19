import { FormEvent, useMemo, useState } from "react";
import {
  Priority,
  calculateSummary,
  createTask,
  deleteTask,
  sortTasksByPriority,
  starterTasks,
  toggleTask
} from "./tasks";

const priorityOptions: Priority[] = ["High", "Medium", "Low"];
const filterOptions = ["All", "Open", "Completed"] as const;

type TaskFilter = (typeof filterOptions)[number];

const priorityClasses: Record<Priority, string> = {
  High: "bg-red-100 text-red-800 ring-red-200",
  Medium: "bg-amber-100 text-amber-800 ring-amber-200",
  Low: "bg-emerald-100 text-emerald-800 ring-emerald-200"
};

function App() {
  const [tasks, setTasks] = useState(starterTasks);
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState<Priority>("Medium");
  const [filter, setFilter] = useState<TaskFilter>("All");
  const summary = useMemo(() => calculateSummary(tasks), [tasks]);
  const sortedTasks = useMemo(() => {
    const visibleTasks = tasks.filter((task) => {
      if (filter === "Completed") {
        return task.completed;
      }

      if (filter === "Open") {
        return !task.completed;
      }

      return true;
    });

    return sortTasksByPriority(visibleTasks);
  }, [filter, tasks]);

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
    <main className="mx-auto w-[min(1120px,calc(100%_-_2rem))] py-8 text-slate-900 sm:py-10">
      <section
        className="grid min-h-[320px] grid-cols-1 items-stretch gap-6 rounded-lg bg-cover bg-center p-5 text-white shadow-xl sm:p-8 lg:grid-cols-[minmax(0,1fr)_280px]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(14, 36, 43, 0.94), rgba(36, 90, 103, 0.82)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80')"
        }}
        aria-labelledby="page-title"
      >
        <div className="self-center">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-wider text-emerald-100">
            React + TypeScript + CI + QA
          </p>
          <h1
            id="page-title"
            className="mb-4 max-w-3xl text-5xl font-black leading-none sm:text-6xl lg:text-7xl"
          >
            Study Sprint Planner
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-100 sm:text-lg">
            A classroom app for practicing professional workflows with Git branches, tests,
            linting, pull requests, and GitHub Pages deployment.
          </p>
        </div>
        <div
          className="self-end rounded-lg border border-white/30 bg-white/15 p-4 shadow-lg backdrop-blur"
          aria-label="Project quality status"
        >
          <span
            className="mr-2 inline-block size-3 rounded-full bg-emerald-300 align-middle"
            aria-hidden="true"
          />
          <strong className="align-middle text-lg">Deploy Ready</strong>
          <p className="mt-2 text-sm leading-6 text-slate-100">
            Every pull request can run lint, tests, build, and deployment checks.
          </p>
        </div>
      </section>

      <section
        className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-3"
        aria-label="Planner dashboard"
      >
        <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-lg shadow-slate-900/5">
          <span className="block text-sm font-bold text-slate-500">Total Tasks</span>
          <strong className="block text-3xl text-teal-800">{summary.total}</strong>
        </article>
        <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-lg shadow-slate-900/5">
          <span className="block text-sm font-bold text-slate-500">Completed</span>
          <strong className="block text-3xl text-teal-800">{summary.completed}</strong>
        </article>
        <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-lg shadow-slate-900/5">
          <span className="block text-sm font-bold text-slate-500">Progress</span>
          <strong className="block text-3xl text-teal-800">{summary.progress}%</strong>
        </article>
      </section>

      <section
        className="grid grid-cols-1 gap-4 lg:grid-cols-[340px_minmax(0,1fr)]"
        aria-label="Task workspace"
      >
        <form
          className="grid content-start gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-lg shadow-slate-900/5"
          onSubmit={handleSubmit}
        >
          <h2 className="text-xl font-extrabold text-slate-900">Add a learning task</h2>
          <label className="grid gap-1.5 font-bold text-slate-700">
            <span>Task name</span>
            <input
              className="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-teal-700/20 transition focus:border-teal-700 focus:ring-4"
              type="text"
              maxLength={60}
              placeholder="Example: Review Git branches"
              required
              value={taskName}
              onChange={(event) => setTaskName(event.target.value)}
            />
          </label>
          <label className="grid gap-1.5 font-bold text-slate-700">
            <span>Priority</span>
            <select
              className="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-teal-700/20 transition focus:border-teal-700 focus:ring-4"
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
          <button
            className="min-h-11 rounded-lg bg-teal-800 px-4 py-3 font-extrabold text-white transition hover:bg-teal-950"
            type="submit"
          >
            Add Task
          </button>
        </form>

        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-lg shadow-slate-900/5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-extrabold text-slate-900">Current sprint</h2>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <div className="grid grid-cols-3 rounded-lg border border-slate-200 bg-slate-50 p-1">
                {filterOptions.map((option) => (
                  <button
                    className={`min-h-9 rounded-md px-3 text-sm font-extrabold transition ${
                      filter === option
                        ? "bg-teal-800 text-white shadow-sm"
                        : "text-slate-600 hover:bg-white"
                    }`}
                    type="button"
                    key={option}
                    aria-pressed={filter === option}
                    onClick={() => setFilter(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button
                className="min-h-11 rounded-lg bg-emerald-50 px-4 py-2 font-extrabold text-teal-800 transition hover:bg-emerald-100"
                type="button"
                onClick={() => setTasks(starterTasks)}
              >
                Reset Demo
              </button>
            </div>
          </div>
          <ul className="mt-4 grid gap-3">
            {sortedTasks.map((task) => (
              <li
                className="grid min-h-14 grid-cols-[auto_minmax(0,1fr)_auto_auto] items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3"
                key={task.id}
              >
                <input
                  className="size-5 accent-teal-800"
                  type="checkbox"
                  checked={task.completed}
                  aria-label={`Mark ${task.name} as complete`}
                  onChange={() => setTasks((currentTasks) => toggleTask(currentTasks, task.id))}
                />
                <span
                  className={`[overflow-wrap:anywhere] ${
                    task.completed ? "text-slate-500 line-through" : "text-slate-800"
                  }`}
                >
                  {task.name}
                </span>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-extrabold ring-1 ${priorityClasses[task.priority]}`}
                >
                  {task.priority}
                </span>
                <button
                  className="min-h-9 rounded-lg bg-red-50 px-3 py-1.5 text-sm font-extrabold text-red-700 transition hover:bg-red-100"
                  type="button"
                  aria-label={`Delete ${task.name}`}
                  onClick={() => setTasks((currentTasks) => deleteTask(currentTasks, task.id))}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default App;
