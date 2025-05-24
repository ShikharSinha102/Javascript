// Get elements
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// Initialize todo list
let todoListArray = [];

// Initialize todo list from local storage
const storedTodoList = localStorage.getItem('todoList');
if (storedTodoList) {
    todoListArray = JSON.parse(storedTodoList);
    renderTodoList();
}



// Function to render todo list
function renderTodoList() {
    todoList.innerHTML = '';
    todoListArray.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = `
        <div class="todo-div">

            <span class="span-todo">${todo.text}</span>
            <button class="edit-btn" data-index="${index}">Edit</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
            <input type="text" disabled class="edit-input" value="${todo.text}">
            <button class="save-btn" data-index="${index}">Save</button>
        </div>
        `;
        todoList.appendChild(todoItem);
    });
}

// Function to add todo item
function addTodoItem() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        todoListArray.push({ text: todoText });
        localStorage.setItem('todoList', JSON.stringify(todoListArray));
        renderTodoList();
        todoInput.value = '';
    }
}

// Function to edit todo item
function editTodoItem(index) {
    const todoItem = todoList.children[index];
    const todoInput = document.querySelector('.span-todo')
    const editInput = todoItem.querySelector('.edit-input');
    const saveBtn = todoItem.querySelector('.save-btn');
    const editBtn = todoItem.querySelector('.edit-btn');

    editInput.disabled = false; 
    editInput.classList.toggle("hide");
    todoInput.classList.toggle('resize-width')
        
    todoItem.classList.add('edit-mode');
    editInput.focus();
    saveBtn.addEventListener('click', () => {
        
        const newText = editInput.value.trim();
    
        if (newText) {
            todoListArray[index].text = newText;

            editInput.disabled = true;

            localStorage.setItem('todoList', JSON.stringify(todoListArray));
            renderTodoList();
        }
    });
}

// Function to delete todo item
function deleteTodoItem(index) {
    todoListArray.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(todoListArray));
    renderTodoList();
}

// Event listeners
addTodoBtn.addEventListener('click', addTodoItem);
// todoList.addEventListener('click', (e) => {
//     if (e.target.classList.contains('edit-btn')) {
//         const index = e.target.dataset.index;
//         console.log(index)
//         editTodoItem(index);
//     } else if (e.target.classList.contains('delete-btn')) {
//         const index = e.target.dataset.index;
//         deleteTodoItem(index);
//     }
// });

