function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskBtn = document.getElementById('addTaskBtn');

    taskBtn.addEventListener('click', addTask);
    
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        console.log('Task cannot be empty');
        return;
    }
    taskList.innerHTML += `<li> <input type="checkbox" id ="showCompleted"> ${taskText} </li> `;
    taskInput.value = '';
    const checkboxes = document.querySelectorAll('#showCompleted');
    checkboxes.forEach(checkbox => {
        function removeTask() {
            if (checkbox.checked) {
                checkbox.parentElement.remove();
            }
        }
        checkbox.addEventListener('change', removeTask);
    })
    
}
addTask();