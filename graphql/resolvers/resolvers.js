const {createUser} = require("../../service/user");
const {getUser} = require("../../service/user");
const {getUserById} = require("../../service/user");
const {updateUser} = require("../../service/user");
const {deleteUser} = require("../../service/user");
const {login} = require("../../service/user");

exports.resolvers = {
    Author: {
        books: () => books,
        },
    Query: {
      books: () => books,
      users: (_,__,context) => getUser(),
      user: (parent,_,context)=> {
        // console.log(context.user.email)
        return getUserById(context.user.id)
      },
      // login:(parent,{email,password,token},context)=>{ getUserById(context.user.email)
      // }

    },
    Mutation: {
        createUser:(parent ,{name,email,password},context)=> createUser(name,email,password),
        updateUser:(parent,{name,email,password,id})=>updateUser(id,name,email,password),
        deleteUser:(parent,{id})=>deleteUser(id)
        }

    
  };