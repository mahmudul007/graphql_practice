const {createUser} = require("../../service/user");
const {getUser} = require("../../service/user");
const {getUserById} = require("../../service/user");
const {updateUser} = require("../../service/user");
const {deleteUser} = require("../../service/user");

exports.resolvers = {
    Author: {
        books: () => books,
        },
    Query: {
      books: () => books,
      users: () => getUser(),
      userById: (parent,{id},context)=> getUserById(id)
    },
    Mutation: {
        createUser:(parent ,{name,email,password},context)=> createUser(name,email,password),
        updateUser:(parent,{name,email,password,id})=>updateUser(id,name,email,password),
        deleteUser:(parent,{id})=>deleteUser(id)
        }

    
  };