

let todos = [
    {
        id: Date.now() + 1,
        text: "Go to Gym",
        isCompleted: false
    },
    {
        id: Date.now() + 2,
        text: "Revision web dev",
        isCompleted: true
    },
    {
        id: Date.now() + 3,
        text: "Take class",
        isCompleted: false
    }
]


const todoForm = document.querySelector("form")
const todoInput = document.querySelector("#input")
const formBtn = document.querySelector("#btn")
const todoList = document.querySelector("#todo-list")



todoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const todoValue = todoInput.value
    todos.push(todoValue)

    let newTodo = {
        id: Date.now(),
        text: todoValue,
        isCompleted: false
    }

    addTodo(newTodo)
})

function renderTodo() {
    todos.forEach(function (todo) {
        addTodo(todo)
    })
}

renderTodo()

function addTodo(todo) {
    const li = document.createElement("li")
    // li.textContent = todo.text
    li.dataset.id = todo.id
    li.className = `flex gap-2 border border-slate-300 p-3 rounded-lg`
    li.innerHTML = ` 
                    <input data-id=${todo.id} type="checkbox" ${todo.isCompleted === ture ? 'checked' : ""}>
                    <p class="flex-1">${todo.text}</p>
                    <div class="flex gap-2">
                        <button data-action="edit" data-id=${todo.id}>Edit</button>
                        <button data-action="delete" data-id=${todo.id}>Delete</button>
                    </div>
                `
    todoList.append(li)
}


todoList.addEventListener('click', (e) => {

    let li = e.target.closest("li")
    let btn = e.target.closest('button')
    let action = btn?.dataset.action
    let id = btn?.dataset?.id
    let checkbox = e.target.closest('input[type="checkbox"]')
    console.log(checkbox);

    if (action === "edit") {
        console.log("editing...");
    }

    if (action === "delete") {
        console.log("Deleting.... ");
        deleteTodo(e, id)
    }

    if (checkbox) {
        todos = todos.map((todo) => {
            if (todo.id === Number(id)) {
                return {
                    ...todo,
                    isCompleted : !todo.isCompleted
                }              

            }
            
            return todo
            
        })

        
    }

})



function deleteTodo(e, id) {
    e.target.closest('li').remove()

    todos = todos.filter((todo) => {
        if (todo.id !== Number(id)) {
            return todo
        }
    })

}

