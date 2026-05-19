import "./styles.css";
import {
  calculateSummary,
  createTask,
  sortTasksByPriority,
  starterTasks,
  toggleTask
} from "./tasks.js";

let tasks = [...starterTasks];

const taskForm = document.querySelector("#task-form");
const taskNameInput = document.querySelector("#task-name");
const taskPriorityInput = document.querySelector("#task-priority");
const taskList = document.querySelector("#task-list");
const resetButton = document.querySelector("#reset-tasks");
const totalTasks = document.querySelector("#total-tasks");
const completedTasks = document.querySelector("#completed-tasks");
const progressPercent = document.querySelector("#progress-percent");

function renderSummary() {
  const summary = calculateSummary(tasks);

  totalTasks.textContent = summary.total;
  completedTasks.textContent = summary.completed;
  progressPercent.textContent = `${summary.progress}%`;
}

function renderTasks() {
  taskList.innerHTML = "";

  sortTasksByPriority(tasks).forEach((task) => {
    const item = document.createElement("li");
    item.className = `task-item ${task.completed ? "is-complete" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.setAttribute("aria-label", `Mark ${task.name} as complete`);
    checkbox.addEventListener("change", () => {
      tasks = toggleTask(tasks, task.id);
      render();
    });

    const text = document.createElement("span");
    text.textContent = task.name;

    const badge = document.createElement("span");
    badge.className = `priority priority-${task.priority.toLowerCase()}`;
    badge.textContent = task.priority;

    item.append(checkbox, text, badge);
    taskList.append(item);
  });
}

function render() {
  renderSummary();
  renderTasks();
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  try {
    tasks = [...tasks, createTask(taskNameInput.value, taskPriorityInput.value)];
    taskForm.reset();
    taskPriorityInput.value = "Medium";
    render();
  } catch (error) {
    window.alert(error.message);
  }
});

resetButton.addEventListener("click", () => {
  tasks = [...starterTasks];
  render();
});

render();
