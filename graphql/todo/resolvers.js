import getTodo from "../../service/todo.js";
import updateTodo from "../../service/todo.js";
import getSingleTodo from "../../service/todo.js";
import deleteTodo from "../../service/todo.js";

const queries = {
  todos: () => getTodo(),
  todo: (parent, { id }) => getSingleTodo(id),
};

const mutations = {
  createTodo: (parent, { title }) => createTodo(title),
  updateTodo: (parent, { title, is_complete, id }) =>
    updateTodo(id, title, is_complete),
  deleteTodo: (parent, { id }) => deleteTodo(id),
};

const resolvers = { queries, mutations };

export default resolvers;
