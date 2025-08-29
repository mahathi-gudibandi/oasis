function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = taskText;

  let completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.onclick = function () {
    document.getElementById("completedList").appendChild(li);
    li.removeChild(completeBtn);
  };

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  document.getElementById("pendingList").appendChild(li);

  taskInput.value = "";
}
