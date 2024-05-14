const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskTable = document.getElementById('task-table');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskDescription = taskInput.value;
    if (taskDescription) {
        const taskRow = document.createElement('tr');
        taskRow.innerHTML = `
            <td>${taskDescription}</td>
            <td><input type="date" id="due-date"></td>
            <td><input type="checkbox"></td>
            <td><button class="delete-btn">Delete</button></td>
        `;
        taskList.appendChild(taskRow);
        taskInput.value = '';
    }
}

taskTable.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
        const taskRow = e.target.parentNode.parentNode;
        taskRow.classList.toggle('done');
    }
});

taskTable.addEventListener('click', (e) => {
    if (e.target.className === 'delete-btn') {
        const taskRow = e.target.parentNode.parentNode;
        taskList.removeChild(taskRow);
    }
});
