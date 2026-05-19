export const starterTasks = [
  { id: 1, name: "Create a Git branch", priority: "High", completed: true },
  { id: 2, name: "Write one unit test", priority: "Medium", completed: false },
  { id: 3, name: "Open a pull request", priority: "High", completed: false }
];

export function createTask(name, priority = "Medium") {
  const cleanName = name.trim();

  if (cleanName.length < 3) {
    throw new Error("Task name must be at least 3 characters long.");
  }

  return {
    id: Date.now(),
    name: cleanName,
    priority,
    completed: false
  };
}

export function toggleTask(tasks, taskId) {
  return tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  );
}

export function calculateSummary(tasks) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  return { total, completed, progress };
}

export function sortTasksByPriority(tasks) {
  const priorityRank = {
    High: 1,
    Medium: 2,
    Low: 3
  };

  return [...tasks].sort((first, second) => {
    return priorityRank[first.priority] - priorityRank[second.priority];
  });
}
