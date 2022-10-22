import React from "react";
import TodoItem from "./TodoItem";


function TodoList({todos, onComplete}) {
    return (
        <div>
            {
                todos.map((todo, index) => (
                    <TodoItem key = {`todo-${index}`} todo = {todo} onComplete= {onComplete}/>
                ))
            }
        </div>
    )
}

export default TodoList;