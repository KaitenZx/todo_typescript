import React, { FC, useState} from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import TodoForm from './TodoForm'
import { Todo } from './TodoList'

interface TodosProps {
    todos: Todo[]
    completeTodo: (id:number | undefined) => void
    removeTodo: (id:number | undefined) => void
    updateTodo: (id:number | undefined, value: Todo) => void
}


const Todos:FC<TodosProps> = ({todos, completeTodo, removeTodo, updateTodo}) => {
    const [edit, setEdit] = useState<Todo>({
        id: undefined,
        text: '',
    })

    const submitUpdate = (value:Todo) => {
        updateTodo(edit.id, value)
        setEdit({
            id: undefined,
            text: ''
        })
    } 

    if (edit.id) {
        return <TodoForm onSubmit={submitUpdate} />
    }

    return  (
        <>
        {todos.map((todo, index) => (
            <div 
                className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
                key = {index}
            >
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </div>
                <div className='icons'>
                    <RiCloseCircleLine  onClick={() => removeTodo(todo.id)}  
                    className='deleteIcon' />
                    <TiEdit  onClick={() => setEdit(todo)}  
                    className='editIcon'/>
                </div>
            </div>
        )
    )}
    </>)
}

export default Todos
