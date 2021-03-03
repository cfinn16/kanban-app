import React, { Component } from 'react';

export default class Task extends Component {

  render () {
    const { name, userId, moveTask } = this.props;
    return (
      <div className="task">
        <button
          onClick={() => moveTask("left", name, userId)}
          className={userId === 0 ? "disabled" : ""}
          disabled={userId === 0}
        >
          {"<"}
        </button>
        <p>{name}</p>
        <button
          onClick={() => moveTask("right", name, userId)}
          className={userId === 3 ? "disabled" : ""}
          disabled={userId === 3}
        >
          {">"}
        </button>
      </div>
    )
  }
}
