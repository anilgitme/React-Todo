import React from 'react';
import styled from 'styled-components'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const StyledDiv = styled.div`
display:flex;
flex-direction: column;
align-items: center;
background-color: #708090;
`

const Title = styled.h1`
color: dark-gray;
font-weight: bold;
`

const tasks = [{
  name: 'Clean room',
  id: '12',
  complete: false
}]

class App extends React.Component {
  // you will need a place to store your state in this component.
  state = {
    taskList : tasks,
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addNewTask = taskName => {
    const newState = {
      ...this.state,
       taskList: [
         ...this.state.taskList,
         {
           name: taskName,
           completed: false,
           id: Date.now()
         }
       ]
    }
    this.setState(newState)
  };

  toggleComplete = id => {
    const newState = {
      ...this.state,
      taskList: this.state.taskList.map( task => {
        if(task.id === id){
          return {
            ...task, complete: !task.complete
          }
        }
        return task
      })
    }
    this.setState(newState)
  }

  clearCompleted = () => {
    const newState = {
      ...this.state,
      taskList: this.state.taskList.filter(task =>{
        return !task.complete;
      })
    }
    this.setState(newState)
  }

  render() {
    console.log(this.state)
    return (
      <StyledDiv>
        <Title>To Do List</Title>
        <div>
          <TodoForm addNewTask={this.addNewTask}/>
        </div>
      <TodoList tasks={this.state.taskList} toggleComplete={this.toggleComplete} clearCompleted={this.clearCompleted}/>
      </StyledDiv>
    );
  }
}

export default App;
