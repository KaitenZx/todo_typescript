import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todos from './Todos';

export interface Todo {
    text: string
    id: number | undefined
    isComplete?: boolean
}

function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodo = (todo:Todo) => {
        if (!todo.text){
            return undefined;
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }
    
    const updateTodo = (todoId: number | undefined, newValue:Todo) => {
        setTodos(prev => prev.map(item => item.id === todoId ? newValue : item ))
    }

    const removeTodo = (id: number | undefined) => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }

    const completeTodo = (id:number | undefined) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    return (
        <div>
        <h1>Katatatatata</h1>
         <TodoForm onSubmit={addTodo} /> 
         <Todos todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}
export default TodoList
