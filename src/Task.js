import React, { Component } from 'react';

export default class Task extends Component {

  render () {
    const { name, userId, moveTask } = this.props;
    return (
      <div className="task">
        {userId > 0 &&
          <button onClick={() => moveTask("left", name, userId)}>{"<"}</button>
        }
        <p>{name}</p>
        {userId < 3 &&
          <button onClick={() => moveTask("right", name, userId)}>{">"}</button>
        }
      </div>
    )
  }
}
