function addTask() {
  const taskInput = document.getElementById("taskInput");
  const priority = document.getElementById("prioritySelect").value;
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.classList.add(`priority-${priority}`);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onclick = () => li.classList.toggle("completed");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.classList.add("task-text");

  const actions = document.createElement("div");
  actions.classList.add("actions");

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.onclick = () => editTask(span);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(actions);

  taskList.appendChild(li);
  taskInput.value = "";
}

function editTask(span) {
  const newTask = prompt("Edit your task:", span.textContent);
  if (newTask !== null && newTask.trim() !== "") {
    span.textContent = newTask.trim();
  }
}