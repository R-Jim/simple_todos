import React, { Component } from 'react';
import TodoWithTrackerContainer from '../containers/TodoWithTrackerContainer';
import TodoWithSagaChannelContainer from '../containers/TodoWithSagaChannelContainer';

export class Todos extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>
                withTracker
              </td>
              <td></td>
              <td>
                Saga event channel
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <TodoWithTrackerContainer />
              </td>
              <td style={{ width: '100px' }}></td>
              <td>
                <TodoWithSagaChannelContainer />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Todos
