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

renderTasks();
