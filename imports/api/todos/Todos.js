import SimpleSchema from 'simpl-schema';

const Todos = new Mongo.Collection('todos');
const TodoSchema = new SimpleSchema({
  name: String,
  description: String,
})

Todos.attachSchema(TodoSchema);
export default Todos;

