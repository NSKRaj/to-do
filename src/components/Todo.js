import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faPenToSquare} />
const element1 = <FontAwesomeIcon icon={faTrash} />

const Todo = ({ todo, remove, update, toggleComplete }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [task, setTask] = useState(todo.task)

    const handleClick = e => {
        remove(e.target.id)
    }

    const toggleForm = () => {
        setIsEditing(!isEditing)
    }

    const handleChange = e => {
        setTask(e.target.value)
    }

    const handleUpdate = e => {
        e.preventDefault()
        update(todo.id, task)
        toggleForm()
    }

    const toggleCompleted = e => {
        toggleComplete(e.target.id)
    }


    let result;
    if (isEditing) {
        result = (
            <div className="Todo">
                <form className="Todo-edit-form" onSubmit={handleUpdate}>
                    <input value={task} onChange={handleChange} />
                    <button>Save</button>
                </form>
            </div>
        )
    } else {
        result = (
            <div className="Todo">
                <li id={todo.id} onClick={toggleCompleted}
                    className={todo.completed ? "Todo-task completed" : "Todo-task"}
                >{todo.task}</li>
                <div className="Todo-buttons">
                    <button onClick={toggleForm}> {element}</button>
                    <button id={todo.id} onClick={handleClick}>{element1}</button>
                </div>
            </div>
        )
    }
    return result
}

export default Todo