import  { FC, FormEvent, useState } from 'react';
import { Todo } from './TodoList';

interface TodoFormProps {
    onSubmit: (todo:Todo) => void
}

const TodoForm:FC<TodoFormProps> = ({ onSubmit }) => {
    const [input, setInput] = useState('');


    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Add a todo'
                value={input}
                name='text'
                className='todo-input'
                onChange={event => setInput(event.target.value)}
            />
            <button className='todo-button'>Add todo</button>
        </form>
    );
}


export default TodoForm