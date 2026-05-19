import { describe, expect, test } from "vitest";
import {
  calculateSummary,
  createTask,
  sortTasksByPriority,
  toggleTask,
  type StudyTask
} from "../src/tasks";

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
    const tasks: StudyTask[] = [
      { id: 1, name: "Write test", priority: "High", completed: false },
      { id: 2, name: "Review PR", priority: "Medium", completed: false }
    ];

    const updatedTasks = toggleTask(tasks, 2);

    expect(updatedTasks[0].completed).toBe(false);
    expect(updatedTasks[1].completed).toBe(true);
  });

  test("calculates total, completed count, and progress percentage", () => {
    const summary = calculateSummary([
      { completed: true },
      { completed: false },
      { completed: true }
    ]);

    expect(summary).toEqual({ total: 3, completed: 2, progress: 67 });
  });

  test("sorts high priority tasks before medium and low tasks", () => {
    const sortedTasks = sortTasksByPriority([
      { id: 1, name: "Low item", priority: "Low", completed: false },
      { id: 2, name: "High item", priority: "High", completed: false },
      { id: 3, name: "Medium item", priority: "Medium", completed: false }
    ]);

    expect(sortedTasks.map((task) => task.priority)).toEqual(["High", "Medium", "Low"]);
  });
});
