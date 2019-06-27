const list = document.querySelector('#todo-list ul');

//ADD TODO FUNCTION
function addTodo(e) {
    e.preventDefault();
    const value = addTodos.querySelector('input[type="text"]').value;
    //console.log(value);
    const li = document.createElement('li');
    const todoText = document.createElement('span');
    const deleteBtn = document.createElement('span');
    const editBtn = document.createElement('span');


    //Add Content
    editBtn.innerHTML = 'Edit';
    deleteBtn.innerHTML = 'Delete';
    todoText.innerHTML = value;

    //Add Styles
    todoText.classList.add('name');
    deleteBtn.classList.add('delete');
    editBtn.classList.add('edit');

    //Append to document
    li.appendChild(todoText);
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    list.appendChild(li);

    let editValue = addTodos.querySelector('input[type="text"]').value;
    console.log(editValue);

}

//SEARCH BAR
let searchBar = document.forms['search-todo'].querySelector('input');
searchBar.addEventListener('keyup', function(e) {
    const term = e.target.value.toLowerCase();
    const tudos = list.getElementsByTagName('li');
    Array.from(tudos).forEach(function(todo) {
        const task = todo.firstElementChild.textContent;
        if (task.toLowerCase().indexOf(term) != -1) { todo.style.display = 'block'; } else { todo.style.display = 'none' }
    })
})

//delete Todo
list.addEventListener('click', function(e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})

//ADD TODO
const addTodos = document.forms['add-todo'];
addTodos.addEventListener('submit', addTodo);


//EDIT
let index, items;
ulItems = document.querySelectorAll('#ullist li');
liItems = document.querySelectorAll('#ullist li .name');
editBtn = document.querySelectorAll('#ullist .edit');
const value = document.querySelector('#add-todo input[type="text"]').value;


for (let i = 0; i < liItems.length; i++) {
    editTask = liItems[i].textContent;
    console.log(editTask);

    editBtn[i].addEventListener('click', function(e) {
        if (e.target.className == 'edit') {
            console.log(value);
            liItems[i].textContent = 'changed';
            console.log('edit ' + [i],
                'button is clicked');
        }
    })
}
