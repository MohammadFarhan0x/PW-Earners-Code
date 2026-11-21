import React, { useState } from "react";

function Todo() {
    const [value, setValue] = useState("");
    const [todos, setTodos] = useState(["Todo:1", "Todo:2", "Todo:3"]);

    function printValue(e) {
        setValue(e.target.value)
    }



    function addTodo(e) {
        e.preventDefault();

        if (!value.trim()) {
            return
        }

        setTodos((prev) => [...prev, value]);
        setValue("");
    }

    return (
        <div>
            <h1>Todo</h1>

            <form action="" onSubmit={addTodo}>
                <input value={value} type="text" onChange={printValue} />
                <button>Add</button>
            </form>

            <ul>
                {todos.map((todo) => (
                    <li>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;

