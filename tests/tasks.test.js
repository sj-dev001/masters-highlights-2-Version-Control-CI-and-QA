import {
  calculateSummary,
  createTask,
  sortTasksByPriority,
  toggleTask
} from "../src/tasks.js";

describe("task helpers", () => {
  test("creates a task with clean text and a default incomplete state", () => {
    const task = createTask("  Practice Git commits  ", "High");

    expect(task.name).toBe("Practice Git commits");
    expect(task.priority).toBe("High");
    expect(task.completed).toBe(false);
  });

  test("rejects task names that are too short", () => {
    expect(() => createTask("go")).toThrow("at least 3 characters");
  });

  test("toggles the matching task without changing other tasks", () => {
    const tasks = [
      { id: 1, name: "Write test", priority: "High", completed: false },
      { id: 2, name: "Review PR", priority: "Medium", completed: false }
    ];

    const updatedTasks = toggleTask(tasks, 2);

    expect(updatedTasks[0].completed).toBe(false);
    expect(updatedTasks[1].completed).toBe(true);
  });

  test("calculates total, completed count, and progress percentage", () => {
    const summary = calculateSummary([
      { id: 1, completed: true },
      { id: 2, completed: false },
      { id: 3, completed: true }
    ]);

    expect(summary).toEqual({ total: 3, completed: 2, progress: 67 });
  });

  test("sorts high priority tasks before medium and low tasks", () => {
    const sortedTasks = sortTasksByPriority([
      { id: 1, priority: "Low" },
      { id: 2, priority: "High" },
      { id: 3, priority: "Medium" }
    ]);

    expect(sortedTasks.map((task) => task.priority)).toEqual(["High", "Medium", "Low"]);
  });
});
