

let todos = [
    {
        id: Date.now() + 1,
        text: "Take Classes",
        isCompleted: false
    },
    {
        id: Date.now() + 2,
        text: "Go to gym",
        isCompleted: false
    },
    {
        id: Date.now() + 3,
        text: "Revision",
        isCompleted: false
    }
]


const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const formBtn = document.querySelector("#form-btn")
const todoList = document.querySelector("#todo-list")
const cancelBtn = document.querySelector("#cancel-btn")
const taskCount = document.querySelector("#task-count")
const completeCount = document.querySelector("#complete-count")


let editTodoId = null

todoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const todoValue = todoInput.value.trim()
    
    if (!todoValue) {
        return
    }

    if (editTodoId) {
        todos = todos.map((todo) => {
            if (todo.id === Number(editTodoId)) {
                return {
                    ...todo,
                    text: todoValue
                }
            }
            return todo
        })
    } else {
        let newTodo = {
            id: Date.now(),
            text: todoValue,
            isCompleted: false
        }
        todos.push(newTodo)
        addTodo(newTodo)
    }

   





    cancelEdit()
    renderTodo()

})

function renderTodo() {
    todoList.innerHTML = ''

    todos.forEach((todo) => {
        addTodo(todo)
    })

    taskCount.textContent = `task : (${todos.length})`
    completeCount.textContent = `completed : ${todos.filter((todo) => todo.isCompleted).length}`
}

renderTodo()


function addTodo(todo) {
    const li = document.createElement("li")

    li.className = "flex gap-2 items-center border px-3 py-2 rounded-lg border-slate-500/40 text-[0.7rem]"

    li.dataset.id = `${todo.id}`

    li.innerHTML = ` <input data-action="toggle" type="checkbox" class="accent-indigo-600/90 h-3 w-3" ${todo.isCompleted ? 'checked' : ''}>

                    <p class="flex-1 ${todo.isCompleted ? 'line-through text-red-400 font-medium' : ''} ">${todo.text}</p>

                    <div class=" flex gap-1">
                        <button  data-action="edit" class="text-amber-400 font-semibold bg-amber-400/20 px-2 py-0.5 rounded-md border border-amber-400 cursor-pointer">Edit</button>

                        <button  data-action="delete" class="text-red-400 font-semibold bg-red-400/20 px-2 py-0.5 rounded-md border border-red-400 cursor-pointer">Delete</button>
                    </div>`

    todoList.append(li)
    todoInput.value = ""
}


todoList.addEventListener('click', (e) => {
    e.stopPropagation()

    const li = e.target.closest('li')
    const id = li?.dataset?.id


    const action = e.target.dataset?.action


    if (action === 'delete') {
        deleteTodo(id)

    }

    if (action === 'edit') {
        startEdit(id)
    }

    if (action === 'toggle') {
        todos = todos.map((todo) => {
            if (todo.id === Number(id)) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            }
            return todo
        })
        renderTodo()
    }
    
})


function deleteTodo(id) {
    todos = todos.filter((todo) => {
        if (todo.id !== Number(id)) {
            return todo
        }
    })
    renderTodo()
}


function startEdit(id) {
    editTodoId = id
    currentTodo = todos.find((todo) => {
        if (todo.id === Number(id)) {
            return todo
        }
    })

    todoInput.value = currentTodo.text
    formBtn.textContent = 'Update'
    formBtn.className =
        'bg-amber-600 rounded-md text-xs text-white font-semibold px-4 py-2 cursor-pointer'

    cancelBtn.classList.remove('hidden')
}

function cancelEdit() {
    editTodoId = null

    todoInput.value = ''
    formBtn.textContent = 'Add'
    formBtn.className = 'bg-indigo-600 rounded-md text-white text-xs font-semibold px-4 py-2 cursor-pointer'

    cancelBtn.classList.add('hidden')
}

cancelBtn.addEventListener('click', (e) => {
    cancelEdit()
})

