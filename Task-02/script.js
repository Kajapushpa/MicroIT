function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;
  li.addEventListener("click", () => li.classList.toggle("done"));

  const actions = document.createElement("div");
  actions.classList.add("action-buttons");

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  actions.appendChild(deleteBtn);
  li.appendChild(actions);
  document.getElementById("task-list").appendChild(li);
  input.value = "";
}
