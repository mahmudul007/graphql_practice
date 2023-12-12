exports.typeDefs = `#graphql
    
      type Book {
        title: String
        author: Author

      }
      type Author {
        name: String
        books: [Book]
      }
    
    
      type Query {
        books: [Book]
        users:[User]
        userById(id:ID!):User

      }

      type User {
        id: ID!
        name: String!
        email: String!
        password: String!
      
      }
      type Message {
        message: String!
        result:User
      }
      type Mutation {
        createUser(name:String,email:String,password:String):User
        updateUser(id:ID!name:String,email:String,password:String):User
        deleteUser(id:ID!):Message
      }
    `;