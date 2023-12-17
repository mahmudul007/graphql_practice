const {createUser} = require("../../service/user");
const {getUser} = require("../../service/user");
const {getUserById} = require("../../service/user");
const {updateUser} = require("../../service/user");
const {deleteUser} = require("../../service/user");
const {login} = require("../../service/user");
const {createTodo} = require("../../service/todo");
const{ getTodo} = require("../../service/todo");
const {updateTodo} = require("../../service/todo");
const {getSingleTodo} = require("../../service/todo");
const {deleteTodo} = require("../../service/todo");
//test

exports.resolvers = {
    Author: {
        books: () => books,
        },
    Query: {

      todos: () => getTodo(),
      todo: (parent,{id})=>getSingleTodo (id),
      books: () => books,
      users: (_,__,context) => getUser(),
      user: (_,_,context)=> {
        // console.log(context.user.email)
        return getUserById(context.user.id)
      },
      // login:(parent,{email,password,token},context)=>{ getUserById(context.user.email)
      // }

    },
    Mutation: {
        createUser:(parent ,{name,email,password},context)=> createUser(name,email,password),
        updateUser:(parent,{name,email,password,id})=>updateUser(id,name,email,password),
        deleteUser:(parent,{id})=>deleteUser(id),
        createTodo:(parent,{title})=>createTodo (title),
        updateTodo:(parent,{title,is_complete,id})=>updateTodo (id,title,is_complete),
        deleteTodo:(parent,{id})=>deleteTodo (id),
        }

    
  };