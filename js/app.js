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


// Add todos code

// element selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');


// event listeners
todoBtn.addEventListener('click', addTodo);


//functions
function addTodo(event) {
    event.preventDefault();
    
    //create a todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');


    // create a li for todo
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    

    //append to the todo-item to a todo list
    todoList.appendChild(todoDiv);

    // clear input fields after creating a todo
    todoInput.value = '';
}
