import { render } from '@testing-library/react';
import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTask: ''
        }
    }
    handleChange = event => {
        this.setState({...this.state,
            newTask: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.addNewTask(this.state.newTask)
    }
    render() {
        return (
            
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} 
                type='text'
                name='task' 
                value={this.state.newTask}
                />
                <button>Add Task</button>
            </form>
        )
     
    }
}

export default TodoForm

