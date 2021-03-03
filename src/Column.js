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
        <div className="name">
          <p>{data.name}</p>
        </div>
        {data.tasks && data.tasks.map((x, idx) => {
          return <Task name={x} userId={data.id} moveTask={moveTask} idx={idx}/>
        })}
        <button onClick={() => this.handleButtonClick()}>+ Add a card</button>
      </div>
    )
  }
}
