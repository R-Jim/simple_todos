import { compose } from 'redux';
import { withTracker } from 'meteor/react-meteor-data';
import TodoWithTracker from '../components/TodoWithTracker';
import { Meteor } from 'meteor/meteor';
import Todos from '../../api/todos/Todos';

export default compose(withTracker(() => {
  const handleFetchTodoList = Meteor.subscribe('todo.list');
  let list = [];
  if (handleFetchTodoList.ready()) {
    list = Todos.find().fetch();
  }
  return {
    isReady: handleFetchTodoList.ready(),
    list,
  }
}))(TodoWithTracker);