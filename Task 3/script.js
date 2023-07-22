// Function to create a new task
function createTask(taskName) {
    const task = {
      name: taskName,
      completed: false,
      createdAt: new Date(),
      completedAt: null
    };
  
    return task;
  }
  
  // Function to add a task to the pending tasks list
  function addTaskToList(task, taskList) {
    const listItem = document.createElement('li');
  
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-checkbox');
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        markTaskAsComplete(task, taskList);
      } else {
        markTaskAsPending(task);
      }
    });
  
    const taskNameSpan = document.createElement('span');
    taskNameSpan.innerText = task.name;
  
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
      deleteTask(task, taskList);
    });
  
    const timestamp = document.createElement('span');
    timestamp.innerText = task.createdAt.toLocaleString();
    timestamp.classList.add('timestamp');
  
    listItem.appendChild(checkbox);
    listItem.appendChild(taskNameSpan);
    listItem.appendChild(timestamp);
    listItem.appendChild(deleteButton);
    task.element = listItem;
    taskList.appendChild(listItem);
  }
  
  // Function to delete a task from a list
  function deleteTask(task, taskList) {
    taskList.removeChild(task.element);
  }
  
  // Function to mark a task as complete
  function markTaskAsComplete(task, taskList) {
    task.completed = true;
    task.completedAt = new Date();
    task.element.classList.add('completed-task');
    document.getElementById('completed-tasks').appendChild(task.element);
  }
  
  // Function to mark a task as pending
  function markTaskAsPending(task) {
    task.completed = false;
    task.completedAt = null;
    task.element.classList.remove('completed-task');
    document.getElementById('pending-tasks').appendChild(task.element);
  }
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
    const taskInput = document.getElementById('task-input');
    const taskName = taskInput.value.trim();
  
    if (taskName !== '') {
      const task = createTask(taskName);
      addTaskToList(task, document.getElementById('pending-tasks'));
      taskInput.value = '';
    }
  }
  
  // Event listeners
  document.getElementById('todo-form').addEventListener('submit', handleFormSubmit);
  