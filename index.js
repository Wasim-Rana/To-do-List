let todoInput = document.getElementById('todo-input');
let addButton = document.getElementById('add_btn');
let todoList = document.getElementById('todo-list');



addButton.addEventListener('click',(e)=>{

    e.preventDefault()

    let todoText=todoInput.value.trim()
    if(todoText==='') return;

    let li = document.createElement('li');
    li.innerHTML = `
        <span>${todoText}</span>
        <div class="task-actions">
            <input type="checkbox">
            <button class="edit"><i class="fas fa-pen"></i></button>
            <button class="delete"><i class="fas fa-trash"></i></button>
        </div>
    `;
    todoList.appendChild(li);
    todoInput.value = '';

    addEventListener(li)
});

function addEventListener(taskItem){
    let deleteButton=taskItem.querySelector('.delete')
    
        deleteButton.addEventListener('click',()=>{
           taskItem.remove();
        })
    
    let editButton=taskItem.querySelector('.edit')

        editButton.addEventListener('click',()=>{

                todoInput.value = taskItem.querySelector('span').textContent;
          
           taskItem.remove()
        })
    

    let checkbox = taskItem.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            taskItem.classList.add('completed');
        } else {
            taskItem.classList.remove('completed');
        }
    });

}



