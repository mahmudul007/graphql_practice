export default `
     createTodo(title: String!, is_complete: Boolean): Todo,
      updateTodo(id: ID!, title: String, is_complete: Boolean):Todo,
      deleteTodo(id: ID!): Todo
`;
