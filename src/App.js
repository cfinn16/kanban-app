import React, { Component } from 'react';
import './App.css';
import Column from './Column';

export default class App extends Component {
  state = {
    columns: [
      {
        id: 0,
        name: 'Winnie',
        tasks: [
          'buy eggs',
          'buy milk',
        ],
      },
      {
        id: 1,
        name: 'Brad',
        tasks: [
          'buy meat',
          'buy vegi',
        ],
      },
      {
        id: 2,
        name: 'Bob',
        tasks: [
          'buy meat',
          'buy vegi',
        ],
      },
      {
        id: 3,
        name: 'Thomas',
        tasks: [
          'buy meat',
          'buy vegi',
        ],
      },
    ]
  }

  createNewTask = (id) => {
    const { columns } = this.state;
    const taskName = prompt('Enter new task name')

    const newColumns = columns.map(x => {
      if (x.id === id) {
        x.tasks = [...x.tasks, taskName]
      }
      return x
    })
    console.log(newColumns)
    this.setState({ columns: newColumns })
  }

  moveTask = (direction, task, id) => {
    console.log(direction, task, id)
    const { columns } = this.state;
    const updatingId = direction === "left" ? id - 1 : id + 1;

    console.log(updatingId)

    const newColumns = columns.map(x => {
      if (x.id === id) {
        const updatedTasks = [...x.tasks]
        const index = updatedTasks.indexOf(task)
        if (index !== -1) {
          updatedTasks.splice(index, 1);
          x.tasks = updatedTasks;
        }
      }
      if (x.id === updatingId) {
        x.tasks = [...x.tasks, task]
      }
      return x
    })
    this.setState({ columns: newColumns })
  }

  render() {
    const { columns } = this.state;
    return (
      <div className="App">
        <div className="board">
          {columns.map( x => {
            return <Column key={x.id} data={x} createNewTask={this.createNewTask} moveTask={this.moveTask}/>
          })}
        </div>
      </div>
    );
  }
}
