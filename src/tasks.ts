export type Priority = "High" | "Medium" | "Low";

export type StudyTask = {
  id: number;
  name: string;
  priority: Priority;
  completed: boolean;
};

export type TaskSummary = {
  total: number;
  completed: number;
  progress: number;
};

export const starterTasks: StudyTask[] = [
  { id: 1, name: "Create a Git branch", priority: "High", completed: true },
  { id: 2, name: "Write one unit test", priority: "Medium", completed: false },
  { id: 3, name: "Open a pull request", priority: "High", completed: false }
];

export function createTask(name: string, priority: Priority = "Medium"): StudyTask {
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

export function toggleTask(tasks: StudyTask[], taskId: number): StudyTask[] {
  return tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  );
}

export function deleteTask(tasks: StudyTask[], taskId: number): StudyTask[] {
  return tasks.filter((task) => task.id !== taskId);
}

export function calculateSummary(tasks: Pick<StudyTask, "completed">[]): TaskSummary {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  return { total, completed, progress };
}

export function sortTasksByPriority(tasks: StudyTask[]): StudyTask[] {
  const priorityRank: Record<Priority, number> = {
    High: 1,
    Medium: 2,
    Low: 3
  };

  return [...tasks].sort((first, second) => {
    return priorityRank[first.priority] - priorityRank[second.priority];
  });
}
