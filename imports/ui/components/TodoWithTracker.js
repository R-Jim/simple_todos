import React, { Component } from 'react'

export class TodoWithTracker extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {list.map(({ _id, name, description }) =>
          (<h4 key={_id}>{name}: {description}</h4>))}
      </div>
    )
  }
}
export default TodoWithTracker;
