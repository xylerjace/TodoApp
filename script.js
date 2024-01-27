const addtask = document.getElementById('add');
const task = document.getElementById('tasks');
const closePopupButton = document.getElementById('closePopupButton');
const todo = document.getElementById('todo');

addtask.addEventListener('click', function() {
    popup.showModal();
});
closePopupButton.addEventListener('click',function(){
    addTask(todo.value);
    saveTask(todo.value);
    popup.close();
    todo.value = "";
    
});

function addTask(content){
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';

    const text = document.createElement('p');
    text.className = 'text';
    text.textContent = content;
    wrapper.appendChild(text);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.className = 'delete';
    wrapper.appendChild(deleteButton);

    deleteButton.addEventListener('click',function(){
        task.removeChild(wrapper);
        removeTask(content);
    });
    task.appendChild(wrapper);
}
function saveTask(text){
   const saveTasks = JSON.parse(localStorage.getItem('tasks')) || [];

   saveTasks.push(text);

   localStorage.setItem('tasks', JSON.stringify(saveTasks));
}
function loadTask(){
    const saveTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log('Tasks in Local Storage:', saveTasks);
    saveTasks.forEach(text => {
        addTask(text);
    });
}
function removeTask(content){
    const saveTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const newTasks = saveTasks.filter(task => task !== content);

    localStorage.setItem('tasks', JSON.stringify(newTasks));
}
loadTask();