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
        user:User
        login(email:String,password:String,token:String):User

      }

      type User {
        id: ID!
        name: String!
        email: String
        password: String!
      
      }
      type Login {
        email: String!
        password: String!
        token: String!
        
      }

      type Message {
        token:String
        user:User
       
      }
      type Mutation {
        createUser(name:String,email:String,password:String):Message
        updateUser(id:ID!name:String,email:String,password:String):User
        deleteUser(id:ID!):Message
      
      }
    `;