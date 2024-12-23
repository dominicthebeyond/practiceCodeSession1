// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add a new task
addTaskButton.addEventListener('click', function () {
  const taskText = taskInput.value.trim();

  if (taskText) {
    const li = document.createElement('li');

    // Task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Mark complete button
    taskSpan.addEventListener('click', function () {
      taskSpan.classList.toggle('completed');
    });

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      li.remove();
    });

    li.appendChild(taskSpan);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = ''; // Clear input
  }
});
