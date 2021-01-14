import React from 'react';
import Todo from './Todo'

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = (props) => {
    return(
        <div>
            {
                props.tasks.map( task => (
                    <div>
                        <Todo key={task.id} 
                        task={task} 
                        toggleComplete={props.toggleComplete} />
                    </div>
                )
            )
        }
         
          <button onClick={props.clearCompleted}>Clear Completed</button>
              
        </div>
        
    )
}

export default TodoList
