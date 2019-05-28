import { Meteor } from 'meteor/meteor';
import Todos from './Todos';

Meteor.publish('todo.list', function () {
  return Todos.find();
});