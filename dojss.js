const taskInput = document.getElementById('taskInput');
const prioritySelect = document.getElementById('prioritySelect');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

let tasks = [];

function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    const taskText = document.createElement('span');
    const doneBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    taskText.innerText = task.text;
    taskText.classList.toggle('strike', task.done);
    taskText.id="text";
    doneBtn.className = 'fa fa-check';
    doneBtn.id='donebtn';
    deleteBtn.className='fa fa-trash';
    deleteBtn.id="delbtn";

    doneBtn.addEventListener('click', () => {
      toggleTaskDone(index);
    });

    deleteBtn.addEventListener('click', () => {
      deleteTask(index);
    });

    li.appendChild(taskText);
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);

    // Set priority class
    li.classList.add(getPriorityClass(task.priority));

    taskList.appendChild(li);
  });
}

function toggleTaskDone(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function getPriorityClass(priority) {
  switch (priority) {
    case 'low':
      return 'low-priority';
    case 'medium':
      return 'medium-priority';
    case 'high':
      return 'high-priority';
    default:
      return '';
  }
}

addTaskBtn.addEventListener('click', () => {
  const text = taskInput.value;
  const priority = prioritySelect.value;
  if (text) {
    tasks.push({ text, done: false, priority });
    taskInput.value = '';
    renderTasks();
  }
});

renderTasks();
