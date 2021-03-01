import React, { Component } from 'react';
import Task from './Task';

export default class Column extends Component {

  handleButtonClick = () => {
    const { createNewTask, data } = this.props;
    createNewTask(data.id)
  }

  render () {
    const { data, moveTask } = this.props;
    return (
      <div className="column">
        <h4>{data.name}</h4>
        {data.tasks && data.tasks.map(x => {
          return <Task name={x} userId={data.id} moveTask={moveTask}/>
        })}
        <button onClick={() => this.handleButtonClick()}>+ Add a card</button>
      </div>
    )
  }
}
