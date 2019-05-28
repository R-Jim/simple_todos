import React, { Component } from 'react'

export class TodoWithSagaChannel extends Component {
  componentDidMount() {
    console.log(this.props);
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { list = [] } = this.props;
    return (
      <div>
        {list.map(({ _id, name, description }) => (<h4 key={_id}>{name}: {description}</h4>))}
      </div>
    )
  }
}
export default TodoWithSagaChannel;
