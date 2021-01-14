import React from 'react';
import './Todo.css'

const Todo = (props) => {
    return (
        <div
        style={props.task.complete ? {textDecoration: 'line-through'} : null}
        onClick={() => props.toggleComplete(props.task.id)}>
            <p>{props.task.name}</p>
        </div>
    )
}

export default Todo;