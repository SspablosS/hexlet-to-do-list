let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; 

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            <span>${task.name}</span>
            <div class="btn-group">
                <button class="btn-success" onclick="toggleTask(${index})">Готово</button>
                <button class="btn-danger" onclick="deleteTask(${index})">Удалить</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskName = taskInput.value.trim();

    if (taskName !== '') {
        tasks.push({ name: taskName, completed: false });
        taskInput.value = '';
        saveTasks();
        renderTasks();
    }
}

renderTasks();
