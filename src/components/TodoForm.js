import React, { useState} from 'react'
import { v4 as uuid } from 'uuid'


const TodoForm = ({ createTodo }) => {

    const [userInput, setUserInput] = useState({})

    const handleChange = e => {
        setUserInput({ [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (userInput.task === '') {
            alert('Please enter the task')
        } else {
            const newTodo = { id: uuid(), task: userInput.task, completed: false }
            createTodo(newTodo)
            setUserInput({ task: '' })
        }
    }

    return (
        <form className='NewTodoForm' onSubmit={handleSubmit}>
            <input
                value={userInput.task}
                onChange={handleChange}
                type='text'
                name='task'
                placeholder='Enter the today task?'
            />
            <button>Add Todo</button>
        </form>
    )
}

export default TodoForm
