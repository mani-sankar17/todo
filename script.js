const taskItem = document.getElementById('taskItem');
const taskList = document.getElementById('taskList');
const addBtn = document.getElementById('addBtn');
const form = document.getElementById('todo-form');

getTasks();

function addTask() {
    const task = taskItem.value.trim();
    if( task != '') {
        createEl(task);
        taskItem.value = '';
        setTasks();
    }
    else {
        alert('Please enter a valid task!')
    }
}

form.addEventListener('submit', addTask);

function createEl(task) {
    const li = document.createElement('li');    
    taskList.appendChild(li);
    
    const span = document.createElement('span')
    span.textContent = task;
    li.appendChild(span)

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    li.appendChild(delBtn);

    delBtn.addEventListener('click', () => {
        taskList.removeChild(li);
        setTasks();
    })
}

function setTasks() {
    let tasks = [];
    taskList.querySelectorAll('span').forEach((item) => {
        tasks.push( item.textContent.replace('Delete', '').trim())
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
 
function getTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(createEl);
}
