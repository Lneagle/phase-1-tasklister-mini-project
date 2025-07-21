document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#create-task-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const newTaskText = document.querySelector("#new-task-description").value;
    buildToDo(newTaskText);
  });

  function buildToDo(task) {
    const taskList = document.querySelector("#tasks");
    const newTask = document.createElement("li");
    newTask.textContent = task;
    taskList.append(newTask);
  }
});
