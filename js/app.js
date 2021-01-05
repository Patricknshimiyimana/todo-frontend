// The dark/light mode scripts
let checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function(){
    if (this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}


// element selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


// event listeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteItem);
filterOption.addEventListener('click', filterTodos);


//functions
function addTodo(event) {
    event.preventDefault();
    
    //create a todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');


        // check mark btn
        const completedBtn = document.createElement('button');
        completedBtn.innerHTML = '<i class="far fa-check-circle"></i>'
        completedBtn.classList.add("complete-btn");
        todoDiv.appendChild(completedBtn);

    // create a li for todo
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    


    // check delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'
    deleteBtn.classList.add("delete-btn");
    todoDiv.appendChild(deleteBtn);

    //append to the todo-item to a todo list
    todoList.appendChild(todoDiv);

    // clear input fields after creating a todo
    todoInput.value = '';
}

function deleteItem(e) {
    const item = e.target;

    //delete todo
    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        todo.remove();
    }

    //checkmark completed todo
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
